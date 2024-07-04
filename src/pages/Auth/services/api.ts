import type { AppDispatch } from '../../../redux/store';
import { postMessage } from '../../../redux/globalSlice';
import catchError from '../../../services/catchError';

export const permitsRoles: GUser.PermitsRoles[] = [
	{ id: 'super', roles: ['super'] },
	{ id: 'admin', roles: ['super', 'admin'] },
	{ id: 'edit', roles: ['super', 'admin', 'edit'] },
	{ id: 'visitant', roles: ['super', 'admin', 'edit', 'visitant'] },
];

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
			const errorResponse = await response.json();
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
		const accessControl = permitsRoles.reduce((acc, item) => {
			return { ...acc, [item.id]: item.roles.some(r => r.includes(user.roles)) };
		}, {}) as GUser.User['accessControl'];

		return { ...user, accessControl };
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
			const errorResponse = await response.json();
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
			const errorResponse = await response.json();
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
			const errorResponse = await response.json();
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

// ! TOKEN
export interface FetchToken extends Pick<GUser.User, 'access_token'> {
	dispatch: any;
}
export const fetchToken = async ({ access_token, dispatch }: FetchToken): Promise<GUser.User> => {
	try {
		const response = await fetch(`${import.meta.env.VITE_SERVER}/auth/token`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${access_token}`,
			},
		});

		if (!response.ok) {
			const errorResponse = await response.json();
			throw errorResponse;
		}
		const { message, statusCode, data: user }: GUser.UserApi = await response.json();
		dispatch(
			postMessage({
				message,
				statusCode,
			})
		);
		const accessControl = permitsRoles.reduce((acc, item) => {
			return { ...acc, [item.id]: item.roles.some(r => r.includes(user.roles)) };
		}, {}) as GUser.User['accessControl'];

		return { ...user, accessControl };
	} catch (error) {
		catchError({ error, dispatch });
		throw error;
	}
};
