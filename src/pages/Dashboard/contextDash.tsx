import { createContext, Dispatch, ReactNode, SetStateAction, useMemo, useState } from 'react';

interface DashboardState {
	component: 'user';
	account: 'information' | 'password' | '';
}

const initialDashboardState: DashboardState = {
	component: 'user',
	account: '',
};

interface DashboardContextProps {
	dashboardState: DashboardState;
	setDashboardState: Dispatch<SetStateAction<DashboardState>>;
}

const initialDashboardContext: DashboardContextProps = {
	dashboardState: initialDashboardState,
	setDashboardState: () => {},
};

export const DashboardContext = createContext<DashboardContextProps>(initialDashboardContext);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
	const [dashboardState, setDashboardState] = useState<DashboardState>(initialDashboardState);

	const contextValue = useMemo(() => {
		return { dashboardState, setDashboardState };
	}, [dashboardState, setDashboardState]);

	return <DashboardContext.Provider value={contextValue}>{children}</DashboardContext.Provider>;
};
