import AppButton from "@/components/shared/AppButton";
import CautionIcon from "@/components/shared/icons/CautionIcon";
import DeleteIcon from "@/components/shared/icons/DeleteIcon";
import React, { useEffect } from "react";
import { SiteListData } from "./CreateCampaignForm";
import AppCheckbox from "@/components/shared/AppCheckbox";
import { useState } from "react";
export default function DuplicatesFound({
	duplicates,
	removeDuplicate,
	continueUpload,
	cancel,
	removeMultipleDuplicate,
}: {
	duplicates: SiteListData[];
	removeDuplicate: (index: number) => void;
	removeMultipleDuplicate: (indexes: number[]) => void;
	continueUpload: () => Promise<void>;
	cancel: () => void;
}) {
	const [dupToDelete, setDupToDelete] = useState<number[]>([]);
	const [allChecked, setAllChecked] = useState(false);
	const [isProcessing, setIsProcessing] = useState(false);

	function checkAll() {
		duplicates.forEach((d) => {
			if (!dupToDelete.includes(d.index)) {
				setDupToDelete((prev) => [d.index, ...prev]);
			}
		});
		setAllChecked(true);
	}

	function uncheckAll() {
		setDupToDelete([]);
		setAllChecked(false);
	}

	function deleteSelectedDups() {
		removeMultipleDuplicate(dupToDelete);
		uncheckAll();
	}

	useEffect(() => {
		if (allChecked) {
			checkAll();
		} else {
			uncheckAll();
		}
	}, [allChecked]);

	return (
		<div className="w-full">
			{duplicates.length > 0 && (
				<div className="px-5 md:px-12 pb-12">
					<div className="w-full h-[67px] border-[1.5px] border-[#ED323796] bg-[#FFE7E7] rounded-xl p-3 flex items-center gap-x-6">
						<div className="bg-primary w-[38px] h-[38px] rounded-full flex items-center justify-center">
							<CautionIcon />
						</div>
						<div className="flex flex-col gap-y-[3px]">
							<span className="text-[1.7rem] font-semibold">
								Do you want to continue ?
							</span>
							<span className="text-2xl">Duplicated addresses found.</span>
						</div>
					</div>
				</div>
			)}
			<div className="flex items-center gap-x-7 pb-12 px-12">
				{dupToDelete.length === 0 ? (
					<>
						<div className="w-[146px]">
							<AppButton
								label="Cancel Upload"
								onClick={cancel}
								fullyRounded
								className="!bg-white border-[1.5px] border-primary !text-primary font-medium"
							/>
						</div>
						<div className="w-[146px]">
							<AppButton
								label="Continue Upload"
								onClick={async () => {
									setIsProcessing(true);
									await continueUpload();
									setIsProcessing(false);
								}}
								fullyRounded
								className="font-medium"
								showLoading={isProcessing}
							/>
						</div>
					</>
				) : (
					<>
						<div className="w-[166px]">
							<AppButton
								onClick={deleteSelectedDups}
								label="Delete selected rows"
								fullyRounded
								className="font-medium"
							/>
						</div>
					</>
				)}
			</div>
			<div className="w-full overflow-auto">
				{duplicates.length === 0 && (
					<div className="flex items-center justify-center">
						<span className="text-center text-3xl font-medium text-gray-300">
							No duplicates found
						</span>
					</div>
				)}
				{duplicates.length > 0 && (
					<table className="w-[300%] md:w-[125%] xl:w-full" cellPadding={15}>
						<thead className="border-b border-t border-[#C7C7C7] border-t-[#C7C7C7] bg-[#f5f5f5]">
							<tr>
								<th>
									<div>
										<AppCheckbox
											name="check-all"
											onChange={(val) => {
												setAllChecked(val);
											}}
											defaultValue={allChecked}
										/>
									</div>
								</th>
								<th>
									<span className="text-2xl font-semibold">SN</span>
								</th>
								<th className="text-center">
									<span className="text-2xl font-semibold">Code</span>
								</th>
								<th>
									<span className="text-2xl font-semibold">Brand</span>
								</th>
								<th>
									<span className="text-2xl font-semibold">City</span>
								</th>
								<th>
									<span className="text-2xl font-semibold">State</span>
								</th>
								<th className="w-[215px] text-left">
									<span className="text-2xl font-semibold w-full">Address</span>
								</th>
								<th>
									<span className="text-2xl font-semibold">Contractor</span>
								</th>
								<th>
									<span className="text-2xl font-semibold">Media Type</span>
								</th>
								<th className="text-center"></th>
							</tr>
						</thead>
						<tbody>
							{duplicates.map((d, i) => (
								<tr
									key={i}
									className="border-b-[#E6E6E6] border-b 
                        ">
									<td className="text-center">
										<div>
											<AppCheckbox
												onChange={(val) => {
													if (val) {
														setDupToDelete([d.index, ...dupToDelete]);
													} else {
														setDupToDelete((prev) =>
															prev.filter((u) => u !== d.index)
														);
													}
												}}
												name={`dup-${i}`}
												defaultValue={dupToDelete.includes(d.index)}
											/>
										</div>
									</td>
									<td className="text-center">
										<span className="text-2xl font-medium">{i + 1}</span>
									</td>
									<td className="text-center">
										<span className="text-2xl font-medium">N/A</span>
									</td>
									<td className="text-center">
										<span className="text-2xl font-medium">{d.BRAND}</span>
									</td>
									<td className="text-center">
										<span className="text-2xl font-medium text-center">
											{d.TOWN}
										</span>
									</td>
									<td className="text-center">
										<span className="text-2xl font-medium">{d.STATE}</span>
									</td>
									<td className="text-left">
										<span className="text-2xl font-medium">{d.LOCATION}</span>
									</td>
									<td className="text-center">
										<span className="text-2xl font-medium">
											{d["MEDIA OWNER"]}
										</span>
									</td>
									<td className="text-center">
										<span className="text-2xl font-medium">{d.FORMAT}</span>
									</td>
									<td className="text-center">
										<button
											onClick={() => removeDuplicate(d.index)}
											className="w-[45px] h-[45px] rounded-full border-primary border-[1.5px] bg-[#ED32373B] flex items-center justify-center">
											<DeleteIcon />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
			<div className="flex items-center gap-x-7 p-12">
				{duplicates.length > 0 && dupToDelete.length === 0 && (
					<>
						<div className="w-[146px]">
							<AppButton
								label="Cancel Upload"
								onClick={cancel}
								fullyRounded
								className="!bg-white border-[1.5px] border-primary !text-primary font-medium"
							/>
						</div>
						<div className="w-[146px]">
							<AppButton
								label="Continue Upload"
								onClick={async () => {
									setIsProcessing(true);
									await continueUpload();
									setIsProcessing(false);
								}}
								fullyRounded
								className="font-medium"
								showLoading={isProcessing}
							/>
						</div>
					</>
				)}

				{dupToDelete.length > 0 && (
					<div className="w-[166px]">
						<AppButton
							label="Delete selected rows"
							onClick={deleteSelectedDups}
							fullyRounded
							className="font-medium"
						/>
					</div>
				)}
			</div>
		</div>
	);
}
