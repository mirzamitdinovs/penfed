import { useState } from 'react'
import Link from 'next/link'
const NavbarItem = ({ item }) => {
	const [toggle, setToggle] = useState(false)
	return (
		<div onMouseLeave={() => setToggle(false)} className=''>
			<p className='cursor-pointer' onMouseEnter={() => setToggle(true)}>
				{item.title}
			</p>
			{toggle && (
				<div className='relative'>
					<div className='absolute bottom-[-40px] z-0 w-full flex justify-center'>
						<div className='h-5 w-5 bg-sky-900 rotate-45 '></div>
					</div>
				</div>
			)}
			{toggle && (
				<div
					// onMouseLeave={() => setToggle(false)}
					className=' w-full absolute left-0 top-32 flex justify-between border-t-4 border-t-sky-900 shadow-lg z-10 min-h-[300px] bg-white'>
					{item.children.map((element, index) => (
						<div className='bg-white flex-1 flex flex-col pb-10' key={index}>
							<div className='bg-gray-100 w-full pl-10 uppercase font-bold text-2xl py-5 border-b-2 border-b-gray-300 mb-5'>
								<p>{element.title}</p>
							</div>
							<ul className='pl-10 border-r-2 border-r-gray-300 flex-1'>
								{element.children.map((elem, index) => (
									<li
										className='text-gray-800 hover:text-blue-800 mt-5 text-lg '
										key={index}>
										<Link href={elem.link}>
											<a>{elem.title}</a>
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default NavbarItem
