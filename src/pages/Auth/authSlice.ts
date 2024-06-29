/* eslint-disable no-param-reassign */
import createAppSlice from '../../redux/createAppSlice';
import { AppDispatch } from '../../redux/store';
import { FetchLogin, fetchLogin } from './services/api';

interface InitialStateAuth {
	user: User | null;
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
			async ({ email, password }: FetchLogin, thunkAPI) => {
				const response = await fetchLogin({ email, password, dispatch: thunkAPI.dispatch as AppDispatch });
				return response;
			},
			{
				pending: state => {
					state.status = 'pending';
				},
				fulfilled: (state, { payload }) => {
					console.log({ payload });
					state.user = payload!;
					state.status = 'success';
				},
				rejected: state => {
					state.status = 'idle';
				},
			}
		),
	}),
});

export const { postLogin } = authSlice.actions;
