declare namespace GUser {
	interface User {
		user_id: string;
		name: string;
		lastName: string;
		email: string;
		phone: number;
		verified: boolean;
		verifiedEmail: boolean;
		roles: string;
		addresses: null;
		// createAt: string;
		// updateAt: string;
		access_token: string;
	}

	interface UserApi {
		statusCode: number;
		message: string;
		data: User;
	}
}
