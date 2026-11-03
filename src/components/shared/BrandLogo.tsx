import Image from "next/image";

export default function BrandLogo() {
	return (
		<Image
			src="/highcrown-logo.png"
			width={200}
			height={30}
			alt="HighCrown"
			priority
			className="h-[30px] w-[200px] object-contain"
		/>
	);
}
