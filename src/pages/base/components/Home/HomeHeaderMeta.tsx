import WidthWrap from '@shared-comps/WidthWrap';
import React from 'react';
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaLinkedin,
	FaYoutube,
	FaPhone,
} from 'react-icons/fa';
import { TfiTimer, TfiMobile } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

type SocialIcon = {
	Icon: any;
	link?: string;
	color?: string;
};

const icons: SocialIcon[] = [
	{ Icon: FaFacebook, color: 'blue', link: 'https://facebook.com' },
	{ Icon: FaInstagram, color: 'brown', link: 'https://instagram.com' },
	{ Icon: FaLinkedin, color: 'blue', link: 'https://linkedin.com' },
	{ Icon: FaTwitter, color: 'blue', link: 'https://twitter.com' },
	{
		Icon: FaYoutube,
		color: 'red',
		link: ' https://youtube.com',
	},
];

type TieldProps = {
	Icon: any;
	text: string;
};

const titles: TieldProps[] = [
	{ Icon: TfiMobile, text: 'Call us: +120 000-343-244' },
	{ Icon: TfiTimer, text: `Working 24/7 Mon - Sun` },
];

const HomeHeaderMeta = () => {
	return (
		<div className="w-full bg-white border-b">
			<WidthWrap>
				<div className="w-full flex justify-center flex-col lg:flex-row md:justify-between py-8">
					<div className="flex gap-3 justify-center flex-col  text-sm sm:flex-row md:text-lg md:font-bold lg:text-lg text-blue-600">
						{titles.map(({ Icon, text }, index) => {
							return (
								<div key={index} className="flex items-center gap-1 justify-center">
									<Icon />
									<span>{text}</span>
								</div>
							);
						})}
					</div>
					<div className="flex justify-center items-center gap-1">
						{icons.map(({ Icon, link, color }, index) => {
							return (
								<div
									key={index}
									className="flex items-center justify-center md:justify-center w-8 h-8 rounded-full bg-white"
								>
									<Link
										to={link ?? '#'}
										target="_blank"
										className="text-gray-500"
									>
										<Icon className={'text-' + color + '-300' ?? ''} />
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</WidthWrap>
		</div>
	);
};

export default HomeHeaderMeta;
