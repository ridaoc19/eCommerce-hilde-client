export interface FetchLogin extends Pick<User, 'email'> {
	password: string;
}
export const fetchLogin = async (data: FetchLogin): Promise<User> => {
	const user = await fetch(`${import.meta.env.VITE_SERVER}/auth/login`, {
		body: JSON.stringify(data),
	});
	const response = user.json();
	console.log(response);
	return response;
};

export const fetchReset = ({ email }: Pick<User, 'email'>) => {
	console.log(email);
};
