import WidthWrap from '@shared-comps/WidthWrap';
import { homeServices } from '@shared-data/homeServices';
import React from 'react';
import { FcServices } from 'react-icons/fc';
import HomeService from './HomeService';
import SectionHeader from './SectionHeader';


const HomeServicesSection = () => {
	return (
		<div
			className="py-[100px] bg-white min-h-[50vh] bg-center bg-no-repeat bg-fixed bg-cover bg-blend-multiply"
			style={{ backgroundImage: `url('${homeServices.bg1}')` }}
		>
			<WidthWrap>
				<div className='flex flex-col gap-4'>
                    <div className='py-4 bg-opacity-30 px-4'>
                       <SectionHeader Icon={FcServices} title={'Our services'}/>
                    </div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] gap-4 p-4">
						{homeServices.services.map((item, index) => (
							<HomeService {...item} key={item.title} />
						))}
					</div>
				</div>
			</WidthWrap>
		</div>
	);
};

export default HomeServicesSection;
