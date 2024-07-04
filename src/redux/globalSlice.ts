/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import generateUniqueId from '../utils/uuid';
import createAppSlice from './createAppSlice';

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
		deleteMessage: create.reducer(
			(state, { payload }: PayloadAction<Partial<Pick<Message, 'errorId' | 'field'>>[]>) => {
				if (payload.length > 0) {
					if (payload.some(item => item.errorId)) {
						state.generalMessages = state.generalMessages.filter(
							message => !payload.some(p => p.errorId && p.errorId === message.errorId)
						);
					} else {
						state.localMessages = state.localMessages.filter(
							message =>
								!payload.some(
									p => (p.errorId && p.errorId === message.errorId) || (p.field && p.field === message.field)
								)
						);
					}
				}
			}
		),

		cleanMessage: create.reducer(state => {
			state.generalMessages = [];
			state.localMessages = [];
		}),
	}),
});

export const { postMessage, cleanMessage, deleteMessage } = globalSlice.actions;
export const globalState = (state: RootState) => state.global;
