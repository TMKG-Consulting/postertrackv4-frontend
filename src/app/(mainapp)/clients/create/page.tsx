import CreateClientForm from "@/components/page_components/clients/create/CreateClientForm";
import React from "react";

export default function page() {
	return (
		<section className="flex items-center justify-center min-h-screen py-12 xl:py-0">
			<CreateClientForm />
		</section>
	);
}
