import React, { useEffect } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import useMediaQuery from '../../hooks/useMediaQuery';
import { deleteMessage, globalState, Message } from '../../redux/globalSlice';
import Svg from '../common/icons/Svg';
import { SvgType } from '../common/icons/svgType';

const getStatusColor = (status_code: number): string => {
	if (status_code >= 100 && status_code <= 199) {
		return 'information';
	}
	if (status_code >= 200 && status_code <= 299) {
		return 'success';
	}
	if (status_code >= 300 && status_code <= 399) {
		return 'warning';
	}
	return 'error';
};

const MessageList: React.FC = () => {
	const { generalMessages } = useAppSelector(globalState);
	const dispatch = useAppDispatch();
	const { mediaQuery } = useMediaQuery();

	const closeMessage = (errorId: Message['errorId']) => {
		dispatch(deleteMessage([{ errorId }]));
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (generalMessages.length > 0) {
				closeMessage(generalMessages[0].errorId);
			}
		}, 10000);
		return () => clearTimeout(timer);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [generalMessages]);

	return (
		<div className={`message-list ${mediaQuery} ${generalMessages.length > 0 ? 'isOpen' : 'isHidden'}`}>
			{generalMessages.map(({ message, statusCode, errorId }) => (
				<div key={errorId} className={`message-list__card ${getStatusColor(statusCode)}`}>
					<button
						type='button'
						aria-label='button close'
						className='message-list__card--button'
						onClick={() => closeMessage(errorId)}
					>
						<Svg type={SvgType.Close} width={16} height={16} />
					</button>
					<div>
						<div>{message}</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default MessageList;
