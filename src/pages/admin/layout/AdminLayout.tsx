import React from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import { sidebarLinks } from '../data/links';
type AdminLayoutProps = {
	children: React.ReactNode;
};

const AdminLayout: React.FunctionComponent<AdminLayoutProps> = ({
	children,
}) => {
	return (
		<div className="flex">
			<div className='flex w-full max-w-[1340px] mx-auto'>
				<AdminSidebar links={sidebarLinks} />
				<div className="w-full">
					<AdminHeader />
					<div className="p-4">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default AdminLayout;
