import React from "react";

export default function PlusIcon({ fill = "white" }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="21"
			viewBox="0 0 20 21"
			fill="none">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.75 3.25C10.75 2.83579 10.4142 2.5 10 2.5C9.58579 2.5 9.25 2.83579 9.25 3.25V9.75H2.75C2.33579 9.75 2 10.0858 2 10.5C2 10.9142 2.33579 11.25 2.75 11.25H9.25V17.75C9.25 18.1642 9.58579 18.5 10 18.5C10.4142 18.5 10.75 18.1642 10.75 17.75V11.25H17.25C17.6642 11.25 18 10.9142 18 10.5C18 10.0858 17.6642 9.75 17.25 9.75H10.75V3.25Z"
				fill={fill}
			/>
		</svg>
	);
}
