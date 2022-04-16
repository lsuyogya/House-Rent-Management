import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import BallotIcon from '@mui/icons-material/Ballot';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MapIcon from '@mui/icons-material/Map';

export const navbarData = [
	{
		title: 'Dashboard',
		icon: <DashboardIcon />,
		link: '/',
	},
	{
		title: 'Houses',
		icon: <HomeIcon />,
		link: '/houses',
	},
	{
		title: 'Bills',
		icon: <BallotIcon />,
		link: '/bills',
	},
	{
		title: 'Profile',
		icon: <AccountCircleIcon />,
		link: '/profile',
	},
	{
		title: 'Map',
		icon: <MapIcon />,
		link: '/map',
	},
];
