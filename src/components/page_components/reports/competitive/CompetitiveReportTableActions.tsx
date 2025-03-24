"use client";
import AppButton from "@/components/shared/AppButton";
import React, { useEffect, useRef } from "react";
import PrintIcon from "@/components/shared/icons/PrintIcon";
import ExportIcon from "@/components/shared/icons/ExportIcon";
import ChevronIcon from "@/components/shared/icons/ChevronIcon";
import MapIcon from "@/components/shared/icons/MapIcon";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import localeEn from "air-datepicker/locale/en";
import CalendarIcon from "@/components/shared/icons/CalendarIcon";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CompetitiveReportTableActions() {
	const calendarRef = useRef<AirDatepicker<HTMLElement> | null>(null);

	const params = useParams();

	useEffect(() => {
		calendarRef.current = new AirDatepicker("#report-month", {
			minView: "months",
			view: "months",
			position: "left top",
			locale: localeEn,
		});
	}, []);

	return (
		<div className="p-8 flex flex-col gap-y-5 md:flex-row md:items-center justify-between">
			<div className="hidden md:flex items-center gap-x-8">
				<div className="w-[40px] xl:w-[100px]">
					<AppButton
						className="!bg-transparent border-primary border-[1.5px] !h-[40px]"
						fullyRounded>
						<div className="flex items-center gap-x-3">
							<PrintIcon />
							<span className="hidden xl:flex text-2xl font-medium text-primary">
								Print
							</span>
						</div>
					</AppButton>
				</div>
				<div className="w-[150px]">
					<AppButton className="!bg-appBlack !h-[40px]" fullyRounded>
						<div className="flex items-center gap-x-5">
							<ExportIcon />
							<span className="text-2xl font-medium text-white">Export</span>
							<ChevronIcon />
						</div>
					</AppButton>
				</div>
			</div>
			<div className="flex items-center gap-x-7">
				<Link href={`/reports/competitive/map/${params.advertiserId}`}>
					<AppButton
						className="!w-1/2 md:!w-[150px] !bg-[#EB410B24] !text-primary border-primary border-[1.5px] font-medium"
						fullyRounded>
						<div className="w-full flex gap-3 items-center justify-center">
							<MapIcon />
							<span>Show on map</span>
						</div>
					</AppButton>
				</Link>
				{/* <label htmlFor="report-month" className="cursor-pointer">
					<input
						type="button"
						className=" h-[0px] opacity-0 absolute"
						id="report-month"
					/>
					<div className="!w-1/2 md:!w-[150px] h-[50px] !bg-transparent !text-appBlack border-[#bfbfbf] border-[1.5px] font-medium rounded-full flex items-center justify-center gap-3">
						<CalendarIcon />
						<span className="text-2xl font-medium">January 2024</span>
					</div>
				</label> */}
			</div>
		</div>
	);
}
