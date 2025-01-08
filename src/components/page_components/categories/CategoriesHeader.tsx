"use client";
import React from "react";
import Link from "next/link";
import AppButton from "@/components/shared/AppButton";
import PlusIcon from "@/components/shared/icons/PlusIcon";
export default function CategoriesHeader() {
	return (
		<section className="w-full h-[10rem] flex items-center justify-between">
			<h4 className="text-[2rem] md:text-[3rem] font-black">Categories</h4>
			<div className="w-[150px] md:w-[200px]">
				<Link href={"/categories/create"}>
					<AppButton fullyRounded>
						<div className="flex items-center gap-x-2 md:gap-x-5">
							<PlusIcon />
							<span className="md:text-[1.7rem] font-medium">
								New Categories
							</span>
						</div>
					</AppButton>
				</Link>
			</div>
		</section>
	);
}