import React from "react";
import FieldAuditorHeader from "@/components/page_components/field-auditors/FieldAuditorHeader";
import FieldAuditorsTable from "@/components/page_components/field-auditors/FieldAuditorsTable";

export default function page() {
	return (
		<>
			<FieldAuditorHeader />
			<section className="bg-white rounded-2xl border border-[#E2E2E2] min-h-[70vh] h-max">
				<FieldAuditorsTable />
			</section>
		</>
	);
}
