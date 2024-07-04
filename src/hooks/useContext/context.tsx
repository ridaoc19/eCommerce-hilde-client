import { createContext, ReactNode, useMemo } from 'react';
import StateContextDashboard, { initialDashboardState } from './dashboard/State';

type StateDashboardReturnType = ReturnType<typeof StateContextDashboard>;
export interface IContextData {
	dashboard: StateDashboardReturnType;
}

export interface StoreContextProps {
	children: ReactNode;
}

const initialContext: IContextData = {
	dashboard: {
		dashboardState: initialDashboardState,
		setDashboardState: () => {},
	},
};

export const CreateContext = createContext<IContextData>(initialContext);

export const StoreContext = ({ children }: StoreContextProps) => {
	const dashboard = StateContextDashboard();

	const contextValue = useMemo(() => {
		return { dashboard };
	}, [dashboard]);

	return <CreateContext.Provider value={contextValue}>{children}</CreateContext.Provider>;
};
