import THeadWithSort from '@admin-pages/components/THeadWithSort';
import { RolesPayload, SortFunction } from '@admin-pages/types';
import { publicApi } from '@api/axios';
import FullPageLoader from '@shared-comps/FullPageLoader';
import useAuth from '@shared-hooks/useAuth';
import moment from 'moment';
import React from 'react';

const AdminRoles = () => {
	const {
		auth: { access_token },
	} = useAuth();
	const [roles, setRoles] = React.useState<any[]>([]);
	const [loading, setLoading] = React.useState(false);
	const renderRef = React.useRef(false);
	const ascendingRef = React.useRef(false);
	const [sort, setSort] = React.useState<keyof RolesPayload>('createdAt');
	const sortRoles: SortFunction<RolesPayload> = (items, field) => {
		const sorted = items.slice().sort((a, b) => {
			if (ascendingRef.current) {
				return a[field] > b[field] ? 1 : -1;
			}
			return a[field] < b[field] ? 1 : -1;
		});
		ascendingRef.current = !ascendingRef.current;
		return sorted;
	};
	const handleSort = (field: string) => {
		setSort(field);
		setRoles(sortRoles(roles, field));
	};
	const fetchRoles = async () => {
		try {
			setLoading(true);
			const res = await publicApi.get('/roles', {
				headers: {
					authorization: `Bearer ${access_token}`,
				},
			});

			setRoles(res.data);
		} catch (error) {
			// console.log(error);
		} finally {
			setLoading(false);
		}
	};

	React.useEffect(() => {
		if (!renderRef.current) {
			fetchRoles();
			renderRef.current = true;
		}
		return () => {
			renderRef.current = false;
		};
	}, []);
	return loading ? (
		<FullPageLoader />
	) : (
		<div>
			<h1>Roles</h1>
			<table className="table border-collapse text-md font-mono table-fixed">
				<thead>
					<tr>
						<th className="border py-2 px-4 capitalize">#</th>
						<THeadWithSort
							title="Role name"
							field="name"
							handleSort={handleSort}
						/>
						<THeadWithSort
							title="Date Created"
							field="createdAt"
							handleSort={handleSort}
						/>
						<THeadWithSort
							title="Date updated"
							field="updatedAt"
							handleSort={handleSort}
						/>
						<THeadWithSort
							title="Permissions"
							field="permissions"
							handleSort={handleSort}
						/>
						<THeadWithSort
							title="Description"
							field="description"
							handleSort={handleSort}
						/>
					</tr>
				</thead>
				<tbody>
					{roles.map((role, idx) => {
						return (
							<tr
								key={role._id}
								className="border px-4 even:bg-neutral-100 hover:bg-neutral-200"
							>
								<td className="py-2 px-4">{idx}</td>
								<td className="py-2 px-4">{role.name}</td>
								<td className="py-2 px-4">
									{moment(role.createdAt).format("I")}
								</td>
								<td className="py-2 px-4">
									{moment(role.updatedAt).format("I")}
								</td>
								<td className="py-2 px-4">{role.permissions}</td>
								<td className="py-2 px-4">{role.description}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default AdminRoles;
