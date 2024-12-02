import React from "react";

export default function ChevronIcon({ fill = "white" }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="15"
			height="9"
			viewBox="0 0 15 9"
			fill="none">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6.86193 8.30474C7.12228 8.56509 7.54439 8.56509 7.80474 8.30474L14.4714 1.63807C14.7318 1.37772 14.7318 0.955612 14.4714 0.695262C14.2111 0.434913 13.7889 0.434913 13.5286 0.695262L7.33333 6.89052L1.13807 0.695263C0.877722 0.434913 0.455612 0.434913 0.195262 0.695263C-0.0650874 0.955612 -0.0650874 1.37772 0.195262 1.63807L6.86193 8.30474Z"
				fill={fill}
			/>
		</svg>
	);
}
