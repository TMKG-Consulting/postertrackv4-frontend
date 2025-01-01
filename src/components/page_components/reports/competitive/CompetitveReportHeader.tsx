"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import AppButton from "@/components/shared/AppButton";
import ChevronIcon from "@/components/shared/icons/ChevronIcon";
import CalendarIcon from "@/components/shared/icons/CalendarIcon";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import localeEn from "air-datepicker/locale/en";

export default function CompetitiveReportHeader({ forMap = false }) {
	const calendarRef = useRef<AirDatepicker<HTMLElement> | null>(null);

	useEffect(() => {
		calendarRef.current = new AirDatepicker("#report-month", {
			minView: "months",
			view: "months",
			position: "left top",
			locale: localeEn,
		});
	}, []);

	return (
		<>
			<section className="w-full h-[15rem] md:h-[10rem] flex flex-col md:flex-row md:items-center justify-center gap-y-10 md:justify-between">
				<div className="w-full flex items-center justify-between md:justify-start gap-5">
					<Link href={forMap ? "/reports/competitive/jjjg" : "/reports"}>
						<AppButton
							fullyRounded
							className="!w-[82px] !h-[39px] gap-x-3 !bg-transparent border-appBlack border-[1.5px]">
							<span className="flex rotate-[90deg]">
								<ChevronIcon fill="#1e1e1e" />
							</span>
							<span className="text-appBlack">Back</span>
						</AppButton>
					</Link>
					<h2 className="text-[2rem] lg:text-[2.4rem] xl:text-[28px] font-black">
						Competitive Report
					</h2>
				</div>
				{!forMap && (
					<div className="w-full md:w-max flex items-center gap-3 md:gap-5">
						<AppButton
							className="!w-1/2 md:!w-[150px] font-medium !bg-[#048F2B24] border-[#048F2B] border-[1.5px] !text-[#048F2B]"
							fullyRounded
							label="Publish"
						/>
					</div>
				)}
			</section>
			{!forMap && (
				<section className="flex items-center py-8 gap-8 lg::mb-10">
					<span className="text-[1.7rem] font-bold">ABC Company</span>
					<span className="flex h-[24px] w-[1px] bg-appBlack"></span>
					<span className="text-[1.7rem] font-medium">
						Total Uploads: <span className="font-bold">250</span>
					</span>
				</section>
			)}
			{forMap && (
				<section className="flex items-center justify-between py-8 lg::mb-10">
					<div className="flex items-center gap-8">
						<div className="flex items-center justify-center gap-3">
							<span className="w-[15px] h-[15px] bg-primary rounded-full flex"></span>
							<span className="text-2xl font-medium">ABC Company</span>
						</div>
						<div className="flex items-center justify-center gap-3">
							<span className="w-[15px] h-[15px] bg-[#032068] rounded-full flex"></span>
							<span className="text-2xl font-medium">Others</span>
						</div>
					</div>
					<label htmlFor="report-month" className="cursor-pointer">
						<input
							type="button"
							className=" h-[0px] opacity-0 absolute"
							id="report-month"
						/>
						<div className="!w-1/2 md:!w-[150px] h-[50px] !bg-transparent !text-appBlack border-[#bfbfbf] border-[1.5px] font-medium rounded-full flex items-center justify-center gap-3">
							<CalendarIcon />
							<span className="text-2xl font-medium">January 2024</span>
						</div>
					</label>
				</section>
			)}
		</>
	);
}
