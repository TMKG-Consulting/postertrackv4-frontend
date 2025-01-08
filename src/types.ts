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
	industry: string | Industry;
	additionalEmail: string[];
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
}
