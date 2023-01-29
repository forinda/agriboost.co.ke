export type MessageActionsPayloads = {
	['send-message']: {
		from: string;
		body: string;
	};
	['delete-message']: string;
	['update-message']: {
		id: string;
		body: string;
	};
};