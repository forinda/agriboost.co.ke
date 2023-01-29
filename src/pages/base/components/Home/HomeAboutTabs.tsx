import React from 'react';
import { TiTick } from 'react-icons/ti';
import { GrGroup } from 'react-icons/gr';
import { TbBulb } from 'react-icons/tb';
import HomeAboutTab from './HomeAboutTab';
import { HomeVisionTab } from './HomeVisionTab';
import HomeWhoWeAreTab from './HomeWhoWeAreTab';

type TabContentFunc = (props: { content: JSX.Element }) => JSX.Element;

const HomeAboutTabs = () => {
	type Tab = {
		title: string;
		content: JSX.Element;
		Icon: typeof TiTick;
	};

	const [activeTab, setActiveTab] = React.useState(0);
	const tabs: Tab[] = [
		{
			title: 'About',
			Icon: TiTick,
			content: <HomeAboutTab />,
		},
		{
			title: 'Vision',
			Icon: TbBulb,
			content: <HomeVisionTab />,
		},
		{
			title: 'Who we are',
			Icon: GrGroup,
			content: <HomeWhoWeAreTab />,
		},
	];

	const handleTabClick = (index: number) => {
		setActiveTab(index);
	};

	return (
		<div className="flex py-10 gap-2 md:gap-6 min-h-96 items-center flex-col md:flex-row">
			<div className="flex justify-between md:flex-col flex-1 w-full md:flex-[3] gap-4 rounded p-4">
				{tabs.map((tab, index) => {
					return (
						<div
							key={index}
							onClick={() => handleTabClick(index)}
							className={`flex-[1] w-full text-center py-2 md:py-4 cursor-pointer border flex flex-col justify-center items-center rounded-md ${
								activeTab === index ? 'border-b-2 bg-orange-400 text-white' : ''
							}`}
						>
							<tab.Icon className="text-md md:text-5xl" />
							<span>{tab.title}</span>
						</div>
					);
				})}
			</div>
			<div className="flex-[9]">{tabs[activeTab].content}</div>
		</div>
	);
};

export default HomeAboutTabs;
