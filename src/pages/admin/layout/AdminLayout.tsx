import AdminHeader from '@admin-pages/components/AdminHeader';
import AdminSidebar from '@admin-pages/components/AdminSidebar';
import { sidebarLinks } from '@admin-pages/data/links';
import React from 'react';
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
