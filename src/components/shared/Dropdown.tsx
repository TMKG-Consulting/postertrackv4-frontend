"use client";
import React, { useState, useRef, Dispatch } from "react";
import { useClickAway } from "ahooks";

type RenderButtonParams = {
	setOpen: Dispatch<React.SetStateAction<boolean>>;
	open: boolean;
};

type RenderItemParams<T> = {
	item: T;
	index: number;
} & RenderButtonParams;

type DropdownProps<T> = {
	items: T[];
	renderItem: (val: RenderItemParams<T>) => React.JSX.Element;
	renderButton: (val: RenderButtonParams) => React.JSX.Element;
	dropdownWidth?: string;
};

export default function Dropdown<T>({
	items,
	renderItem,
	renderButton,
	dropdownWidth = "100%",
}: DropdownProps<T>) {
	const [open, setOpen] = useState(false);
	const containerRef = useRef(null);

	useClickAway(() => {
		setOpen(false);
	}, containerRef);

	return (
		<div
			ref={containerRef}
			className="relative h-full flex items-center justify-center">
			{renderButton({ open, setOpen })}
			<div
				style={{ width: dropdownWidth }}
				className={`absolute top-[115%] h-max overflow-visible rounded-lg bg-white shadow-lg transition-all duration-200 before:border-transparent before:border-[8px]  z-[99999999999] flex items-center justify-center ${
					open
						? "scale-100 opacity-100 pointer-events-auto"
						: "scale-75 opacity-0 pointer-events-none"
				}`}>
				<div className="w-full max-h-[250px] flex flex-col overflow-auto p-3">
					{items.map((item, index) =>
						renderItem({ item, index, setOpen, open })
					)}
				</div>
			</div>
		</div>
	);
}
