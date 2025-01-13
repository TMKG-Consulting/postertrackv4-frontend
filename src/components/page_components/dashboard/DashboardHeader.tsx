"use client";
import React from "react";
import Image from "next/image";
import { useRootStore } from "@/components/shared/providers/RootProvider";
import Dropdown from "@/components/shared/Dropdown";
import { button } from "framer-motion/client";
import LogoutIcon from "@/components/shared/icons/LogoutIcon";
import UserIcon from "@/components/shared/icons/UserIcon";
import useCredentials from "@/hooks/useCredentials";
import { useRouter } from "next/navigation";

export default function DashboardHeader() {
	const { userDetails } = useRootStore();
	const { clearAllCredentials } = useCredentials();
	const router = useRouter();

	return (
		<section className="w-full h-[10rem] flex items-center justify-between">
			<h4 className="text-[2.5rem] md:text-[3rem] font-black">
				Hello, {userDetails?.firstname}
			</h4>
			<Dropdown
				renderButton={({ setOpen, open }) => (
					<button className="h-[50px]" onClick={() => setOpen(!open)}>
						{userDetails?.profilePicture ? (
							<Image
								className="w-[50px] h-[50px] rounded-full object-cover"
								width={50}
								height={50}
								alt="poster-track"
								src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							/>
						) : (
							<Image
								className="w-[50px] h-[50px] rounded-full object-cover"
								width={50}
								height={50}
								alt="poster-track"
								src="/no-avatar.svg"
							/>
						)}
					</button>
				)}
				items={[
					{
						title: "Update Profile  Pic",
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
				renderItem={({ item, index }) => (
					<button onClick={item.onClick} key={index} className={item.classname}>
						{item.icon}
						{item.title}
					</button>
				)}
				top={80}
				right={0}
				dropdownWidth="200px"
			/>
		</section>
	);
}
