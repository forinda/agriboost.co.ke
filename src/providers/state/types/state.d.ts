export type AppStateType = {
	persistedState: PersistedStateType;
};

export type PersistedStateType = {
	auth: AuthStateType;
	cart: {
		cartItems: CartItemType[];
		cartItemsCount: number;
		cartItemsTotal: number;
	};
};

export type AuthStateType = {
	user: UserType|null;
	access_token: string;
	isAuthenticated: boolean;
	loading: boolean;
	error: string|null;
};
export type UserType = {
	avatar: string;
	createdAt: string;
	email: string;
	firstName: string;
	gender: string;
	lastName: string;
	phoneNumber: string;
	role: string;
	updatedAt: string;
	username: string;
	_id: string;
};

type CartItemType = {
	_id: string;
	name: string;
	image: string;
	price: number;
};
