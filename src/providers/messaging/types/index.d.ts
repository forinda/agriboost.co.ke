import { PayloadMapper } from "@provider-types/helpers";
import { MessageActionsPayloads } from "../actions";
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
