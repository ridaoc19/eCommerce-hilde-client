import { Meta, StoryObj } from '@storybook/react';
import { expect, fireEvent, fn, userEvent, within } from '@storybook/test';

import { SvgType } from '../icons/svgType';
import Button from './Button';
import { ButtonType } from './button.type';

const meta: Meta<typeof Button> = {
	title: 'components/common/Buttons',
	component: Button,
	tags: ['autodocs'],
	parameters: {
		componentSubtitle: 'Botón Global',
	},
	argTypes: {
		id: {
			description: 'ID único del botón en el DOM.',
			control: { type: 'text' },
		},
		className: {
			description: 'Clase CSS adicional para personalizar el estilo del botón.',
			control: { type: 'text' },
		},
		text: {
			description: 'Texto o componente React a mostrar dentro del botón.',
			control: { type: 'text' },
		},
		disabled: {
			description: 'Deshabilita el botón si está establecido en `true`.',
			control: { type: 'boolean' },
		},
		handleClick: {
			description: 'Función que se ejecuta cuando se hace clic en el botón.',
			control: {},
		},
		type: {
			description: 'Estilo visual del botón.',
			control: {
				type: 'select',
			},
			options: Object.values(ButtonType),
		},
		value: {
			description: 'Valor asociado al botón.',
			control: { type: 'text' },
		},
		svgRight: {
			description: 'Tipo de icono SVG que se mostrará a la derecha del texto.',
			control: { type: 'select' },
			options: Object.values(SvgType),
		},
		svgLeft: {
			description:
				'Tipo de icono SVG que se mostrará a la izquierda del texto.',
			control: { type: 'select' },
			options: Object.values(SvgType),
		},
		other_attributes: {
			description:
				'Otras propiedades HTML estándar que se pueden aplicar al botón.',
			control: { type: 'object' },
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Buttons: Story = {
	args: {
		id: 'button__login',
		text: 'Inicio de Sesión',
		type: ButtonType.Dark,
		handleClick: fn(),
		svgRight: SvgType.Logo,
		svgLeft: SvgType.ArrowBottom,
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);
		const buttonElement = canvas.getByText('Inicio de Sesión');

		expect(buttonElement).toBeInTheDocument();
		fireEvent.click(buttonElement);
		expect(args.handleClick).toHaveBeenCalledTimes(1);

		const button = canvas.getByRole('button');
		await userEvent.type(button, 'new text');
	},
};
