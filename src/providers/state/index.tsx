import React from 'react';
const APP_STATE_KEY = 's-c-p-0e2340d58e259f7f7652929a984cdc079d88f8b3';
import { AuthActions } from './actions/authActions';
import authReducer from './actions/authReducer';
import { AppStateType, PersistedStateType } from './types/state';

const defaultPersistentState: PersistedStateType = {
	auth: {
		user: null,
		access_token: '',
		isAuthenticated: false,
		loading: false,
		error: null,
	},
	cart: {
		cartItems: [],
		cartItemsCount: 0,
		cartItemsTotal: 0,
	},
};

const initialState: AppStateType = {
	persistedState: JSON.parse(localStorage.getItem(APP_STATE_KEY)!)
		? JSON.parse(localStorage.getItem(APP_STATE_KEY)!)
		: defaultPersistentState,
};

const AppContext = React.createContext<{
	state: typeof initialState;
	dispatch: React.Dispatch<AuthActions>;
}>({ state: initialState, dispatch: () => null });

type AppProviderProps = {
	children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
	const [state, dispatch] = React.useReducer(authReducer, initialState);
	React.useEffect(() => {
		localStorage.setItem(APP_STATE_KEY, JSON.stringify(state.persistedState));
	}, [state.persistedState]);
	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext };
export default AppProvider;
