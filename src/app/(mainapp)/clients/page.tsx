import ClientsHeader from "@/components/page_components/clients/ClientsHeader";
import ClientsTable from "@/components/page_components/clients/ClientsTable";
import React from "react";

export default function page() {
	return (
		<>
			<ClientsHeader />
			<section className="bg-white rounded-2xl border border-[#E2E2E2] min-h-[70vh] h-max">
				<ClientsTable />
			</section>
		</>
	);
}
