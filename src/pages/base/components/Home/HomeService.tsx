import React from 'react';
import { Link } from 'react-router-dom';
import { homeServices } from '../../../../shared/data/homeServices';

type HomeServiceProps = {
	title: string;
	description: string;
	imgUrl?: string;
	url?: string;
};


const HomeService: React.FunctionComponent<HomeServiceProps> = ({
	description,
	title,
	imgUrl,
	url,
}) => {
	return (
		<Link
			to={url ?? '#'}
			className="flex flex-col md:flex-row gap-4 rounded-md shadow shadow-slate-400 w-full bg-white hover:bg-slate-100transition-all duration-300 ease-in-out"
		>
			<div className="w-full flex justify-center items-center lg:block md:w-2/5 p-2">
				<img
					src={imgUrl ?? homeServices.placeholderImg}
					alt={title}
					className="h-40 lg:h-full aspect-square object-cover rounded-full"
				/>
			</div>
			<div className="p-10 w-full flex flex-col justify-center">
				<h1 className="text-xl font-bold">{title}</h1>
				<p className="text-lg">{description}</p>
			</div>
		</Link>
	);
};

export default HomeService;
