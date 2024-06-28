import { MouseEvent, ReactNode, useState } from 'react';
import { ButtonProps } from '../../../../components/common/button/button.type';
import { InputProps } from '../../../../components/common/input/Input';
import AuthComponent from './AuthComponent/AuthComponent';

export interface UseAuthProps<T, K> {
	component: string;
	inputs: { name: K; placeholder: InputProps['placeholder'] }[];
	buttons: {
		id: T;
		text: ButtonProps['text'];
		type: ButtonProps['type'];
	}[];
}

export type InitialState<K extends string> = {
	[key in K]: string;
} & {
	error: string;
	name: string;
	placeholder: string;
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
	const [state, setState] = useState<InitialState<K>[]>(
		inputs.map(({ name, placeholder }) => {
			return {
				[name]: '',
				error: '',
				name,
				placeholder,
				disabled: false,
			} as InitialState<K>;
		})
	);

	const [eventClick, setEventClick] = useState<UseAuthReturn<T, K>['eventClick']>({ state: [], value: '' as T });

	const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
		const { value } = event.target as HTMLButtonElement;
		setEventClick({ state, value: value as T });
		// dispatch(fetchApi());
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
				const key = item.name as K;
				return { ...acc, [key]: item[key] };
			},
			{} as Record<K, string>
		),
	};
}
