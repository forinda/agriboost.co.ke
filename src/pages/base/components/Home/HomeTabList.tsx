import { TiTick } from 'react-icons/ti';
import React from 'react';

type TabListItemFunc<T = any> = (props: {
	list: T extends infer R ? R[] : never[];
	children?: JSX.Element | JSX.Element[];
	render?: (item: T, index: number) => JSX.Element;
}) => JSX.Element;

const HomeTabList: TabListItemFunc<{ title: string } | string> = ({
	list,
	children,
	...props
}) => {
	return (
		<div className="py-3 flex flex-col gap-2">
			{list.map((item, index) => {
				return props.render ? (
					props.render!(item, index)
				) : (
					<div key={index} className="flex items-center">
						<TiTick className="text-green-600 text-xl" />
						<span>{typeof item === 'string' ? item : ''}</span>
					</div>
				);
			})}
		</div>
	);
};

export default HomeTabList;
