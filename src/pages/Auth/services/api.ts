import { ErrorApi } from '../../../interfaces/global';
import { AppDispatch } from '../../../redux/store';
import catchError from '../../../services/catchError';


export interface FetchLogin extends Pick<User, 'email'> {
	password: string;
	dispatch: AppDispatch;
}

export const fetchLogin = async (data: FetchLogin): Promise<User> => {
	try {
		if (!data.email || !data.password) {
			throw new Error('Correo electrónico y contraseña requeridos');
		}

		const response = await fetch(`${import.meta.env.VITE_SERVER}/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			const errorResponse: ErrorApi = await response.json();
			throw errorResponse;
		}
		const user: User = await response.json();
		return user;
	} catch (error) {
		catchError({ error, dispatch: data.dispatch });
		throw error;
	}
};

export const fetchReset = ({ email }: Pick<User, 'email'>) => {
	console.log(email);
};
