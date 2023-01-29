import { TbBook, TbCurrencyDollar, TbFilePencil, TbLock } from 'react-icons/tb';
import {
	TfiDashboard,
	TfiShoppingCart,
	TfiUser,
	TfiSettings,
} from 'react-icons/tfi';

export interface SidebarLink {
	LinkIcon?: typeof TfiDashboard;
	label: string;
	path: string;
}

export const sidebarLinks: SidebarLink[] = [
	{
		LinkIcon: TfiDashboard,
		label: 'Dashboard',
		path: '/admin',
	},
	{
		label: 'Orders',
		path: '/admin/orders',
		LinkIcon: TfiShoppingCart,
	},
	{
		label: 'Users',
		path: '/admin/users',
		LinkIcon: TfiUser,
	},
	{
		label: 'Settings',
		path: '/admin/settings',
		LinkIcon: TfiSettings,
	},
	{
		label: 'Payments',
		path: '/admin/payments',
		LinkIcon: TbCurrencyDollar,
	},
	{
		label: 'Products',
		path: '/admin/products',
		LinkIcon: TfiShoppingCart,
	},
    {
        label: 'Courses',
        path: '/admin/courses',
        LinkIcon: TbBook,
    },
	{
		label: 'Roles',
		path: '/admin/roles',
		LinkIcon: TbLock,
	}
];
