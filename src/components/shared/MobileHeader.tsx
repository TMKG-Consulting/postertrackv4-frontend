"use client";
import React, { useState } from "react";
import Image from "next/image";
import LogoText from "./icons/LogoText";
import HamburgerIcon from "./icons/HamburgerIcon";
import Portal from "./Portal";
import SidePanel, { SidePanelContent } from "./SidePanel";
import CloseIcon from "./icons/CloseIcon";

export default function MobileHeader() {
	const [showmenu, setShowMenu] = useState(false);

	return (
		<header className="bg-appBlack h-[7rem] flex items-center justify-between lg:hidden px-8 sticky top-0 z-[2]">
			<div className="flex items-center gap-x-5">
				<Image
					src={"/poster-track-logo.png"}
					width={40}
					height={40}
					alt="poster-track-logo"
				/>
				<LogoText />
			</div>
			<button onClick={() => setShowMenu(true)}>
				<HamburgerIcon />
			</button>
			<Portal>
				<div
					className={`lg:hidden w-full fixed top-0 left-0 z-[99999999] h-screen bg-appBlack py-10 px-8 ${
						showmenu ? "translate-x-0" : "translate-x-[-1000px]"
					} transition-all duration-300`}>
					<div className="py-5 flex items-center justify-end">
						<button onClick={() => setShowMenu(false)}>
							<CloseIcon fill="white" />
						</button>
					</div>
					<SidePanelContent
						cb={() => {
							setShowMenu(false);
						}}
					/>
				</div>
			</Portal>
		</header>
	);
}
