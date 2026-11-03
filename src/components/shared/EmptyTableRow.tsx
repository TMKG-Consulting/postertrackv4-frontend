import EmptyState from "./EmptyState";

export default function EmptyTableRow({ colSpan }: { colSpan: number }) {
	return (
		<tr>
			<td colSpan={colSpan}>
				<EmptyState />
			</td>
		</tr>
	);
}
