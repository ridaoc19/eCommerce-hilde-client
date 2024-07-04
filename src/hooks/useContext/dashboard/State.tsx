import { useEffect, useState } from 'react';
import { SvgType } from '../../../components/common/icons/svgType';
import useAppSelector from '../../useAppSelector';
import { authState } from '../../../pages/Auth/authSlice';

export enum ComponentDash {
	Account = 'account',
	UserManagement = 'userManagement',
	ProductCreator = 'productCreator',
	BulkProductUploader = 'bulkProductUploader',
}

interface DashboardState {
	component: ComponentDash;
	account: 'information' | 'password' | '';
	sidebar: {
		id: ComponentDash;
		text: string;
		role: GUser.PermitsRoles['id'];
		svg: SvgType;
	}[];
}

export const initialDashboardState: DashboardState = {
	component: ComponentDash.Account,
	account: '',
	sidebar: [],
};

function StateContextDashboard() {
	const { user } = useAppSelector(authState);
	const [dashboardState, setDashboardState] = useState<DashboardState>(initialDashboardState);

	useEffect(() => {
		if (user) {
			const filterSidebar: DashboardState['sidebar'] = [
				{ id: ComponentDash.Account, text: 'Administrar Usuario', role: 'visitant', svg: SvgType.User },
				{ id: ComponentDash.UserManagement, text: 'Gestionar Usuarios', role: 'super', svg: SvgType.User },
				{ id: ComponentDash.ProductCreator, text: 'Creador de Productos', role: 'edit', svg: SvgType.Shop },
				{
					id: ComponentDash.BulkProductUploader,
					text: 'Cargador masivo de Productos',
					role: 'admin',
					svg: SvgType.Shop,
				},
			];

			setDashboardState({ ...dashboardState, sidebar: filterSidebar.filter(({ role }) => user.accessControl[role]) });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	return { dashboardState, setDashboardState };
}

export default StateContextDashboard;
