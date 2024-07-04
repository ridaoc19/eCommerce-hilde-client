import _color from '../../../styles/main/global/_color';
import { SvgType } from '../icons/svgType';

export const getBorderColor = (errorMessage: string, value: string | number) => {
	if (errorMessage) {
		return _color['--error-6'];
	}
	if (value.toString().length === 0) {
		return _color['--font-accent'];
	}
	return _color['--success-6'];
};

export const getSvgColor = (errorMessage: string | undefined) => {
	if (errorMessage) {
		return _color['--error-6'];
	}
	return '#848FAC';
};

export const svgTypePassword = (svgType: SvgType, toggle: boolean): SvgType => {
	if (svgType !== SvgType.Password) {
		return svgType;
	}
	if (toggle) {
		return SvgType.OpenEye;
	}

	return SvgType.ClosedEye;
};

export const getInputType = (type: string, toggle: boolean) => {
	if (['password', 'newPassword'].includes(type)) {
		if (toggle) {
			return 'text';
		}
		return 'password';
	}

	return type;
};

export const getClassNameModifier = (baseClass: string, modifier: string | undefined) => {
	if (modifier) {
		return `${baseClass}--${modifier}`;
	}
	return baseClass;
};
