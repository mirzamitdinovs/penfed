import {
	HomeIcon,
	CreditCardIcon,
	BanknotesIcon,
	HomeModernIcon,
	DocumentChartBarIcon,
} from '@heroicons/react/24/outline';

export default [
	{
		icon: <HomeIcon className='w-10 h-10' />,
		title: 'Mortgages',
		link: '/mortgages',
	},
	{
		icon: <CreditCardIcon className='w-10 h-10' />,
		title: 'Credit Cards',
		link: '/credit-cards',
	},
	{
		icon: <BanknotesIcon className='w-10 h-10' />,
		title: 'Savings',
		link: '/savings',
	},
	{
		icon: <HomeModernIcon className='w-10 h-10' />,
		title: 'Home Equity',
		link: '/home-equity',
	},
	{
		icon: <DocumentChartBarIcon className='w-10 h-10' />,
		title: 'Checkings',
		link: '/checkings',
	},
];
