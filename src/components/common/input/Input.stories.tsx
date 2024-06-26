import { Meta, StoryObj } from '@storybook/react';
import { expect, fireEvent, fn, within } from '@storybook/test';
import { SvgType } from '../icons/svgType';
import Input from './Input';

const meta = {
	title: 'components/common/Input',
	component: Input,
	tags: ['autodocs'],
	argTypes: {
		id: {
			description: 'ID único del campo de entrada en el DOM.',
			control: { type: 'text' },
		},
		name: {
			description: 'Nombre del campo de entrada.',
			control: { type: 'text' },
		},
		placeholder: {
			description: 'Texto de marcador de posición para el campo de entrada.',
			control: { type: 'text' },
		},
		value: {
			description: 'Valor del campo de entrada.',
			control: { type: 'text' },
		},
		errorMessage: {
			description: 'Mensaje de error a mostrar si hay un error.',
			control: { type: 'text' },
		},
		handleOnChange: {
			description: 'Función que se ejecuta cuando el valor del campo cambia.',
			control: {},
		},
		type: {
			description: 'Tipo de campo de entrada (por ejemplo, "text", "password").',
			control: { type: 'text' },
		},
		disabled: {
			description: 'Deshabilita el campo de entrada si está establecido en `true`.',
			control: { type: 'boolean' },
		},
		className: {
			description: 'Clase CSS adicional para personalizar el estilo del campo de entrada.',
			control: { type: 'text' },
		},
		svgLeft: {
			description: 'Tipo de icono SVG que se mostrará a la izquierda del campo de entrada.',
			control: { type: 'select' },
			options: Object.values(SvgType),
		},
		svgRight: {
			description: 'Tipo de icono SVG que se mostrará a la derecha del campo de entrada.',
			control: { type: 'select' },
			options: Object.values(SvgType),
		},
		other_attributes: {
			description: 'Otras propiedades HTML estándar que se pueden aplicar al campo de entrada.',
			control: { type: 'object' },
		},
	},
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Inputs: Story = {
	args: {
		id: 'input__login-username',
		name: 'username',
		placeholder: 'Usuario',
		value: 'max',
		errorMessage: '',
		handleOnChange: fn(),
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);
		const inputElement = canvas.getByTestId('input');

		expect(inputElement).toBeInTheDocument();

		// await userEvent.type(inputElement, 'r');
		await fireEvent.change(inputElement, { target: { value: 'a' } });
		await expect(inputElement).toHaveValue('max');

		await new Promise(r => {
			setTimeout(r, 100);
		});
		await fireEvent.change(inputElement, { target: { value: 'a' } });
		await expect(args.handleOnChange).toHaveBeenCalledTimes(2);
	},
};
