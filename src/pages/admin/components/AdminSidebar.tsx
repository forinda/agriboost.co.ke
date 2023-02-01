import useAuth from '@shared-hooks/useAuth';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { SidebarLink } from '../data/links';

type AdminSidebarProps = {
	links?: SidebarLink[];
};

const AdminSidebar: React.FunctionComponent<AdminSidebarProps> = ({
	links = [],
}) => {
	const routePath = useLocation().pathname;
	const { auth, dispatch } = useAuth();
	return (
		<div className="flex flex-col gap-4 p-4 h-screen border-r min-w-[240px]">
			<div className="flex flex-col gap-2">
				<img src="/logo192.png" alt="logo" className="w-20 h-20 mx-auto" />
				<div className="text-center">
					<h1 className="text-2xl font-bold">Admin</h1>
					<p className="text-gray-500">Dashboard</p>
				</div>
			</div>
			<div className="flex flex-col gap-2">
				{links.map(({ label, path, LinkIcon }) =>
					LinkIcon ? (
						<NavLink
							key={path}
							to={path}
							className={({ isActive }) =>
								`flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 ${
									isActive && routePath === path ? 'bg-gray-100' : ''
								}`
							}
						>
							<LinkIcon />
							<span>{label}</span>
						</NavLink>
					) : (
						<NavLink
							key={path}
							to={path}
							className={({ isActive }) =>
								`flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 ${
									isActive && routePath === path ? 'bg-gray-100' : ''
								}`
							}
						>
							<span>{label}</span>
						</NavLink>
					),
				)}
				<button
					className="w-full bg-gray-200 rounded text-md py-2"
					onClick={(e) => {
						e.preventDefault();
						dispatch({
							type: 'logout-success',
							payload: null,
						});
					}}
				>
					Logout
				</button>
			</div>
		</div>
	);
};

export default AdminSidebar;
