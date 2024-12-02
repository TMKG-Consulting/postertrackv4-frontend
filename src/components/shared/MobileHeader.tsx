"use client";
import React from "react";
import Image from "next/image";
import LogoText from "./icons/LogoText";
import HamburgerIcon from "./icons/HamburgerIcon";

export default function MobileHeader() {
	return (
		<header className="bg-appBlack h-[7rem] flex items-center justify-between lg:hidden px-8 sticky top-0">
			<div className="flex items-center gap-x-5">
				<Image
					src={"/poster-track-logo.png"}
					width={40}
					height={40}
					alt="poster-track-logo"
				/>
				<LogoText />
			</div>
			<button>
				<HamburgerIcon />
			</button>
		</header>
	);
}
