import { MouseEvent, ReactNode, useState } from 'react';
import { ButtonProps } from '../../../../components/common/button/button.type';
import { InputProps } from '../../../../components/common/input/Input';
import useValidations from '../../../../hooks/useValidations/useValidations';
import AuthComponent from './AuthComponent/AuthComponent';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import { postMessage } from '../../../../redux/globalSlice';

export interface UseAuthProps<T, K> {
	component: string;
	inputs: { iName: K; iPlaceholder: InputProps['placeholder'] }[];
	buttons: {
		bId: T;
		bText: ButtonProps['text'];
		bType: ButtonProps['type'];
		bValidate?: boolean;
	}[];
}

export type InitialState<K extends string> = {
	[key in K]: string;
} & {
	// error: string;
	iName: string;
	iPlaceholder: string;
	disabled: boolean;
};

export interface UseAuthReturn<T, K extends string> {
	Component: ReactNode;
	eventClick: { value: T; state: InitialState<K>[] };
	body: { [key in K]: string };
}

export default function useAuth<T extends string, K extends string>({
	inputs,
	buttons,
	component,
}: UseAuthProps<T, K>): UseAuthReturn<T, K> {
	const dispatch = useAppDispatch();
	const { getValidationErrors } = useValidations();
	const [eventClick, setEventClick] = useState<UseAuthReturn<T, K>['eventClick']>({ state: [], value: '' as T });
	const [state, setState] = useState<InitialState<K>[]>(
		inputs.map(({ iName, iPlaceholder }) => {
			return {
				[iName]: '',
				error: '',
				iName,
				iPlaceholder,
				disabled: false,
			} as InitialState<K>;
		})
	);

	const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
		const { value } = event.target as HTMLButtonElement;
		if (buttons.find(({ bId }) => bId === value)?.bValidate) {
			const validateError: string[] = state
				.map(item => {
					const { message, name } = getValidationErrors({ name: item.iName, value: item[item.iName as K] });
					return message ? `${name}: ${message}` : '';
				})
				.filter(Boolean);

			if (validateError.length > 0) {
				dispatch(postMessage({ statusCode: 400, message: validateError }));
			} else {
				setEventClick({ state, value: value as T });
			}
		} else {
			setEventClick({ state, value: value as T });
		}
	};

	return {
		Component: (
			<AuthComponent
				component={component}
				state={state}
				buttons={buttons}
				setState={setState}
				handleClick={handleOnClick}
			/>
		),
		eventClick,
		body: state.reduce(
			(acc, item) => {
				const key = item.iName as K;
				return { ...acc, [key]: item[key] };
			},
			{} as Record<K, string>
		),
	};
}
