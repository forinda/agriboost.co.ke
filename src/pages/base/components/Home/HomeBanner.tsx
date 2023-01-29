import React from 'react';
import WidthWrap from '../../../../shared/components/WidthWrap';
const bgLink =
'https://plus.unsplash.com/premium_photo-1661773325856-ef5a49024435?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
let bgLink2 ='https://img.freepik.com/free-vector/hand-drawn-minimal-background_23-2149001650.jpg?w=1380&t=st=1673787915~exp=1673788515~hmac=14d711206fbb7ff57db7f4760b2d3fe7dede079a58c885e7592a31008f729b88'

const HomeBanner = () => {
	return (
		<div
			className="w-full bg-scroll bg-cover bg-no-repeat py-[100px] bg-center bg-gradient-to-r from-amber-600 to-slate-50"
			style={{ backgroundImage: `url(${bgLink2})` }}
		>
			<WidthWrap>
				<div className="w-full h-[50vh] md:h-[60vh] lg:h-[80vh] flex justify-center items-center">
					<div className="w-full bg-gradient-to-r from-amber-50 to-transparent bg-opacity-30 p-8 rounded gap-3 flex flex-col">
						<h1 className="font-bold text-3xl lg:text-6xl bg-gradient-to-r from-orange-400 to-emerald-700 bg-clip-text text-transparent leading-[100%]">
							<span className='text-6xl'>Agriboost</span> is a platform to
							<span className='font-extrabold block'>Learn, Earn and Grow</span>
						</h1>
						<p className='font-medium text-xl max-w-3xl'>
							We are a community of farmers, agribusinesses, and agricultural
							experts. We are here to help you grow your business and make more
							money.
						</p>
					</div>
				</div>
			</WidthWrap>
		</div>
	);
};

export default HomeBanner;
