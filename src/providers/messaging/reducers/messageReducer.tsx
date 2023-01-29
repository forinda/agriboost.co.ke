import { ReducerType } from '../../types/helpers';
import { MessageStateType, MessageActionTypes, MessagePayloadType } from '../types';

const messageReducer: ReducerType<MessageStateType, MessageActionTypes> = (state,
	action): {
		messages: (MessagePayloadType |
		{ from: string; body: string; message: string; _id: string; })[];
	} => {
	switch (action.type) {
		case 'send-message': {
			const { body, from } = action.payload;
			return {
				...state,
				messages: [
					...state.messages,
					{
						from,
						body,
						message: '',
						_id: Math.random().toString(36).substr(2, 9),
					},
				],
			};
		}
		case 'update-message': {
			const { body, id } = action.payload;
			return {
				...state,
				messages: state.messages.map((message) => {
					if (message._id === id) {
						return {
							...message,
							body,
						};
					}
					return message;
				}),
			};
		}

		case 'delete-message': {
			const id = action.payload;
			return {
				...state,
				messages: state.messages.filter((message) => message._id !== id),
			};
		}
		default:
			return state;
	}
};

export default messageReducer;
