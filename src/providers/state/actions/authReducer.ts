import React from 'react';
import { ReducerType } from '../../types/helpers';
import { AppStateType } from '../types';
import { AuthActions } from './authActions';

const authReducer: ReducerType<AppStateType, AuthActions> = (state, action) => {
	switch (action.type) {
		case 'login-success':
			return {
				...state,
				persistedState: {
					...state.persistedState,
					auth: {
						user: action.payload.auth.user,
						access_token: action.payload.auth.access_token,
						isAuthenticated: true,
						loading: false,
						error: '',
					},
				},
			};
		case 'logout-success':
			return {
				...state,
				persistedState: {
					...state.persistedState,
					auth: {
						user: null,
						access_token: '',
						isAuthenticated: false,
						loading: false,
						error: '',
					},
				},
			};
            case "register-start":
                return
		default:
			return state;
	}
};

export default authReducer;
