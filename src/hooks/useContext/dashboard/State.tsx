import { useState } from 'react';

export enum ComponentDash {
	Administrar_Usuario = 'account',
	Gestionar_Usuarios = 'userManagement',
	Creador_de_Productos = 'productCreator',
	Cargador_Masivo_de_Productos = 'bulkProductUploader',
}

interface DashboardState {
	component: ComponentDash;
	account: 'information' | 'password' | '';
}

export const initialDashboardState: DashboardState = {
	component: ComponentDash.Administrar_Usuario,
	account: '',
};

function StateContextDashboard() {
	const [dashboardState, setDashboardState] = useState<DashboardState>(initialDashboardState);

	return { dashboardState, setDashboardState };
}

export default StateContextDashboard;
