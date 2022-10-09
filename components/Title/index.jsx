const Title = ({ title, text }) => {
	return (
		<div className='text-center my-10'>
			<h2 className='font-bold text-3xl '>{title}</h2>
			{text && <p className='text-2xl w-8/12 mx-auto mt-5'> {text}</p>}
		</div>
	)
}

export default Title
