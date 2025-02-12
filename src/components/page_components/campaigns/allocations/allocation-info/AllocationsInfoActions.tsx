"use client";
import AppButton from "@/components/shared/AppButton";
import React from "react";
import PrintIcon from "@/components/shared/icons/PrintIcon";
import ExportIcon from "@/components/shared/icons/ExportIcon";
import ChevronIcon from "@/components/shared/icons/ChevronIcon";
import FiltersIcon from "@/components/shared/icons/FiltersIcon";
import SearchInput from "@/components/shared/SearchInput";
import Kebab from "@/components/shared/icons/Kebab";

export default function AllocationsInfoActions() {
	return (
		<div className="p-8 flex flex-col gap-y-5 md:flex-row md:items-center justify-between">
			<div className="flex items-center gap-x-7">
				<SearchInput />
				<div className="hidden md:block w-[40px] md:w-[100px]">
					{/* <AppButton
						className="!bg-transparent border-[#BFBFBF] border-[1.5px] !h-[40px]"
						fullyRounded>
						<div className="flex items-center gap-x-3">
							<FiltersIcon />
							<span className="hidden md:flex text-2xl font-medium text-[#666666]">
								Filters
							</span>
						</div>
					</AppButton> */}
				</div>
				<div className="md:hidden w-[40px] md:w-[100px]">
					<AppButton
						className="!bg-transparent border-[#BFBFBF] border-[1.5px] !h-[40px]"
						fullyRounded>
						<div className="flex items-center gap-x-3">
							<Kebab />
						</div>
					</AppButton>
				</div>
			</div>
		</div>
	);
}
