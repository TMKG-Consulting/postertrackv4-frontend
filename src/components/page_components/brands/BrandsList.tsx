"use client";
import React, { useState } from "react";
import {
	useQuery,
	keepPreviousData,
	useQueryClient,
} from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import useCredentials from "@/hooks/useCredentials";
import { ApiInstance } from "@/utils";
import Pagination from "@/components/shared/Pagination";
import { Advertiser, Brand } from "@/types";
import AppButton from "@/components/shared/AppButton";
import EditIcon from "@/components/shared/icons/EditIcon";
import DeleteIcon from "@/components/shared/icons/DeleteIcon";
import Modal from "@/components/shared/Modal";
import useAlert from "@/hooks/useAlert";
import CreateBrandForm from "./create/CreateBrandForm";
import SearchInput from "@/components/shared/SearchInput";

export default function BrandsList() {
	const { accessToken } = useCredentials();
	const [currentPage, setCurrentPage] = useState(1);
	const [search, setSearch] = useState("");

	const [brandTodelete, setBrandTodelete] = useState<number | undefined>(
		undefined
	);
	const [brandToEdit, setBrandToEdit] = useState<Brand | null>(null);
	const [isDeleting, setIsDeleting] = useState(false);

	const { showAndHideAlert } = useAlert();
	const queryClient = useQueryClient();

	const { data, isLoading, error, isFetching } = useQuery({
		queryKey: ["brandsAndAdvertisers", currentPage, search],
		queryFn: async () => {
			const res = await ApiInstance.get(
				`/api/brands?page=${currentPage}&search=${search}`,
				{
					headers: {
						"auth-token": accessToken,
					},
				}
			);

			return res.data;
		},
		placeholderData: keepPreviousData,
		retry: false,
	});

	async function deleteBrand() {
		try {
			setIsDeleting(true);

			await ApiInstance.delete("/api/brand/" + brandTodelete, {
				headers: {
					"auth-token": accessToken,
				},
			});

			queryClient.setQueryData(
				["brandsAndAdvertisers", currentPage],
				(prev) => {
					// @ts-ignore
					const data = { ...prev };
					// @ts-ignore
					data.data = data.data.filter((c) => c.id !== brandTodelete);

					return data;
				}
			);

			showAndHideAlert({ message: "Brand Deleted", type: "success" });
			setIsDeleting(false);
			setBrandTodelete(undefined);
		} catch (error) {
			// @ts-ignore
			showAndHideAlert({ message: error.message, type: "error" });
			setIsDeleting(false);
		}
	}

	function getRandomColor() {
		// Generate a random color
		const randomColor = Math.floor(Math.random() * 16777215)
			.toString(16)
			.padStart(6, "0");
		const color = `#${randomColor}`;

		// Convert hex color to RGB
		const r = parseInt(color.slice(1, 3), 16);
		const g = parseInt(color.slice(3, 5), 16);
		const b = parseInt(color.slice(5, 7), 16);

		// Calculate the brightness of the color
		const brightness = (r * 299 + g * 587 + b * 114) / 1000;

		// If the color is too light, adjust it to be darker
		if (brightness > 200) {
			const darkerColor = `#${Math.floor(r / 2)
				.toString(16)
				.padStart(2, "0")}${Math.floor(g / 2)
				.toString(16)
				.padStart(2, "0")}${Math.floor(b / 2)
				.toString(16)
				.padStart(2, "0")}`;
			return darkerColor;
		}

		return color;
	}

	return (
		<>
			<Modal
				hideModal={isDeleting ? undefined : () => setBrandTodelete(undefined)}
				showModal={brandTodelete !== undefined}>
				<div className="flex flex-col items-center justify-center p-[20px]">
					<h6 className="text-center text-[3rem] font-semibold">
						Are you sure you want to delete this brand
					</h6>
					<div className="my-10 grid grid-cols-2 gap-5 w-full">
						<AppButton
							onClick={deleteBrand}
							showLoading={isDeleting}
							label="Delete"></AppButton>
						<AppButton
							label="Cancel"
							className="!bg-[#e4e4e4] !text-appBlack"
							onClick={() => setBrandTodelete(undefined)}
							showLoading={isDeleting}></AppButton>
					</div>
				</div>
			</Modal>
			<Modal
				hideModal={isDeleting ? undefined : () => setBrandToEdit(null)}
				showModal={brandToEdit !== null}>
				<div className="flex flex-col items-center justify-center p-[20px]">
					<CreateBrandForm
						isEditing
						initialValues={brandToEdit ?? undefined}
						brandId={brandToEdit?.id!}
						editCallback={(res) => {
							queryClient.setQueryData(
								["brandsAndAdvertisers", currentPage],
								(prev) => {
									// @ts-ignore
									const data = { ...prev };
									const index = data.data.findIndex(
										// @ts-ignore
										(d) => d.id === res.updatedBrand.id
									);

									data.data[index] = { ...res.updatedBrand };

									return data;
								}
							);

							queryClient.refetchQueries({
								queryKey: ["brandsAndAdvertisers", currentPage],
							});

							setBrandToEdit(null);
						}}
					/>
				</div>
			</Modal>
			<section className="flex items-center justify-end">
				<SearchInput
					background="transparent"
					borderColor="#B3B3B3"
					setSearch={setSearch}
				/>
			</section>
			<section className="grid md:grid-cols-3 gap-7 my-10">
				{isLoading || isFetching
					? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((d, i) => (
							<div
								key={i}
								className="w-full h-[100px] bg-[#e5e5e5] animate-pulse rounded-2xl"></div>
					  ))
					: data.data
							//@ts-ignore
							?.sort((a: Brand, b: Brand) => {
								return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
							})
							//@ts-ignore
							.map((item: Brand, index) => {
								return (
									<div
										key={index}
										className="w-full rounded-2xl p-5 border-[1.5px] border-[#E2E2E2] bg-white">
										<div className="flex items-center gap-5">
											{item.logo && item.logo !== "null" && (
												<Image
													className="w-[50px] h-[50px] rounded-full object-cover"
													width={50}
													height={50}
													alt="poster-track"
													src={item.logo}
												/>
											)}
											{!item.logo ||
												(item.logo === "null" && (
													<div
														style={{ backgroundColor: getRandomColor() }}
														className="w-[50px] h-[50px] rounded-full flex items-center justify-center">
														<span className="text-3xl font-bold text-white">
															{item.name.split("")[0].toUpperCase()}
														</span>
													</div>
												))}
											<div className="flex flex-col gap-y-1">
												<span className="text-[17px] font-semibold">
													{item.name}
												</span>
												{/* @ts-ignore */}
												<span className="text-[15px]">
													{item.advertiser?.name}
												</span>
											</div>
										</div>
										<div className="flex items-center gap-5 mt-5">
											<AppButton
												onClick={() => setBrandTodelete(item.id)}
												className="!w-[100px] !bg-[#ed323730] items-center gap-2">
												<DeleteIcon />
												<span className="text-primary">Delete</span>
											</AppButton>
											<AppButton
												onClick={() => setBrandToEdit(item)}
												className="!w-[100px] items-center gap-2">
												<EditIcon fill="white" />
												<span className="">Edit</span>
											</AppButton>
										</div>
									</div>
								);
							})}
			</section>
			<section>
				<div className="my-12 flex items-center justify-center md:justify-end px-5 md:px-10">
					<Pagination
						currentPage={currentPage}
						totalPages={data?.totalPages}
						setCurrentPage={setCurrentPage}
					/>
				</div>
			</section>
		</>
	);
}
