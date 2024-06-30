/* eslint-disable no-param-reassign */
import createAppSlice from '../../redux/createAppSlice';
import { AppDispatch } from '../../redux/store';
import { FetchLogin, fetchLogin, FetchRegistre, fetchRegistre, FetchReset, fetchReset } from './services/api';

interface InitialStateAuth {
	user: GUser.User | null;
	status: 'idle' | 'pending' | 'error' | 'success';
	error: string[];
}

const initialStateAuth: InitialStateAuth = {
	user: null,
	status: 'idle',
	error: [],
};

export const authSlice = createAppSlice({
	name: 'auth',
	initialState: initialStateAuth,
	reducers: create => ({
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
					state.user = payload!;
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
	}),
});

export const { postLogin, postReset, postRegistre } = authSlice.actions;
