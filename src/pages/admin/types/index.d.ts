export type RolesPayload = {
	[key: string]: any;
	_id: string;
	name: string;
	description: string;
	default: boolean;
	createdAt: Date;
	updatedAt: Date;
	permissions: number;
	__v: 0;
};

type PaymentPayload = {
	[key: string]: any;
	CheckoutRequestID: string;
	MerchantRequestID: string;
	ResultCode: number;
	ResultDesc: string;
	amount: number;
	createdAt: string;
	phoneNumber: number;
	receiptNumber: string;
	transactionDate: number;
	updatedAt: string;
	status:
		| 'pending'
		| 'success'
		| 'insufficient funds'
		| 'cancelled'
		| 'timeout'
		| 'failed';
	__v: 0;
};

export type UserPayload = {
	[key: string]: any;
	_id: string;
	username: string;
	role: string;
	email: string;
	firstName: string;
	lastName: string;
	gender: string;
	isDeleted: false;
	avatar: string;
	phoneNumber: '';
	createdAt: string;
	updatedAt: string;
	role: string
};

type KeyOfType<T, U> = { [P in keyof T]: T[P] extends U ? P : never }[keyof T];

export type Y = PickKeysType<s, keyof s>;

export type SortFunction<T> = (items: T[], field: string) => T[];
