import { MouseEvent, ReactNode, useState } from 'react';
import { ButtonProps } from '../../../../components/common/button/button.type';
import { InputProps } from '../../../../components/common/input/Input';
import AuthComponent from './AuthComponent/AuthComponent';

export interface UseAuthProps {
	component: string;
	inputs: Pick<InputProps, 'name' | 'placeholder'>[];
	buttons: (Pick<ButtonProps, 'id' | 'text' | 'type'> & { returnClick?: boolean })[];
}

export type InitialState = {
	[key: string]: string | boolean;
	error: string;
	name: string;
	placeholder: string;
	disabled: boolean;
};

interface UseAuthReturn {
	Component: ReactNode;
	eventClick: { value: string; state: InitialState[] };
}

export default function useAuth({ inputs, buttons, component }: UseAuthProps): UseAuthReturn {
	const [state, setState] = useState<InitialState[]>(
		inputs.map(({ name, placeholder }) => {
			return { [name]: '', error: '', name, placeholder, disabled: false };
		})
	);
	const [eventClick, setEventClick] = useState<UseAuthReturn['eventClick']>({ state: [], value: '' });

	const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
		const { value } = event.target as HTMLButtonElement;
		setEventClick({ state, value });
		// dispatch(fetchApi());
	};

	return {
		Component: (
			<AuthComponent
				component={component}
				state={state}
				buttons={buttons.map(({ returnClick, ...button }) => button)}
				setState={setState}
				handleClick={handleOnClick}
			/>
		),
		eventClick,
	};
}
