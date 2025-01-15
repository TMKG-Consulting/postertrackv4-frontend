"use client";
import React, { useState } from "react";
import Pagination from "@/components/shared/Pagination";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ApiInstance } from "@/utils";
import useCredentials from "@/hooks/useCredentials";
import CategoriesTableActions from "./CategoriesTableAction";
import DeleteIcon from "@/components/shared/icons/DeleteIcon";
import AppButton from "@/components/shared/AppButton";
import Modal from "@/components/shared/Modal";
import useAlert from "@/hooks/useAlert";
import EditIcon from "@/components/shared/icons/EditIcon";
import CreateACategoryForm from "./create/CreateCategoryForm";
import { Category } from "@/types";

export default function CategoriesTable() {
	const { accessToken } = useCredentials();
	const [currentPage, setCurrentPage] = useState(1);

	const [categoryTodelete, setCategoryTodelete] = useState<number | null>(null);
	const [categoryToEdit, setCategoryToEdit] = useState<Category | null>(null);
	const [isDeleting, setIsDeleting] = useState(false);

	const { showAndHideAlert } = useAlert();
	const queryClient = useQueryClient();

	const { data, isLoading, error, isFetching } = useQuery({
		queryKey: ["categories", currentPage],
		queryFn: async () => {
			const response = await ApiInstance.get(
				"/api/categories?page=" + currentPage,
				{
					headers: {
						"auth-token": accessToken,
					},
				}
			);

			return response.data;
		},
	});

	async function deleteCategory() {
		try {
			setIsDeleting(true);

			await ApiInstance.delete("/api/category/" + categoryTodelete, {
				headers: {
					"auth-token": accessToken,
				},
			});

			queryClient.setQueryData(["categories", currentPage], (prev) => {
				// @ts-ignore
				const data = { ...prev };
				// @ts-ignore
				data.data = data.data.filter((c) => c.id !== categoryTodelete);

				return data;
			});

			showAndHideAlert({ message: "Category Deleted", type: "success" });
			setIsDeleting(false);
			setCategoryTodelete(null);
		} catch (error) {
			// @ts-ignore
			showAndHideAlert({ message: error.message, type: "error" });
			setIsDeleting(false);
		}
	}

	return (
		<div className="h-full flex flex-col">
			<Modal
				hideModal={isDeleting ? undefined : () => setCategoryTodelete(null)}
				showModal={categoryTodelete !== null}>
				<div className="flex flex-col items-center justify-center p-[20px]">
					<h6 className="text-center text-[3rem] font-semibold">
						Are you sure you want to delete this category
					</h6>
					<div className="my-10 grid grid-cols-2 gap-5 w-full">
						<AppButton
							onClick={deleteCategory}
							showLoading={isDeleting}
							label="Delete"></AppButton>
						<AppButton
							label="Cancel"
							className="!bg-[#e4e4e4] !text-appBlack"
							onClick={() => setCategoryTodelete(null)}
							showLoading={isDeleting}></AppButton>
					</div>
				</div>
			</Modal>
			<Modal
				hideModal={isDeleting ? undefined : () => setCategoryToEdit(null)}
				showModal={categoryToEdit !== null}>
				<div className="flex flex-col items-center justify-center p-[20px]">
					<CreateACategoryForm
						isEditing
						initialValues={categoryToEdit ?? undefined}
						categoryId={categoryToEdit?.id}
						editCallback={(res) => {
							queryClient.setQueryData(["categories", currentPage], (prev) => {
								// @ts-ignore
								const data = { ...prev };
								const index = data.data.findIndex(
									// @ts-ignore
									(d) => d.id === res.updatedCategory.id
								);

								data.data[index] = res.updatedCategory;

								return data;
							});

							setCategoryToEdit(null);
						}}
					/>
				</div>
			</Modal>
			<CategoriesTableActions />
			<div className="grow w-full flex flex-col px-8">
				{isLoading || isFetching
					? [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((d, i) => (
							<div key={i} className=" py-[10px] border-b border-b-gray-100">
								<div className="bg-[#e5e5e5] anaimate-pulse h-[7px] rounded-full w-[100px]  mb-2"></div>
								<div className="bg-[#e5e5e5] anaimate-pulse h-[7px] rounded-full w-[50px]"></div>
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
										onClick={() => setCategoryTodelete(d.id)}
										className="!w-[100px] !bg-[#ed323730] items-center gap-2">
										<DeleteIcon />
										<span className="text-primary">Delete</span>
									</AppButton>
									<AppButton
										onClick={() => setCategoryToEdit(d)}
										className="!w-[100px] items-center gap-2">
										<EditIcon fill="white" />
										<span className="">Edit</span>
									</AppButton>
								</div>
							</div>
					  ))}
			</div>
			<div className="my-12 flex items-center justify-center md:justify-end px-5 md:px-10">
				{!isLoading && !isFetching && (
					<Pagination
						currentPage={currentPage}
						totalPages={data?.totalPages}
						setCurrentPage={setCurrentPage}
					/>
				)}
			</div>
		</div>
	);
}
