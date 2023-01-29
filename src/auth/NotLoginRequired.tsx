import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import useAuth from '../shared/hooks/useAuth';

const NotLoginRequired: React.FC<{ children: JSX.Element }> = ({
	children,
}) => {
	const { auth, dispatch } = useAuth();
	const { isAuthenticated, access_token } = auth;
	const st = useLocation().state as any;

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

	return !isAuthenticated ? (
		children
	) : (
		<Navigate to={st.from ? st.from : '/'} replace />
	);
};

export default NotLoginRequired;
