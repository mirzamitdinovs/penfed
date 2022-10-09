import navbarTopData from 'data/navbar-top.data'
import Link from 'next/link'

const TopBar = () => {
	return (
		<div className='bg-gray-100 flex p-3 justify-end '>
			{navbarTopData.map((item, index) => (
				<div key={index} className='ml-10'>
					<Link href={item.link}>
						<a>{item.title}</a>
					</Link>
				</div>
			))}
		</div>
	)
}

export default TopBar
