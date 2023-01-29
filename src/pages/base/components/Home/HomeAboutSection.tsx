import React from 'react';
import { GiWheelbarrow } from 'react-icons/gi';
import WidthWrap from '../../../../shared/components/WidthWrap';
import HomeAboutTabs from './HomeAboutTabs';
import SectionHeader from './SectionHeader';

const HomeAboutSection = () => {
	return (
		<div className="bg-white">
			<WidthWrap>
				<div className="w-full py-10 px-8">
					<div className="flex flex-col">
						<SectionHeader title="About us" Icon={GiWheelbarrow} />
						<HomeAboutTabs />
					</div>
				</div>
			</WidthWrap>
		</div>
	);
};

export default HomeAboutSection;
