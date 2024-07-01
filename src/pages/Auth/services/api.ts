import { ErrorApi } from '../../../interfaces/global';
import { postMessage } from '../../../redux/globalSlice';
import { AppDispatch } from '../../../redux/store';
import catchError from '../../../services/catchError';

// ! LOGIN
export interface FetchLogin extends Pick<GUser.User, 'email'> {
	password: string;
	dispatch: AppDispatch;
}

export const fetchLogin = async (data: FetchLogin): Promise<GUser.User> => {
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
		const { data: user, message, statusCode }: GUser.UserApi = await response.json();
		data.dispatch(
			postMessage({
				message,
				statusCode,
			})
		);

		localStorage.setItem('token', user.access_token);
		return user;
	} catch (error) {
		catchError({ error, dispatch: data.dispatch });
		throw error;
	}
};

// ! RESET
export interface FetchReset extends Pick<GUser.User, 'email'> {
	dispatch: AppDispatch;
}
export const fetchReset = async (data: FetchReset) => {
	try {
		if (!data.email) {
			throw new Error('Correo electrónico requerido');
		}

		const response = await fetch(`${import.meta.env.VITE_SERVER}/users/reset`, {
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
		const { message, statusCode }: Omit<GUser.UserApi, 'data'> = await response.json();
		data.dispatch(
			postMessage({
				message,
				statusCode,
			})
		);
		return true;
	} catch (error) {
		catchError({ error, dispatch: data.dispatch });
		throw error;
	}
};

// ! REGISTRE
export interface FetchRegistre extends Pick<GUser.User, 'name' | 'lastName' | 'email'> {
	phone: string;
	dispatch: AppDispatch;
}
export const fetchRegistre = async (data: FetchRegistre) => {
	try {
		const response = await fetch(`${import.meta.env.VITE_SERVER}/users/registre`, {
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
		const { message, statusCode }: Omit<GUser.UserApi, 'data'> = await response.json();
		data.dispatch(
			postMessage({
				message,
				statusCode,
			})
		);
		return true;
	} catch (error) {
		catchError({ error, dispatch: data.dispatch });
		throw error;
	}
};

// ! CHANGE
export interface FetchChange extends Pick<GUser.User, 'email'> {
	password: string;
	newPassword: string;
	dispatch: AppDispatch;
}
export const fetchChange = async (data: FetchChange) => {
	try {
		const response = await fetch(`${import.meta.env.VITE_SERVER}/users/change`, {
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
		const { message, statusCode }: Omit<GUser.UserApi, 'data'> = await response.json();
		data.dispatch(
			postMessage({
				message,
				statusCode,
			})
		);
		return true;
	} catch (error) {
		catchError({ error, dispatch: data.dispatch });
		throw error;
	}
};
