declare namespace GUser {
	interface User {
		user_id: string;
		name: string;
		lastName: string;
		email: string;
		phone: number;
		verified: boolean;
		verifiedEmail: boolean;
		roles: 'super' | 'admin' | 'edit' | 'visitant';
		addresses: null;
		// createAt: string;
		// updateAt: string;
		access_token: string;
		accessControl: {
			[keyDashboard in PermitsRoles['id']]: boolean;
		};
	}

	interface UserApi {
		statusCode: number;
		message: string;
		data: Omit<User, 'accessControl'>;
	}

	export interface PermitsRoles {
		id: GUser.User['roles'];
		roles: GUser.User['roles'][];
	}
}
