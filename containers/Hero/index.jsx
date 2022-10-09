import { data } from 'autoprefixer'
import Button from 'components/Button'
import { CheckIcon } from '@heroicons/react/24/outline'
import HeroBg from 'public/assets/images/herobg.jpg'
const Hero = () => {
	const data = [
		'3.60% Apy* for 3 years',
		'3.50% Apy* for 2 years',
		'3.40% Apy* for 18 months',
	]
	return (
		<div
			className={`bg-blue-300 text-white py-8 px-16 bg-right-top`}
			style={{
				backgroundImage: `url(${HeroBg.src})`,
			}}>
			<p className='text-xl uppercase border-b-4 border-b-blue-500 pb-3 mb-5 inline-block'>
				Money Market Certificates
			</p>
			<h2 className='text-3xl '> Great rates on certificates, guaranteed</h2>
			<ul className='my-5'>
				{data.map((item, index) => (
					<li className='flex items-center' key={index}>
						<div className='bg-white p-1 w-5 h-5 rounded-full flex justify-center items-center mr-2'>
							<CheckIcon width={10} height={10} className='text-gray-700' />
						</div>
						{item}
					</li>
				))}
			</ul>
			<Button
				text={'Open Now'}
				clbFunc={() => console.log('open now')}
				color={'green'}
			/>
			<p className='my-5 text-sm '>
				*Annual Percentage Yield Does Not apply to IRA certificates.
			</p>
		</div>
	)
}

export default Hero
