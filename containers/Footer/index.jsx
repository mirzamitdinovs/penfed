import footerData from 'data/footer.data'
import Link from 'next/link'
const Footer = () => {
	return (
		<div className='bg-sky-900 text-white px-20 py-10 '>
			<div className=' grid grid-cols-4 border-b-2 pb-5'>
				<ul>
					{footerData.links.map((item, index) => (
						<li className='mb-5' key={index}>
							<Link href={item.url}>
								<a>{item.title}</a>
							</Link>
						</li>
					))}
				</ul>
				<div className='opacity-60 border-x-2 px-10 col-span-2'>
					<p className='mb-5'>
						This credit union is federally insured by the National Credit Union
						Administration. Rates are current as of October 2022 unless
						otherwise noted and are subject to change.
					</p>
					<ul>
						<li>APY = Annual Percentage Yield</li>
						<li>APR = Annual Percentage Rate</li>
					</ul>
				</div>

				<ul className='flex justify-evenly w-full '>
					{footerData.socialLinks.map((item, index) => (
						<li
							className='border-2 border-white  w-10 h-10 flex justify-center items-center rounded-lg'
							key={index}>
							<a>
								<i className={`fa-brands ${item.icon} text-lg `}> </i>
							</a>
						</li>
					))}
				</ul>
			</div>

			<div className='mt-10 opacity-60'>
				<p className='pb-5'>©2022 Pentagon Federal Credit Union</p>
				<ul className='flex justify-between '>
					{footerData.bottomLinks.map((item, index) => (
						<li key={index}>
							<Link href={item.url}>
								<a>{item.title}</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Footer
