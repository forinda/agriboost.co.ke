import { AxiosError } from 'axios';
import React from 'react';
import { Form, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { publicApi } from '../../../api/axios';
import Input from '../../../shared/components/Input';
import useAuth from '../../../shared/hooks/useAuth';

type LoginProps = {
	username: string;
	password: string;
};

const LoginPage = () => {
	const { dispatch } = useAuth();
	const locationState = useLocation().state as { from: string };
	const navigate = useNavigate();
	const renderRef = React.useRef<boolean>(false);
	const [loading, setLoading] = React.useState<boolean>(false);
	const [error, setError] = React.useState<string | null>(null);

	const sendToApi = async (data: LoginProps) => {
		try {
			const response = await publicApi.post('/auth/sign-in', data);
			const accessToken = response.data.access_token;
			fetchUserprofile(accessToken);
			toast.success('Login successful');
		} catch (err: any) {
			setError(err.response.data.message);
			toast.error(error);
		} finally {
			setLoading(false);
		}
	};
	const fetchUserprofile = async (accessToken: string) => {
		try {
			const res = await publicApi.get('/auth/account/profile', {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
			const data = res.data;
			dispatch({
				type: 'login-success',
				payload: {
					auth: {
						user: data,
						access_token: accessToken,
						error: '',
						isAuthenticated: true,
						loading: false,
					},
				},
			});
			return locationState ? navigate(locationState.from) : navigate('/');
		} catch (err: any) {
			if (err instanceof AxiosError) {
				setError(err.response?.data.message);
			}
		}
	};
	const submitForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setError(null);
		const formData = new FormData(e.currentTarget.form!);
		const data: LoginProps = {
			username: formData.get('username') as string,
			password: formData.get('password') as string,
		};
		if (data.username === '' || data.password === '') {
			setError('Please fill all the fields');
			return;
		}
		setLoading(true);
		sendToApi(data);
		// publicApi
	};

	React.useEffect(() => {
		renderRef.current = true;
		return () => {
			renderRef.current = false;
		};
	}, []);

	console.log(error);

	return (
		<div className="flex justify-center min-h-screen w-full items-center bg-gray-300">
			<Form method="post" className="p-10 bg-white rounded min-w-[30rem]">
				<ToastContainer position="top-right" />
				<div className="flex items-center justify-center flex-col p-3">
					<img src="/logo192.png" alt="" className="h-20 w-20 m-4" />
					<h1 className="font-bold text-4xl">Login to account</h1>
				</div>
				<div className="flex flex-col gap-4">
					<Input
						id="username"
						name="username"
						type="text"
						placeholder="Email/username"
						label="Enter username/email"
					/>
					<Input
						id="password"
						name="password"
						type="password"
						placeholder="Password"
						label="Password"
					/>
					<button
						type="submit"
						className="w-full mb-10 bg-blue-600 font-medium text-white text-2xl py-2 px-4 rounded-lg disabled:bg-gray-500 disabled:cursor-not-allowed"
						onClick={submitForm}
						disabled={loading ? true : false}
					>
						{loading ? 'Loading....' : 'Sign in'}
					</button>
				</div>
			</Form>
		</div>
	);
};

export default LoginPage;
