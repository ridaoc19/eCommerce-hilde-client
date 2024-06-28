/* eslint-disable no-param-reassign */
import createAppSlice from '../../redux/createAppSlice';
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
		post: create.reducer((state, action) => {}),
		postLogin: create.asyncThunk(
			async ({ email, password }: FetchLogin, thunkAPI) => {
				const state = thunkAPI.getState() as { auth: InitialStateAuth };
				console.log('Current state:', state.auth);
				return fetchLogin({ email, password });
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
					state.error = [''];
				},
			}
		),
	}),
});

export const { postLogin } = authSlice.actions;
