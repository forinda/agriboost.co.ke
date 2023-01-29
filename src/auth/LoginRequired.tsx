import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../shared/hooks/useAuth';
import jwtDecode from 'jwt-decode';

type LoginRequiredProps = {
	children: JSX.Element;
};

const LoginRequired: React.FunctionComponent<LoginRequiredProps> = ({
	children,
}) => {
	const { auth, dispatch } = useAuth();
	const pathName = useLocation().pathname;
	const { isAuthenticated, access_token } = auth;

	React.useEffect(() => {
		if (access_token) {
			const decodedToken: any = jwtDecode(access_token);
			if (decodedToken.exp * 1000 < Date.now()) {
				dispatch({
					type: 'logout-success',
					payload: null,
				});
			}
		}
	}, [access_token]);

	return isAuthenticated ? (
		children
	) : (
		<Navigate to={`/login?redirect=${pathName}`} state={{ from: pathName }} />
	);
};

export default LoginRequired;
