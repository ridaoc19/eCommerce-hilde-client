import type { ErrorApi } from '../interfaces/global';
import type { AppDispatch } from '../redux/store';
import { postMessage } from '../redux/globalSlice';

const catchError = ({ error, dispatch }: { error: unknown; dispatch: AppDispatch }) => {
	if (typeof error === 'object' && error !== null && 'statusCode' in error) {
		const errorApi = error as ErrorApi;
		dispatch(postMessage({ message: errorApi.message, statusCode: errorApi.statusCode }));
	} else if (error instanceof Error) {
		dispatch(
			postMessage({
				message: [error.message],
				statusCode: 500,
			})
		);
	} else {
		dispatch(
			postMessage({
				message: 'Error desconocido',
				statusCode: 500,
			})
		);
	}
};

export default catchError;
