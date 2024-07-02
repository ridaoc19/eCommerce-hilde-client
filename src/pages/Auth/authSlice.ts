/* eslint-disable no-param-reassign */
import { PayloadAction } from '@reduxjs/toolkit';
import createAppSlice from '../../redux/createAppSlice';
import { AppDispatch, RootState } from '../../redux/store';
import {
	fetchChange,
	FetchChange,
	FetchLogin,
	fetchLogin,
	FetchRegistre,
	fetchRegistre,
	FetchReset,
	fetchReset,
	fetchToken,
	FetchToken,
} from './services/api';
import { postMessage } from '../../redux/globalSlice';

interface InitialStateAuth {
	user: GUser.User | null;
	status: 'idle' | 'pending' | 'error' | 'success';
}

const initialStateAuth: InitialStateAuth = {
	user: null,
	status: 'idle',
};

export const authSlice = createAppSlice({
	name: 'auth',
	initialState: initialStateAuth,
	reducers: create => ({
		updateAuthState: create.reducer((state, { payload }: PayloadAction<Partial<InitialStateAuth>>) => {
			if (payload.user) {
				state.user = payload.user;
			}
			if (payload.status) {
				state.status = payload.status;
			}
		}),
		postLogin: create.asyncThunk(
			async ({ email, password }: Omit<FetchLogin, 'dispatch'>, thunkAPI) => {
				const response = await fetchLogin({ email, password, dispatch: thunkAPI.dispatch as AppDispatch });
				return response;
			},
			{
				pending: state => {
					state.status = 'pending';
				},
				fulfilled: (state, { payload }) => {
					state.user = payload;
					state.status = 'success';
				},
				rejected: state => {
					state.status = 'idle';
				},
			}
		),
		postReset: create.asyncThunk(
			async ({ email }: Omit<FetchReset, 'dispatch'>, thunkAPI) => {
				const response = await fetchReset({ email, dispatch: thunkAPI.dispatch as AppDispatch });
				return response;
			},
			{
				pending: state => {
					state.status = 'pending';
				},
				fulfilled: state => {
					state.status = 'success';
					state.user = null;
				},
				rejected: state => {
					state.status = 'idle';
				},
			}
		),
		postRegistre: create.asyncThunk(
			async (data: Omit<FetchRegistre, 'dispatch'>, thunkAPI) => {
				const response = await fetchRegistre({ ...data, dispatch: thunkAPI.dispatch as AppDispatch });
				return response;
			},
			{
				pending: state => {
					state.status = 'pending';
				},
				fulfilled: state => {
					state.status = 'success';
					state.user = null;
				},
				rejected: state => {
					state.status = 'idle';
				},
			}
		),
		postChange: create.asyncThunk(
			async (data: Omit<FetchChange, 'dispatch' | 'email'>, thunkAPI) => {
				const {
					auth: { user },
				} = thunkAPI.getState() as RootState;
				if (!user?.email) {
					thunkAPI.dispatch(
						postMessage({
							message: 'Correo electrónico no encontrado, inicia sesión nuevamente',
							statusCode: 400,
						})
					);
					throw thunkAPI.rejectWithValue({ error: 'email no valido' });
				}
				const response = await fetchChange({
					...data,
					email: user.email,
					dispatch: thunkAPI.dispatch as AppDispatch,
				});
				return response;
			},
			{
				pending: state => {
					state.status = 'pending';
				},
				fulfilled: state => {
					state.status = 'success';
					state.user = null;
				},
				rejected: state => {
					state.status = 'idle';
				},
			}
		),
		postToken: create.asyncThunk(
			async ({ access_token }: Omit<FetchToken, 'dispatch'>, thunkAPI) => {
				const response = await fetchToken({ access_token, dispatch: thunkAPI.dispatch as AppDispatch });
				return response;
			},
			{
				pending: state => {
					state.status = 'pending';
				},
				fulfilled: (state, { payload }) => {
					state.user = payload;
					state.status = 'success';
				},
				rejected: state => {
					state.status = 'error';
				},
			}
		),
	}),
});

export const { postLogin, postReset, postRegistre, postChange, updateAuthState, postToken } = authSlice.actions;
export const authState = (state: RootState) => state.auth;
