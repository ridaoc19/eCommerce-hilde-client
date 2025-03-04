import { useState, useEffect } from 'react';

type MediaQueryType = 'phone' | 'tablet' | 'desktop';

const useMediaQuery = (): { mediaQuery: MediaQueryType } => {
	const [mediaQuery, setMediaQuery] = useState<MediaQueryType>('desktop');

	const handleResize = () => {
		if (window.innerWidth <= 767) {
			setMediaQuery('phone');
		} else if (window.innerWidth <= 1024) {
			setMediaQuery('tablet');
		} else {
			setMediaQuery('desktop');
		}
	};

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return { mediaQuery };
};

export default useMediaQuery;
