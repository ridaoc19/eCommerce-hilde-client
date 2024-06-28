export interface FetchLogin extends Pick<User, 'email'> {
	password: string;
}

export const fetchLogin = async (data: FetchLogin): Promise<User> => {
	try {
		// Validación de datos de entrada
		if (!data.email || !data.password) {
			throw new Error('Email and password are required');
		}

		console.log(import.meta.env.VITE_SERVER, data, 'Sending login request');

		const response = await fetch(`${import.meta.env.VITE_SERVER}/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			const errorResponse = await response.json();
			throw new Error(errorResponse.message || 'Failed to login');
		}

		const user: User = await response.json();
		console.log({ user });
		return user;
	} catch (error) {
		throw new Error(`Login failed: ${(error as Error).message}`);
	}
};

export const fetchReset = ({ email }: Pick<User, 'email'>) => {
	console.log(email);
};
