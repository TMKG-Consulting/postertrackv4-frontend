"use client";
import React from "react";
import Pagination from "@/components/shared/Pagination";
import CampaignTableActions from "../campaigns/CampaignTableActions";
import AppButton from "@/components/shared/AppButton";
import { useRouter } from "next/navigation";
import useCredentials from "@/hooks/useCredentials";
import { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { ApiInstance } from "@/utils";
import CampaignsTable from "../campaigns/CampaignsTable";

export default function CampaignsForComplianceReport() {
	return (
		<section className="bg-white rounded-2xl border border-[#E2E2E2] min-h-[70vh] mb-12">
			<CampaignsTable forCompliance={true} />
		</section>
	);
}
