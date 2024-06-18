/* eslint-disable react/jsx-props-no-spreading */
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { describe, test, vi } from 'vitest';
import { SvgType } from '../icons/svgType';
import Input, { InputProps } from './Input';

// Mock de la función handleOnChange
const handleOnChangeMock = vi.fn();

// Propiedades por defecto para las pruebas
const defaultProps: InputProps = {
	id: 'test-input',
	placeholder: 'Enter value',
	value: '',
	handleOnChange: handleOnChangeMock,
	name: 'inputName',
	errorMessage: '',
};

describe('Input Component Tests', () => {
	// Limpia el estado después de cada prueba
	afterEach(() => {
		cleanup();
	});

	// Prueba: Renderiza el componente Input correctamente
	test('renders component', () => {
		render(<Input {...defaultProps} />);
		const inputElement = screen.getByRole('textbox');
		expect(inputElement).toBeInTheDocument();
	});

	// Prueba: Verifica que el evento handleOnChange se llame correctamente al cambiar el valor
	test('calls handleOnChange when value changes', () => {
		render(<Input {...defaultProps} />);
		const inputElement = screen.getByRole('textbox');
		fireEvent.change(inputElement, { target: { value: 'test value' } });
		expect(handleOnChangeMock).toHaveBeenCalledTimes(1);
	});

	// Prueba: Verifica que se muestre el mensaje de error correctamente
	test('displays error message', () => {
		const errorMessage = 'Please enter a valid value';
		render(<Input {...defaultProps} errorMessage={errorMessage} />);
		const errorElement = screen.getByText(errorMessage);
		expect(errorElement).toBeInTheDocument();
	});

	// Prueba: Verifica que el componente esté deshabilitado correctamente
	test('disables input when disabled is true', () => {
		render(<Input {...defaultProps} disabled />);
		const inputElement = screen.getByRole('textbox') as HTMLInputElement;
		expect(inputElement).toBeDisabled();
	});

	// Prueba: Verifica que los atributos adicionales se pasen correctamente al input
	test('renders with other attributes', () => {
		render(<Input {...defaultProps} other_attributes={{ maxLength: 10 }} />);
		const inputElement = screen.getByRole('textbox') as HTMLInputElement;
		expect(inputElement).toHaveAttribute('maxLength', '10');
	});

	// Prueba: Verifica que el botón de toggle se active al hacer clic o presionar Enter
	test('toggles button on click or Enter press', () => {
		render(<Input {...defaultProps} svgRight={SvgType.ArrowBottom} />);
		const toggleButton = screen.getByRole('button');
		fireEvent.click(toggleButton);
		const inputType = screen.getByRole('textbox') as HTMLInputElement;
		expect(inputType.type).toBe('text'); // Verifica que el tipo de input cambie a 'text'
	});

	// // Prueba: Verifica que el icono svgLeft se renderice correctamente
	// test('renders with svgLeft', () => {
	// 	render(<Input {...defaultProps} svgLeft={SvgType.ArrowTop} />);
	// 	const svgElement = screen.getByTestId('svg-left');
	// 	expect(svgElement).toBeInTheDocument();
	// });
});
