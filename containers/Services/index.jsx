import servicesData from 'data/services.data'
import Link from 'next/link'
const Services = () => {
	return (
		<ul className='flex justify-evenly bg-blue-50 py-10'>
			{servicesData.map((item, index) => (
				<li className='flex flex-col items-center text-sky-900' key={index}>
					<span>{item.icon}</span>
					<Link href={item.link}>
						<a className='uppercase hover:underline mt-3'> {item.title}</a>
					</Link>
				</li>
			))}
		</ul>
	)
}

export default Services
