import React from "react";

export default function CloseIcon({ fill = "#000000" }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="17"
			height="17"
			viewBox="0 0 17 17"
			fill="none">
			<path
				d="M1 16L16 1M1 1L16 16"
				stroke={fill}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
