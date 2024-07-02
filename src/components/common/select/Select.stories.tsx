import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import Select from './Select';
import { SvgType } from '../icons/svgType';

const meta: Meta<typeof Select> = {
	title: 'components/common/Select',
	component: Select,
	tags: ['autodocs'],
	argTypes: {
		id: {
			description: 'ID único del input en el DOM.',
			control: { type: 'text' },
		},
		data: {
			description: 'Lista de opciones disponibles para seleccionar.',
			control: { type: 'object' },
		},
		placeholder: {
			description: 'Texto de marcador de posición que se muestra en el campo de entrada.',
			control: { type: 'text' },
		},
		svgRight: {
			description: 'Tipo de icono SVG que se mostrará a la derecha del campo de entrada.',
			control: { type: 'select' },
			options: Object.values(SvgType),
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		id: 'input__list',
		data: [
			{ id: 'Option1', value: 'Option  1' },
			{ id: 'Option2', value: 'Option  2' },
			{ id: 'Option3', value: 'Option  3' },
			{ id: 'Option4', value: 'Option  4' },
			{ id: 'Option5', value: 'Option  5' },
			{ id: 'Option55', value: 'Option  55' },
		],
		placeholder: 'Seleccione',
		svgRight: SvgType.Close,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const selectElement = canvas.getByTestId('select');
		expect(selectElement).toBeInTheDocument();

		const inputElement = canvas.getByRole('textbox');
		await userEvent.click(inputElement);
		await userEvent.type(inputElement, 'Option 1');
		expect(inputElement).toHaveValue('Option 1');

		// const optionElement = canvas.getByText('Option 1');
		// await userEvent.click(optionElement);
		// expect(inputElement).toHaveValue('Option 1');
	},
};
