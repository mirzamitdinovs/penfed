import Button from 'components/Button';
import NavbarItem from 'components/NavbarItem';
import Image from 'next/image';
import Link from 'next/link';
import Logo from 'public/assets/images/logo.png';
import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json());
const Navbar = () => {
	const { data } = useSWR('/api/v1/navbar', fetcher);

	if (!data) return null;
	return (
		<div className='flex w-screen items-center py-3 px-5 '>
			<Link href='/'>
				<a>
					<Image src={Logo} width={200} height={50} />
				</a>
			</Link>
			<div className='flex justify-evenly flex-1'>
				{data.map((item, index) => (
					<NavbarItem item={item} key={index} />
				))}
			</div>
			{/* <div className='w-52 flex justify-between'> */}
			<div className='mr-2'>
				<Button
					text={'Join Now'}
					clbFunc={() => console.log('Join Now')}
					color={'primary'}
				/>
			</div>
			<Button
				text={'Log In'}
				clbFunc={() => console.log('Log In')}
				color={'secondary'}
			/>
			{/* </div> */}
		</div>
	);
};

export default Navbar;
