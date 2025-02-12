export interface LoginData {
	email: string;
	password: string;
}

export interface User {
	firstname?: string;
	lastname?: string;
	email: string;
	phone: string;
	address: string;
	password?: string;
	name?: string | number;
	id?: number;
	profilePicture?: string;
	status?: boolean;
}

export interface AccountManager extends User {
	role: "CHIEF_ACCOUNT_MANAGER" | "ACCOUNT_MANAGER" | "SUPER_ADMIN";
}

export interface FieldAuditor extends User {
	role: "FIELD_AUDITOR";
	statesCovered: number[] | State[];
}

export interface Client extends User {
	role: "CLIENT_AGENCY_USER";
	industryId?: string | Industry;
	industry?: Industry;
	additionalEmail: string[];
	advertiser?: Advertiser;
}

export interface Industry {
	id: number;
	name: string;
}

export interface State {
	id?: number;
	name: string;
	regionId: number | string;
}

export interface Region {
	id?: number;
	name: string;
}

export interface City {
	id?: number;
	name: string;
	stateId: number | string;
}

export interface Advertiser {
	id?: number;
	name: string;
}

export interface Category {
	id?: number;
	name: string;
}

export interface Brand {
	id?: number;
	name: string;
	advertiserId: number | string;
	categoryId: number | string;
	advertiser?: Advertiser;
	logo?: string;
	category?: Category;
}

export interface CampaignCreateData {
	clientId: string;
	accountManagerId: string;
}

export interface Campaign {
	id: number;
	clientId: number;
	accountManagerId: number;
	siteList: Site[];
	accountManager?: AccountManager;
	client?: Client;
	campaignID: string;
	uploadedAt?: Date;
}

export interface CampaignAllocation {
	accountManager: string;
	campaignId: string;
	client: { id: number; name: string };
	dateUploaded: string;
	totalAuditors: number;
	totalSites: number;
	mainId: number;
}

export interface Site {
	city: string;
	code: string;
	brand: string;
	state: string;
	format: string;
	location: string;
	mediaOwner: string;
}

export interface SiteAssignment {
	id: number;
	siteCode: string;
	fieldAuditorId: number;
	status: "pending" | "approved" | "disapproved";
}
