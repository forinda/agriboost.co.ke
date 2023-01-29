import moment from 'moment';
import React from 'react'
import { publicApi } from '../../../api/axios';
import FullPageLoader from '../../../shared/components/FullPageLoader';
import useAuth from '../../../shared/hooks/useAuth';
import THeadWithSort from '../components/THeadWithSort';
import { SortFunction, UserPayload } from '../types';

const AdminUsers = () => {
	const {auth:{access_token}}=useAuth()
  const [users, setUsers] = React.useState<UserPayload[]>([]);
	const [loading, setLoading] = React.useState(false);
	const renderRef = React.useRef(false);
	const ascendingRef = React.useRef(false);
	const [sort, setSort] = React.useState<keyof UserPayload>('createdAt');
	const sortUsers: SortFunction<UserPayload> = (items, field) => {
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
		setUsers(sortUsers(users, field));
	};
	const fetchUsers = async () => {
		try {
			setLoading(true);
			const res = await publicApi.get('/users',{params:{limit:1000,page:1},headers:{
				authorization:`Bearer ${access_token}`
			}});
			console.log(res.data);

			setUsers(res.data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	React.useEffect(() => {
		if (!renderRef.current) {
			fetchUsers();
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
			<h1>Users</h1>
			<table className="table border-collapse text-md font-mono table-fixed">
				<thead>
					<tr>
						<th className="border py-2 px-4 capitalize">#</th>
						<THeadWithSort title="Email address" field="email" handleSort={handleSort}/>
						<THeadWithSort title="Username" field="username" handleSort={handleSort}/>
						<THeadWithSort title="Date Created" field="createdAt" handleSort={handleSort}/>
						<THeadWithSort title="Date updated" field="updatedAt" handleSort={handleSort}/>
						<THeadWithSort title="Gender" field="gender" handleSort={handleSort}/> 
						<THeadWithSort title="Role" field="role" handleSort={handleSort}/>
					</tr>
				</thead>
				<tbody>
					{users.map((user, idx) => {
						return (
							<tr
								key={user._id}
								className="border px-4 even:bg-neutral-100 hover:bg-neutral-200"
							>
								<td className="py-2 px-4">{idx+1}</td>
								<td className="py-2 px-4">{user.email}</td>
								<td className="py-2 px-4">
                  <span className='text-blue-600 cursor-pointer hover:underline '>@{user.username}</span>
                </td>
								<td className="py-2 px-4">
									{moment(user.createdAt).format('l')}
								</td>
								<td className="py-2 px-4">
									{moment(user.updatedAt).format('l')}
								</td>
								<td className="py-2 px-4">{user.gender}</td>
								<td className="py-2 px-4">{user.role}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default AdminUsers