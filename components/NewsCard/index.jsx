import Button from 'components/Button'

const NewsCard = ({ item }) => {
	return (
		<div
			className='h-full w-full pt-32 flex flex-col justify-end text-white p-5 bg-no-repeat bg-cover'
			style={{
				backgroundImage: `url(${item.background_image.src})`,
			}}>
			<h3 className='text-2xl mb-2'>{item.title}</h3>
			<p className='opacity-90 text-sm'>{item.text}</p>
			<div className='mt-2'>
				<Button
					text={item.button_text}
					clbFunc={() => console.log('text')}
					color={'white'}
				/>
			</div>
		</div>
	)
}

export default NewsCard
