import React from "react";
import SearchInput from "@/components/shared/SearchInput";
import BrandHeader from "@/components/page_components/brands/BrandHeader";
import BrandsList from "@/components/page_components/brands/BrandsList";

export default function page() {
	return (
		<>
			<BrandHeader />
			<BrandsList />
		</>
	);
}
