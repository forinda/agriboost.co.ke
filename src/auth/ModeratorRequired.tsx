import React from 'react';
import UnauthorizedPage from '../pages/admin/errors/UnauthorizedPage';
import useAuth from '../shared/hooks/useAuth';
import LoginRequired from './LoginRequired';

type ModeratorRequiredProps = {
	children: JSX.Element;
};

const ModeratorRequired: React.FunctionComponent<ModeratorRequiredProps> = ({
	children,
}) => {
	const {
		auth: { user },
	} = useAuth();
	return (
		<LoginRequired>
			{user?.role === 'user' || 'moderator' ? children : <UnauthorizedPage />}
		</LoginRequired>
	);
};

export default ModeratorRequired;
