import { TiArrowUnsorted } from "react-icons/ti";

type THeadWithSortProps = {
	field: string;
	title?: string;
	handleSort?: (field: string) => void;
};

const THeadWithSort: React.FunctionComponent<THeadWithSortProps> = ({
	field,
	handleSort,
	title,
}) => {
	return (
		<th className="border py-2 px-4 capitalize">
			<div className="flex items-center">
				<span>{title ? title : field}</span>
				<button
					onClick={() => {
						handleSort!(field);
					}}
				>
					<TiArrowUnsorted />
				</button>
			</div>
		</th>
	);
};

export default THeadWithSort;