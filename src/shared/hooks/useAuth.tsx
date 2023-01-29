import React from 'react';
import { AppContext } from '../../providers/state';

const useAuth = () => {
	const { state, dispatch } = React.useContext(AppContext);
	const {
		persistedState: { auth },
	} = state;

	return { auth, dispatch };
};

export default useAuth;
