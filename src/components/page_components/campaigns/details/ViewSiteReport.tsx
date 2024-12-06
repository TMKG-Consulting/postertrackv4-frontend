import React from "react";
import Link from "next/link";
import EyeIcon from "@/components/shared/icons/EyeIcon";

export default function ViewSiteReport() {
	return (
		<Link
			href={"/campaigns/site-report/fhfhf"}
			className="w-full flex items-center gap-x-5 text-2xl py-3 border-b-[#E3E3E3] border-b">
			<EyeIcon.Visible fill="#140100" width={18} height={17} />
			View site report
		</Link>
	);
}
