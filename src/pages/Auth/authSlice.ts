import createAppSlice from '../../redux/createAppSlice';

export const authSlice = createAppSlice({
	name: 'auth',
	initialState: [],
	reducers: create => ({
		post: create.reducer((state, action) => {}),
	}),
});

export const { post } = authSlice.actions;
