import { ErrorApi } from "../interfaces/global";
import { FetchLogin } from "../pages/Auth/services/api";
import { postMessage } from "../redux/globalSlice";

const catchError = ({ error, dispatch }: { error: unknown; dispatch: FetchLogin['dispatch'] }) => {
	if (typeof error === 'object' && error !== null && 'statusCode' in error) {
		const errorApi = error as ErrorApi;
		dispatch(postMessage(errorApi));
		throw errorApi;
	} else if (error instanceof Error) {
		const errorMessage: ErrorApi = {
			message: [error.message],
			error: 'Login failed',
			statusCode: 500,
		};
		dispatch(postMessage(errorMessage));
		throw errorMessage;
	} else {
		const errorMessage: ErrorApi = {
			message: 'Unexpected error occurred',
			error: 'Login failed',
			statusCode: 500,
		};
		dispatch(postMessage(errorMessage));
		throw errorMessage;
	}
};

export default catchError;
