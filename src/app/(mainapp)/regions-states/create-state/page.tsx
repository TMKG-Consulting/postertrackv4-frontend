import CreateRegionForm from "@/components/page_components/regions-states/create-region/CreateRegionForm";
import CreateStateForm from "@/components/page_components/regions-states/create-state/CreateStateForm";
import React from "react";

export default function page() {
	return (
		<section className="flex items-center justify-center min-h-screen py-12 xl:py-0">
			<CreateStateForm />
		</section>
	);
}
