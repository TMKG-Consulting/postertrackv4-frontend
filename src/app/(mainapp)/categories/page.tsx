import CategoriesHeader from "@/components/page_components/categories/CategoriesHeader";
import CategoriesTable from "@/components/page_components/categories/CategoriesTable";
import React from "react";

export default function page() {
	return (
		<>
			<CategoriesHeader />
			<section className="bg-white rounded-2xl border border-[#E2E2E2] min-h-[70vh] h-max">
				<CategoriesTable />
			</section>
		</>
	);
}
