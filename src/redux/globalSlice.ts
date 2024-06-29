/* eslint-disable no-param-reassign */
import { PayloadAction } from '@reduxjs/toolkit';
import { ErrorApi } from '../interfaces/global';
import generateUniqueId from '../utils/uuid';
import createAppSlice from './createAppSlice';

declare interface Message {
	message: string;
	error: string;
	statusCode: number;
	errorId: string;
	field: string;
}

interface InitialStateGlobal {
	messages: Message[];
}

const initialStateAuth: InitialStateGlobal = {
	messages: [],
};

const parseErrorMessage = (errorString: string): Pick<Message, 'field' | 'message'> => {
	if (errorString.includes(':')) {
		const [field, message] = errorString.split(':').map(part => part.trim());
		return { field, message };
	} else {
		return { field: 'general', message: errorString };
	}
};

export const globalSlice = createAppSlice({
	name: 'global',
	initialState: initialStateAuth,
	reducers: create => ({
		postMessage: create.reducer((state, { payload }: PayloadAction<ErrorApi>) => {
			if (Array.isArray(payload.message)) {
				const newMessages: Message[] = payload.message.map(mess => {
					return {
						...parseErrorMessage(mess),
						errorId: generateUniqueId(),
						error: payload.error,
						statusCode: payload.statusCode,
					};
				});
				state.messages = [...state.messages, ...newMessages];
			} else {
				state.messages = [
					...state.messages,
					{
						...payload,
						...parseErrorMessage(payload.message),
						errorId: generateUniqueId(),
					},
				];
			}
		}),
		deleteMessage: create.reducer((state, { payload }: PayloadAction<Message['errorId'][]>) => {
			state.messages = state.messages.filter(({ errorId }) => !payload.includes(errorId));
		}),
		cleanMessage: create.reducer(state => {
			state.messages = [];
		}),
	}),
});

export const { postMessage } = globalSlice.actions;
