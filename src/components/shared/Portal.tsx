"use client";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Portal({
	children,
	elementId = "body",
}: { elementId?: string } & PropsWithChildren) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return mounted
		? createPortal(children, document.getElementById(elementId)!)
		: null;
}
