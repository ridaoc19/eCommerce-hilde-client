import { ChangeEvent, MouseEvent, ReactNode } from 'react';

declare type HandleClick = (event: MouseEvent<HTMLButtonElement>) => void;
declare type HandleChangeText = (event: ChangeEvent<HTMLInputElement>) => void;
declare type HandleChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
declare type HandleChangeTextSelect = (
	data: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
) => void;

declare interface ErrorApi {
	message: string[] | string;
	error: string;
	statusCode: number;
}
