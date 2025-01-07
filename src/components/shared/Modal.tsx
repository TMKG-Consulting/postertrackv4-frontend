"use client";
import React, { PropsWithChildren, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Portal from "./Portal";

type ModalProps = {
	showModal?: boolean;
	hideModal?: () => void;
} & PropsWithChildren;

export default function Modal({ children, showModal, hideModal }: ModalProps) {
	useEffect(() => {
		if (showModal) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [showModal]);

	return (
		<AnimatePresence>
			<Portal>
				{showModal && (
					<motion.div
						className="fixed top-[5%] drop-shadow-lg right-0 left-0 m-auto h-[70vh] w-[600px] bg-white rounded-xl  z-[99999999] overflow-auto pb-12"
						initial={{ scale: 0.8 }}
						animate={{ scale: 1 }}
						exit={{ scale: 0.8 }}>
						{children}
					</motion.div>
				)}
				{showModal && (
					<div
						onClick={hideModal}
						className="z-[999999] w-screen h-screen bg-primary opacity-20 fixed top-0 right-0 cursor-pointer"></div>
				)}
			</Portal>
		</AnimatePresence>
	);
}
