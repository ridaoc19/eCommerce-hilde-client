/* eslint-disable react/jsx-props-no-spreading */
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { SvgType } from '../icons/svgType';
import Button from './Button';
import { ButtonProps, ButtonType } from './button.type';

// Propiedades por defecto para las pruebas
const defaultProps: ButtonProps = {
	id: 'test-button',
	type: ButtonType.Dark,
	text: 'Click Me',
	handleClick: vi.fn(), // Función simulada para handleClick
	svgLeft: SvgType.ArrowBottom,
	disabled: false,
};

describe('Button Component Tests', () => {
	beforeEach(() => {
		cleanup(); // Limpia el estado antes de cada prueba
	});

	// Prueba: Renderiza el componente Button
	test('renders component', () => {
		render(<Button {...defaultProps} />);
		const button = screen.getByRole('button');
		expect(button).toBeDefined();
	});

	// Prueba: handleClick se llama cuando se hace clic
	test('calls handleClick when clicked', () => {
		const handleClick = vi.fn(); // Función simulada para handleClick
		render(<Button {...defaultProps} handleClick={handleClick} />);
		const button = screen.getByRole('button');
		fireEvent.click(button); // Simula un clic en el botón
		expect(handleClick).toHaveBeenCalledTimes(1); // Verifica que handleClick se llame una vez
	});

	// Prueba: Renderiza con svgLeft presente
	test('renders with svgLeft', () => {
		const { container } = render(<Button {...defaultProps} svgLeft={SvgType.ArrowBottom} />);
		const svgContainer = container.querySelector('.button__svg-left');
		expect(svgContainer).toBeInTheDocument();
	});

	// Prueba: Tiene la clase "button"
	test('has className "button"', () => {
		render(<Button {...defaultProps} />);
		const button = screen.getByRole('button');
		expect(button).toHaveClass('button');
	});

	// Prueba: El botón está habilitado
	test('button is enabled', () => {
		render(<Button {...defaultProps} disabled={false} />);
		const button = screen.getByRole('button');
		expect(button).toHaveClass('button');
		expect(button).not.toBeDisabled();
	});

	// Prueba: El botón está deshabilitado
	test('button is disabled', () => {
		render(<Button {...defaultProps} disabled />);
		const button = screen.getByRole('button');
		expect(button).toBeDisabled();
	});

	// Prueba: Renderiza con otros atributos
	test('renders with other attributes', () => {
		render(<Button {...defaultProps} other_attributes={{ name: 'test-name' }} />);
		const button = screen.getByRole('button');
		expect(button).toHaveAttribute('name', 'test-name');
	});
});
