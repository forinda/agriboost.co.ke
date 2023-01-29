import React from 'react';
import { GiWheelbarrow } from 'react-icons/gi';

type SectionHeaderProps = {
	title: string;
	Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

const SectionHeader: React.FunctionComponent<SectionHeaderProps> = ({
	Icon,
	title,
}) => {
	return (
		<div>
			<div>
				<Icon className="text-4xl md:text-6xl" />
			</div>
			<h1 className="text-4xl md:text-6xl font-bold relative before:h-2 before:bg-orange-300 before:w-[10rem] before:absolute before:rounded before:-bottom-2">
				{title}
			</h1>
		</div>
	);
};

export default SectionHeader;
