import Button from 'components/Button'

const HelpCard = ({ item, index }) => {
	console.log('key', index)
	return (
		<div className='grid grid-cols-3 mb-10 shadow-lg rounded-lg overflow-hidden'>
			<div>
				<img className='w-full h-[350px]' src={item.image} />
			</div>
			<div
				className={`col-span-2 p-10 flex flex-col order-${
					index % 2 === 0 ? 'last' : 'first'
				}`}>
				<h2 className='text-center text-2xl font-bold mb-5'>{item.title}</h2>
				<p className=''>{item.text}</p>
				<div className='mt-auto border-t-2 pt-5 border-t-gray-200'>
					<Button text={'Locate ATM'} color={'primary'} />
				</div>
			</div>
		</div>
	)
}

export default HelpCard
