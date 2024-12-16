import LockIcon from "@/components/shared/icons/LockIcon";
import React from "react";

export default function ResetFieldAuditorPassword() {
	return (
		<button
			type="button"
			onClick={() => {}}
			className="w-full flex items-center gap-x-5 text-2xl py-3 border-b-[#E3E3E3] border-b">
			<LockIcon />
			Reset Password
		</button>
	);
}
