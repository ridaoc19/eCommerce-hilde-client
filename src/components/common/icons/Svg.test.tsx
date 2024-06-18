/* eslint-disable react/jsx-props-no-spreading */
import { cleanup, render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import Svg from './Svg';
import { SvgType } from './svgType';

// Propiedades por defecto para las pruebas
const defaultProps = {
	type: SvgType.User,
	width: 24,
	height: 24,
	color: '#000000',
};

describe('Svg Component Tests', () => {
	// Limpia el estado después de cada prueba
	afterEach(() => {
		cleanup();
	});

	// Prueba: Renderiza correctamente el SVG para el tipo 'user'
	test('renders user icon', () => {
		render(<Svg {...defaultProps} type={SvgType.User} />);
		const svgElement = screen.getByRole(SvgType.User);
		expect(svgElement).toBeInTheDocument();
	});

	// Prueba: Renderiza correctamente el SVG para el tipo 'delete'
	test('renders delete icon', () => {
		render(<Svg {...defaultProps} type={SvgType.Delete} />);
		const svgElement = screen.getByRole(SvgType.Delete);
		expect(svgElement).toBeInTheDocument();
	});

	// Prueba: Renderiza correctamente el SVG para el tipo 'filter'
	test('renders filter icon', () => {
		render(<Svg {...defaultProps} type={SvgType.Filter} />);
		const svgElement = screen.getByRole(SvgType.Filter);
		expect(svgElement).toBeInTheDocument();
	});

	// Prueba: Renderiza correctamente el SVG para el tipo 'increase'
	test('renders increase icon', () => {
		render(<Svg {...defaultProps} type={SvgType.Increase} />);
		const svgElement = screen.getByRole(SvgType.Increase);
		expect(svgElement).toBeInTheDocument();
	});

	// Prueba: Renderiza correctamente el SVG para el tipo 'decrement'
	test('renders decrement icon', () => {
		render(<Svg {...defaultProps} type={SvgType.Decrement} />);
		const svgElement = screen.getByRole(SvgType.Decrement);
		expect(svgElement).toBeInTheDocument();
	});

	// // Prueba: Verifica que el color del SVG sea el correcto
	// test('renders with correct color', () => {
	// 	const color = '#FF0000'; // Color rojo
	// 	render(<Svg {...defaultProps} color={color} />);
	// 	const svgElement = screen.getByRole(SvgType.User);
	// 	expect(svgElement).toHaveAttribute('stroke', color);
	// });
});
