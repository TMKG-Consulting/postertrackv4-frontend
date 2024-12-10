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
	bordered?: boolean;
	top?: number;
	left?: number;
	right?: number;
	bottom?: number;
};

export default function Dropdown<T>({
	items,
	renderItem,
	renderButton,
	dropdownWidth = "100%",
	bordered,
	top = 115,
	left,
	right,
	bottom,
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
				style={{
					width: dropdownWidth,
					top: `${top}%`,
					bottom: `${bottom}%`,
					left: `${left}%`,
					right: `${right}%`,
				}}
				className={`absolute  h-max overflow-visible rounded-lg bg-white shadow-lg transition-all duration-200  z-[999999] flex items-center justify-center ${
					bordered ? "border border-gray-200" : "border-0"
				} ${
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
