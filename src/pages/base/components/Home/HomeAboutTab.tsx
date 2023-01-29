import React from 'react';
import { TiTick } from 'react-icons/ti';
import HomeTabList from './HomeTabList';

const HomeAboutTab = () => {
	return (
		<div className="flex flex-col lg:flex-row gap-6 p-5 rounded-md ml-1">
			<div className="max-h-full w-fit flex-[4]">
				<img
					src="https://images.unsplash.com/photo-1669696741883-58676792b97f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80"
					alt="farmers"
					className="h-64 w-64 object-cover rounded-full"
				/>
			</div>
			<div className="flex-[8]">
				<h1 className="text-4xl font-bold mb-2">About agriboost</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
					tempore id, tenetur et quae commodi ducimus! Aut mollitia est impedit,
					alias cumque, sit qui quam ad, deserunt libero eum doloremque!
				</p>
				<HomeTabList
					list={[
						{ title: 'To be the best chicken vaccination program' },
						{ title: 'To become the defacto standard for chicken farming app' },
					]}
					render={(item, index) => (
						<div key={index} className="flex items-center">
							<TiTick className="text-green-600 text-xl" />
							<span>{typeof item === 'string' ? item : item.title}</span>
						</div>
					)}
				/>
                   
			</div>
		</div>
	);
};

export default HomeAboutTab;
