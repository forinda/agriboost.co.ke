import React from 'react';
import UnauthorizedPage from '../pages/admin/errors/UnauthorizedPage';
import useAuth from '../shared/hooks/useAuth';
import LoginRequired from './LoginRequired';
import ModeratorRequired from './ModeratorRequired';

type AdminRequiredProps = {
	children: JSX.Element;
};

const AdminRequired: React.FunctionComponent<AdminRequiredProps> = ({
	children,
}) => {
	const {
		auth: { user },
	} = useAuth();
	return (
		<LoginRequired>
			{user?.role === 'admin' || 'developer' ? children : <UnauthorizedPage />}
		</LoginRequired>
	);
};

export default AdminRequired;
