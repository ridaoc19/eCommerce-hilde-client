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
				const response = await fetchLogin({ email, password });
				console.log(response);
				return response;
			},
			{
				pending: state => {
					state.status = 'pending';
				},
				fulfilled: (state, { payload }) => {
					console.log({ payload });
					state.user = payload;
					state.status = 'success';
				},
				rejected: (state, { payload, error }) => {
					console.log({ payload, error });

					state.status = 'error';
					state.error = [''];
				},
			}
		),
	}),
});

export const { postLogin } = authSlice.actions;
