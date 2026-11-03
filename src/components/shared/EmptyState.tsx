export default function EmptyState({ className = "" }: { className?: string }) {
	return (
		<p
			className={`py-10 text-center text-2xl font-medium text-[#666666] ${className}`}
		>
			No data currently available
		</p>
	);
}
