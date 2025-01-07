"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import CloseIcon from "./icons/CloseIcon";
import CautionIcon from "./icons/CautionIcon";
import useAlert from "@/hooks/useAlert";

export default function Alert() {
	const { alert, dismissAlert } = useAlert();
	const isSuccess = alert.type === "success";

	return (
		<AnimatePresence>
			{alert.show && (
				<motion.div
					initial={{ translateX: 1000 }}
					animate={{ translateX: 0 }}
					exit={{ translateX: 1000 }}
					className={`fixed top-[3%] h-[65px] rounded-2xl w-[90%] md:w-[500px] border-[1.5px] right-[10px] flex items-center gap-[10px] px-[10px] shadow-lg z-[999999999999999999999] ${
						isSuccess
							? "bg-[#E7FFE8] border-[#7BCD7996]"
							: "border-[#ED323799] bg-[#FFE7E7]"
					}`}>
					<div
						className={`w-[35px] h-[35px] rounded-full flex items-center justify-center  ${
							isSuccess ? "bg-[#048F2B]" : "bg-primary"
						}`}>
						<CautionIcon />
					</div>
					<div className="grow flex items-center justify-between">
						<span className="text-2xl font-medium">{alert.message}</span>
						<button
							onClick={() => dismissAlert()}
							className="w-[35px] h-[35px] rounded-full flex items-center justify-center">
							<CloseIcon />
						</button>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
