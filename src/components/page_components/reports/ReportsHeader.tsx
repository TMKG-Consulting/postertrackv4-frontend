"use client";
import React from "react";
import Link from "next/link";
import AppButton from "@/components/shared/AppButton";
import PlusIcon from "@/components/shared/icons/PlusIcon";

export default function ReportsHeader() {
	return (
		<section className="w-full h-[10rem] flex items-center justify-between">
			<h4 className="text-[2rem] md:text-[3rem] font-black">Reports</h4>
		</section>
	);
}
