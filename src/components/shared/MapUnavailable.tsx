export default function MapUnavailable({
	height = "280px",
}: {
	height?: string;
}) {
	return (
		<section
			style={{ height, minHeight: height }}
			className="flex w-full items-center justify-center rounded-2xl border border-[#E7E7E7] bg-white"
		>
			<p className="text-2xl font-medium text-[#666666]">
				Map display is temporarily unavailable.
			</p>
		</section>
	);
}
