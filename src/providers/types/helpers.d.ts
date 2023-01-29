export type PayloadMapper<T> = {
	[key in keyof T]: T extends undefined
		? never
		: {
				type: key;
				payload: T[key] extends undefined | null ? null : T[key];
		  };
};

export type ReducerType<S, A = A extends infer D ? D : never> = (
	state: S,
	action: A,
) => S;
