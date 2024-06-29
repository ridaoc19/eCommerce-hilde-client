import React, { useEffect } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import useMediaQuery from '../../hooks/useMediaQuery';
import { deleteMessage, globalState, Message } from '../../redux/globalSlice';
import Svg from '../common/icons/Svg';
import { SvgType } from '../common/icons/svgType';

const MessageList: React.FC = () => {
	const { generalMessages } = useAppSelector(globalState);
	const dispatch = useAppDispatch();
	const { mediaQuery } = useMediaQuery();

	useEffect(() => {
		const timer = setTimeout(() => {
			if (generalMessages.length > 0) {
				closeMessage(generalMessages[0].errorId);
			}
		}, 5000);
		return () => clearTimeout(timer);
	}, [generalMessages]);

	const closeMessage = (errorId: Message['errorId']) => {
		dispatch(deleteMessage([errorId]));
	};

	return (
		<div className={`message-list ${mediaQuery} ${generalMessages.length > 0 ? 'isOpen' : 'isHidden'}`}>
			{generalMessages.map(({ message, statusCode, errorId }, index) => (
				<div key={index} className={`message-list__card ${getStatusColor(statusCode)}`}>
					<button className='message-list__card--button' onClick={() => closeMessage(errorId)}>
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

const getStatusColor = (status_code: number): string => {
	if (status_code >= 100 && status_code <= 199) {
		return 'information';
	} else if (status_code >= 200 && status_code <= 299) {
		return 'success';
	} else if (status_code >= 300 && status_code <= 399) {
		return 'warning';
	} else {
		return 'error';
	}
};

export default MessageList;
