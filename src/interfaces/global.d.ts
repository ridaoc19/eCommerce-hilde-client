import { ChangeEvent, MouseEvent } from 'react';

export type HandleClick = (event: MouseEvent<HTMLButtonElement>) => void;
export type HandleChangeText = (event: ChangeEvent<HTMLInputElement>) => void;
export type HandleChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
export type HandleChangeTextSelect = (
	data: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
) => void;
