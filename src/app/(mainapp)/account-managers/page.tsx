import AccountManagerHeader from "@/components/page_components/account-managers/AccountManagerHeader";
import AccountManagersTable from "@/components/page_components/account-managers/AccountManagersTable";
import React from "react";

export default function page() {
	return (
		<>
			<AccountManagerHeader />
			<section className="bg-white rounded-2xl border border-[#E2E2E2] min-h-[70vh] h-max">
				<AccountManagersTable />
			</section>
		</>
	);
}
