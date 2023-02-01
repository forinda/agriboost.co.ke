import React from 'react';
import { useNavigation } from 'react-router-dom';
import moment from 'moment';
import { PaymentPayload, SortFunction } from '../types';
import THeadWithSort from '@admin-pages/components/THeadWithSort';
import { publicApi } from '@api/axios';
import FullPageLoader from '@shared-comps/FullPageLoader';
import useAuth from '@shared-hooks/useAuth';

const getStatusStyle = (status: string) => {
	switch (status) {
		case 'pending':
			return 'bg-yellow-200 text-yellow-800';
		case 'success':
			return 'bg-green-200 text-green-800';
		case 'insufficient funds':
			return 'bg-red-200 text-red-900';
		case 'cancelled':
			return 'bg-red-400 text-red-800';
		case 'timeout':
			return 'bg-orange-200 text-orange-800';
		case 'failed':
			return 'bg-red-200 text-red-800';
		default:
			return 'bg-gray-200 text-gray-800';
	}
};

const AdminPayments = () => {
	const {
		auth: { access_token },
	} = useAuth();
	const navState = useNavigation();
	const ascendingRef = React.useRef<boolean>(false);
	const [payments, setPayments] = React.useState<PaymentPayload[]>([]);
	const [sort, setSort] = React.useState<string>('createdAt');
	const renderRef = React.useRef<boolean>(false);
	const [loading, setLoading] = React.useState<boolean>(false);
	const sortPayments: SortFunction<PaymentPayload> = (items, field) => {
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
		setPayments(sortPayments(payments, field));
	};
	const fetchPayments = async () => {
		try {
			setLoading(true);
			const res = await publicApi.get('/mpesa/transactions', {
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			});
			setPayments(res.data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	React.useEffect(() => {
		if (!renderRef.current) {
			fetchPayments();
			renderRef.current = true;
		}
		return () => {
			renderRef.current = false;
		};
	}, []);

	React.useEffect(() => {
		return setPayments(sortPayments(payments, sort));
	}, [sort]);

	return loading ? (
		<FullPageLoader />
	) : (
		<div className="overflow-scroll no-scrollbar font-roboto">
			<h1 className="font-bold my-4">AdminPayments</h1>
			<div className="flex p-2 gap-4">
				<div className="p-10 border shadow">
					<h1 className="font-bold text-6xl font-rubik">
						<span className="font-mono text-lg">Ksh</span>{' '}
						{payments.reduce((acc, payment) => {
							return payment.status === 'success' ? acc + payment.amount : acc;
						}, 0)}
					</h1>
					<p>Total amount</p>
				</div>
				<div className="p-10 border shadow">
					<h1 className="font-bold text-6xl font-rubik">
						<span className="font-mono text-lg">Ksh</span>{' '}
						{payments.slice().sort((a, b) => b.amount - a.amount)[0]?.amount}
					</h1>
					<p>Max amount</p>
				</div>
			</div>
			<div>
				{payments.length > 0 ? (
					// TODO: Use a table
					<table className="table border-collapse text-md font-mono table-fixed">
						<thead>
							<tr>
								<th className="border py-2 px-4 capitalize">#</th>
								<THeadWithSort
									title="Amount paid"
									field="amount"
									handleSort={handleSort}
								/>
								<THeadWithSort
									title="Date transacted"
									field="createdAt"
									handleSort={handleSort}
								/>
								<THeadWithSort
									title="Phone number"
									field="phoneNumber"
									handleSort={handleSort}
								/>
								<THeadWithSort field="receiptNumber" handleSort={handleSort} />
								<THeadWithSort
									title="Payment Status"
									field="status"
									handleSort={handleSort}
								/>
							</tr>
						</thead>
						<tbody>
							{payments.map((payment, idx) => {
								return (
									<tr
										key={payment.CheckoutRequestID}
										className="border px-4 even:bg-neutral-200"
									>
										<td className="text-center py-2 px-4">{idx}</td>
										<td className="text-center py-2 px-4">{payment.amount}</td>
										<td className="py-2 px-4">
											{moment(payment.createdAt).format('l')}
										</td>
										<td className="py-2 px-4">+{payment.phoneNumber}</td>
										<td className="py-2 px-4">{payment.receiptNumber}</td>
										<td className="py-2 px-4">
											<span
												className={`py-1 px-2 rounded-xl ${getStatusStyle(
													payment.status,
												)}`}
											>
												{payment.status}
											</span>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				) : (
					<p>No payments</p>
				)}
			</div>
		</div>
	);
};

export default AdminPayments;
