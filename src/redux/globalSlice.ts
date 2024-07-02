/* eslint-disable no-param-reassign */
import { PayloadAction } from '@reduxjs/toolkit';
import generateUniqueId from '../utils/uuid';
import createAppSlice from './createAppSlice';
import type { RootState } from './store';

export interface Message {
	message: string;
	statusCode: number;
	errorId: string;
	field: string;
}

interface InitialStateGlobal {
	generalMessages: Message[];
	localMessages: Message[];
}

const initialStateAuth: InitialStateGlobal = {
	generalMessages: [],
	localMessages: [],
};

const parseErrorMessage = (errorString: string): Pick<Message, 'field' | 'message'> => {
	if (errorString.includes(':')) {
		const [field, message] = errorString.split(':').map(part => part.trim());
		return { field, message };
	}
	return { field: 'general', message: errorString };
};

export const globalSlice = createAppSlice({
	name: 'global',
	initialState: initialStateAuth,
	reducers: create => ({
		postMessage: create.reducer(
			(
				state,
				{ payload }: PayloadAction<Omit<Message, 'errorId' | 'field' | 'message'> & { message: string[] | string }>
			) => {
				if (Array.isArray(payload.message)) {
					const newMessages: Message[] = payload.message.map(mess => {
						return {
							...parseErrorMessage(mess),
							errorId: generateUniqueId(),
							statusCode: payload.statusCode,
						};
					});
					state.localMessages = [...state.localMessages, ...newMessages.filter(({ field }) => field !== 'general')];
					state.generalMessages = [...state.generalMessages, ...newMessages.filter(({ field }) => field === 'general')];
				} else {
					const isExistLocal = state.localMessages.some(
						({ field }) => parseErrorMessage(payload.message as string).field === field
					);
					if (isExistLocal) return;
					const data = {
						...payload,
						...parseErrorMessage(payload.message),
						errorId: generateUniqueId(),
					};
					if (data.field !== 'general') {
						state.localMessages = [...state.localMessages, data];
					} else {
						state.generalMessages = [...state.generalMessages, data];
					}
				}
			}
		),
		deleteMessage: create.reducer((state, { payload }: PayloadAction<Message['errorId'][]>) => {
			state.generalMessages = state.generalMessages.filter(({ errorId }) => !payload.includes(errorId));
			state.localMessages = state.localMessages.filter(({ errorId }) => !payload.includes(errorId));
		}),
		cleanMessage: create.reducer(state => {
			state.generalMessages = [];
			state.localMessages = [];
		}),
	}),
});

export const { postMessage, cleanMessage, deleteMessage } = globalSlice.actions;
export const globalState = (state: RootState) => state.global;
