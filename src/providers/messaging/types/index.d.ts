import { MessageActionsPayloads } from '../actions';
import { PayloadMapper } from './../../types/helpers.d';
export type MessagePayloadType = {
	from: string;
	_id?: string;
	message: string;
};

export type MessageActionTypes =
	PayloadMapper<MessageActionsPayloads>[keyof PayloadMapper<MessageActionsPayloads>];


	
export type MessageStateType = {
	messages: MessagePayloadType[];
};
