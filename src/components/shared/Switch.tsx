"use client";
import React from "react";

type SwitchProps = {
	isOn: boolean;
	onClick?: () => void;
};
export default function Switch({ isOn, onClick }: SwitchProps) {
	const fullClass = `${
		isOn ? "bg-[#048F2B]" : "bg-gray-300"
	} rounded-full relative w-[5.4rem] h-[2.7rem] cursor-pointer`;

	return (
		<button onClick={onClick} className={fullClass}>
			<span
				className={`transition-all duration-300 absolute top-0 bottom-0 m-auto flex w-[1.89rem] h-[1.89rem] rounded-full bg-white ${
					isOn ? "translate-x-[3rem]" : "translate-x-[0.5rem]"
				}`}></span>
		</button>
	);
}
