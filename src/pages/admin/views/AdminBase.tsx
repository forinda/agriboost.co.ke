import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminLayout from '../layout/AdminLayout';

const AdminBase = () => {
	return (
		<AdminLayout>
			<Outlet />
		</AdminLayout>
	);
};

export default AdminBase;