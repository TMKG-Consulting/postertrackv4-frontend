"use client";
import React, { PropsWithChildren, useEffect, useState } from "react";
import CheckedIcon from "./icons/CheckedIcon";

type AppCheckboxProps = {
	onChange?: (val: boolean) => void;
	name: string;
	defaultValue?: boolean;
} & PropsWithChildren;

export default function AppCheckbox({
	children,
	name,
	onChange,
	defaultValue = false,
}: AppCheckboxProps) {
	const [checked, setChecked] = useState(defaultValue);

	useEffect(() => {
		setChecked(defaultValue);
	}, [defaultValue]);

	return (
		<label htmlFor={name} className="flex items-center gap-2 cursor-pointer">
			<div
				className={`w-[17px] h-[17px] rounded-lg border-[1.5px] flex items-center justify-center ${
					checked
						? "bg-primary border-primary"
						: "bg-transparent border-[#8D8D8D]"
				}`}>
				<input
					onChange={(e) => {
						if (onChange) {
							onChange(e.target.checked);
						}

						setChecked(e.target.checked);
					}}
					id={name}
					type="checkbox"
					className="hidden"
					checked={checked}
				/>
				<CheckedIcon />
			</div>
			{children && children}
		</label>
	);
}
