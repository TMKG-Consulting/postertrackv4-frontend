"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRootStore } from "@/components/shared/providers/RootProvider";
import Dropdown from "@/components/shared/Dropdown";
import LogoutIcon from "@/components/shared/icons/LogoutIcon";
import UserIcon from "@/components/shared/icons/UserIcon";
import useCredentials from "@/hooks/useCredentials";
import { useRouter } from "next/navigation";
import useAlert from "@/hooks/useAlert";
import { ApiInstance } from "@/utils";
import AppLoader from "@/components/shared/AppLoader";

export default function DashboardHeader() {
	const { userDetails, setUserDetails } = useRootStore();
	const { clearAllCredentials, accessToken } = useCredentials();
	const router = useRouter();
	const [isUploading, setIsUploading] = useState(false);
	const { showAndHideAlert } = useAlert();
	const [file, setFile] = useState<File | null>();

	async function profileUploadHandler() {
		try {
			if (!file) {
				return;
			}

			setIsUploading(true);

			const data = new FormData();

			data.append(
				"profilePicture",
				new Blob([file], { type: file?.type }),
				file?.name
			);
			const res = await ApiInstance.put("/api/users/" + userDetails?.id, data, {
				headers: {
					"auth-token": accessToken,
				},
			});

			setUserDetails(res.data);

			console.log(res.data);
			showAndHideAlert({ message: "Profile Picture Updated", type: "success" });
			setIsUploading(false);
		} catch (error) {
			// @ts-ignore
			showAndHideAlert({ message: error.message, type: "error" });
			setIsUploading(false);
		}
	}

	useEffect(() => {
		if (file) {
			profileUploadHandler();
		}
	}, [file]);

	return (
		<section className="w-full h-[10rem] flex items-center justify-between">
			<h4 className="text-[2.5rem] md:text-[3rem] font-black">
				Hello, {userDetails?.firstname}
			</h4>
			<Dropdown
				renderButton={({ setOpen, open }) => (
					<button className="h-[50px]" onClick={() => setOpen(!open)}>
						{userDetails?.profilePicture && !isUploading && (
							<Image
								className="w-[50px] h-[50px] rounded-full object-cover"
								width={50}
								height={50}
								alt="poster-track"
								src={userDetails?.profilePicture}
								priority
							/>
						)}

						{!userDetails?.profilePicture && !isUploading && (
							<Image
								className="w-[50px] h-[50px] rounded-full object-cover"
								width={50}
								height={50}
								alt="poster-track"
								src="/no-avatar.svg"
								priority
							/>
						)}

						{isUploading && (
							<div className="w-[50px] h-[50px] rounded-full bg-primary flex items-center justify-center">
								<AppLoader size={34} />
							</div>
						)}
					</button>
				)}
				items={[
					{
						title: "Update Profile Pic",
						onClick: () => {},
						classname:
							"py-5 font-medium text-2xl text-left flex items-center gap-7",
						icon: <UserIcon />,
					},
					{
						title: "Logout",
						onClick: () => {
							clearAllCredentials();
							router.replace("/auth/login");
						},
						classname:
							"py-5 font-medium text-red-400 text-2xl text-left flex items-center gap-7",
						icon: <LogoutIcon />,
					},
				]}
				renderItem={({ item, index }) =>
					item.title === "Update Profile Pic" ? (
						<label className="cursor-pointer" key={index} htmlFor="profile-pic">
							<input
								type="file"
								className="absolute w-0 h-0 opacity-0 invisible"
								id="profile-pic"
								onChange={(e) => {
									const files = e.target.files;
									if (files) {
										setFile(files[0]);
									}

									e.target.value = "";
								}}
								multiple={false}
							/>
							<div key={index} className={item.classname}>
								{item.icon}
								{item.title}
							</div>
						</label>
					) : (
						<button
							onClick={item.onClick}
							key={index}
							className={item.classname}>
							{item.icon}
							{item.title}
						</button>
					)
				}
				top={80}
				right={0}
				dropdownWidth="200px"
			/>
		</section>
	);
}
