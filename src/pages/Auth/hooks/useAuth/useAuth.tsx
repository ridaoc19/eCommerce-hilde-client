import { useState } from 'react';
import AuthComponent, { ButtonTemplateProps, InputTemplateProps } from './AuthComponent/AuthComponent';

export interface UseAuthProps {
	component: string;
	inputs: Pick<InputTemplateProps, 'name' | 'placeholder'>[];
	buttons: Pick<ButtonTemplateProps, 'text' | 'id' | 'type'>[];
}

export type InitialState = {
	[key: string]: string | boolean;
	error: string;
	name: string;
	placeholder: string;
	disabled: boolean;
};

export default function useAuth({ inputs, buttons, component }: UseAuthProps) {
	const [state, setState] = useState<InitialState[]>(
		inputs.map(({ name, placeholder }) => {
			return { [name]: '', error: '', name, placeholder, disabled: false };
		})
	);

	return {
		Component: <AuthComponent component={component} state={state} buttons={buttons} setState={setState} />,
	};
}
