import React from "react";

export default function AppLoader({ size = 54 }: { size?: number }) {
	return (
		/* From Uiverse.io by david-mohseni */
		<div
			style={{
				width: size + "px",
				height: size + "px",
			}}
			className="loader flex items-center justify-center">
			<div className="bar1"></div>
			<div className="bar2"></div>
			<div className="bar3"></div>
			<div className="bar4"></div>
			<div className="bar5"></div>
			<div className="bar6"></div>
			<div className="bar7"></div>
			<div className="bar8"></div>
			<div className="bar9"></div>
			<div className="bar10"></div>
			<div className="bar11"></div>
			<div className="bar12"></div>
		</div>
	);
}
