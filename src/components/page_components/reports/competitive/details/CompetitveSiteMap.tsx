import MapUnavailable from "@/components/shared/MapUnavailable";

export default function CompetitiveSiteMap({
	height = "280px",
}: {
	height?: string;
}) {
	return <MapUnavailable height={height} />;
}
