"use client";
import React, { useState } from "react";
import Pagination from "@/components/shared/Pagination";
import AdvertiserTableActions from "./AdvertiserTableActions";
import {
	useQuery,
	keepPreviousData,
	useQueryClient,
} from "@tanstack/react-query";
import { ApiInstance } from "@/utils";
import useCredentials from "@/hooks/useCredentials";
import AppButton from "@/components/shared/AppButton";
import EditIcon from "@/components/shared/icons/EditIcon";
import DeleteIcon from "@/components/shared/icons/DeleteIcon";
import { Advertiser } from "@/types";
import Modal from "@/components/shared/Modal";
import CreateAdvertiserForm from "./create/CreateAdvertiserForm";
import useAlert from "@/hooks/useAlert";

export default function AdvertisersTable() {
	const { accessToken } = useCredentials();
	const [currentPage, setCurrentPage] = useState(1);
	const queryClient = useQueryClient();
	const [isEditing, setIsEditing] = useState(false);
	const { showAndHideAlert } = useAlert();

	const [advertiserToEdit, setAdvertiserToEdit] = useState<Advertiser | null>(
		null
	);
	const [advertiserToDelete, setAdvertiserToDelete] = useState<number | null>(
		null
	);

	const { data, isLoading, error, isFetching } = useQuery({
		queryKey: ["advertisers", currentPage],
		queryFn: async () => {
			const response = await ApiInstance.get(
				`/api/advertisers?page=${currentPage}`,
				{
					headers: {
						"auth-token": accessToken,
					},
				}
			);

			return response.data;
		},
		placeholderData: keepPreviousData,
		retry: false,
	});

	async function deleteAdvertiser() {
		try {
			setIsEditing(true);

			await ApiInstance.post(
				"/api/advertiser/" + advertiserToDelete + "/delete",
				{ confirmDelete: true },
				{
					headers: {
						"auth-token": accessToken,
					},
				}
			);

			queryClient.setQueryData(["advertisers", currentPage], (prev) => {
				// @ts-ignore
				const data = { ...prev };
				// @ts-ignore
				data.data = data.data.filter((c) => c.id !== advertiserToDelete);

				return data;
			});

			showAndHideAlert({ message: "Advertiser Deleted", type: "success" });
			setIsEditing(false);
			setAdvertiserToDelete(null);
		} catch (error) {
			// @ts-ignore
			showAndHideAlert({ message: error.message, type: "error" });
			setIsEditing(false);
		}
	}

	return (
		<div className="h-full flex flex-col">
			<Modal
				hideModal={isEditing ? undefined : () => setAdvertiserToDelete(null)}
				showModal={advertiserToDelete !== null}>
				<div className="flex flex-col items-center justify-center p-[20px]">
					<h6 className="text-center text-[3rem] font-semibold">
						Are you sure you want to delete this advertiser
					</h6>
					<div className="my-10 grid grid-cols-2 gap-5 w-full">
						<AppButton
							onClick={deleteAdvertiser}
							showLoading={isEditing}
							label="Delete"></AppButton>
						<AppButton
							label="Cancel"
							className="!bg-[#e4e4e4] !text-appBlack"
							onClick={() => setAdvertiserToDelete(null)}
							showLoading={isEditing}></AppButton>
					</div>
				</div>
			</Modal>
			<Modal
				hideModal={isEditing ? undefined : () => setAdvertiserToEdit(null)}
				showModal={advertiserToEdit !== null}>
				<div className="flex flex-col items-center justify-center p-[20px]">
					<CreateAdvertiserForm
						isEditing
						initialValues={advertiserToEdit ?? undefined}
						advertiserId={advertiserToEdit?.id}
						editCallback={(res) => {
							queryClient.setQueryData(["advertisers", currentPage], (prev) => {
								// @ts-ignore
								const data = { ...prev };
								const index = data.data.findIndex(
									// @ts-ignore
									(d) => d.id === res.updatedAdvertiser.id
								);

								data.data[index] = res.updatedAdvertiser;

								return data;
							});

							setAdvertiserToEdit(null);
						}}
					/>
				</div>
			</Modal>
			<AdvertiserTableActions />
			<div className="grow w-full flex flex-col px-8">
				{isLoading || isFetching
					? [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((d, i) => (
							<div key={i} className=" py-[10px] border-b border-b-gray-100">
								<div className="bg-[#e5e5e5] animate-pulse h-[7px] rounded-full w-[100px]  mb-2"></div>
								<div className="bg-[#e5e5e5] animate-pulse h-[7px] rounded-full w-[50px]"></div>
							</div>
					  ))
					: //@ts-ignore
					  data.data.map((d, i) => (
							<div
								className="text-[1.7rem] py-[10px] border-b border-b-gray-100 font-medium flex flex-col md:flex-row items-center justify-between"
								key={i}>
								<span>{d.name}</span>
								<div className="flex items-center gap-5">
									<AppButton
										onClick={() => setAdvertiserToEdit(d)}
										className="!w-[100px] items-center gap-2">
										<EditIcon fill="white" />
										<span className="">Edit</span>
									</AppButton>
									<AppButton
										onClick={() => setAdvertiserToDelete(d.id)}
										className="!w-[100px] !bg-[#ed323730] items-center gap-2">
										<DeleteIcon />
										<span className="text-primary">Delete</span>
									</AppButton>
								</div>
							</div>
					  ))}
			</div>
			<div className="my-12 flex items-center justify-center md:justify-end px-5 md:px-10">
				<Pagination
					currentPage={currentPage}
					totalPages={data?.totalPages}
					setCurrentPage={setCurrentPage}
				/>
			</div>
		</div>
	);
}
