import { PayloadMapper } from '@provider-types/helpers';
import { AuthStateType } from '../types';


export type AuthActionsPayload = {
	// Login
	'login-start': undefined;
	'login-success': {
		auth: AuthStateType;
	};
	'login-failure': {
		error: Error | string;
	};

	// Register
	'register-start': {};
	'register-success': {
		auth: AuthStateType;
	};
	'register-failure': {
		error: Error | string;
	};
	// Logout
	'logout-start': null;
	'logout-success': null;
	'logout-failure': {
		error: Error | string;
	};

	// Update profile
	'update-profile-start': {};
	'update-profile-success': {
		auth: AuthStateType;
	};
	'update-profile-failure': {
		error: Error | string;
	};
};

export type AuthActions =
	PayloadMapper<AuthActionsPayload>[keyof PayloadMapper<AuthActionsPayload>];
