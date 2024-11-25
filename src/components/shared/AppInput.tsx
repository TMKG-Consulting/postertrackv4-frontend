"use client";
import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import EyeIcon from "./icons/EyeIcon";

type AppInputProps = {
	label?: string;
	name: string;
	type?: string;
	placeholder?: string;
};

export default function AppInput({
	label,
	name,
	type,
	placeholder,
}: AppInputProps) {
	return (
		<div className="w-full flex flex-col gap-y-5">
			<label
				className="text-[1.7rem] text-appBlack font-semibold"
				htmlFor={name}>
				{label}
			</label>
			<Field
				id={name}
				name={name}
				placeholder={placeholder}
				type={type}
				className="h-[50px] rounded-2xl bg-[#F5F5F5] text-2xl font-medium px-[10px] outline-none focus:border-primary border-transparent border-[1.5px] transition-all duration-200"
			/>
			<ErrorMessage
				name={name}
				component={"p"}
				className="text-2xl font-medium text-red-400"
			/>
		</div>
	);
}

AppInput.Password = function ({ label, name, placeholder }: AppInputProps) {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<div className="w-full flex flex-col gap-y-5">
			<label
				className="text-[1.7rem] text-appBlack font-semibold"
				htmlFor={name}>
				{label}
			</label>
			<div className="w-full h-[50px] rounded-2xl bg-[#F5F5F5] text-2xl font-medium px-[10px]  focus-within:border-primary border-transparent border-[1.5px] transition-all duration-200 flex">
				<Field
					className="h-full grow outline-none bg-transparent"
					id={name}
					name={name}
					placeholder={placeholder}
					type={isVisible ? "text" : "password"}
				/>
				<button onClick={() => setIsVisible(!isVisible)} type="button">
					{!isVisible && <EyeIcon.Visible />}
					{isVisible && <EyeIcon.Invisible />}
				</button>
			</div>
			<ErrorMessage
				name={name}
				component={"p"}
				className="text-2xl font-medium text-red-400"
			/>
		</div>
	);
};
