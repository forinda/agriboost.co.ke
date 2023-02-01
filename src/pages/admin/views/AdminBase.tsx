import AdminLayout from '@admin-pages/layout/AdminLayout';
import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminBase = () => {
	return (
		<AdminLayout>
			<Outlet />
		</AdminLayout>
	);
};

export default AdminBase;