const Button = ({ text, clbFunc, color }) => {
	const colors = {
		primary: 'bg-blue-500 text-white',
		secondary: 'bg-blue-900 text-white',
		white:
			'bg-white text-blue-400 hover:text-gray-600 border-2 border-blue-300',
		green: 'bg-green-500 hover:bg-green-700 text-white',
	}
	return (
		<button
			className={`py-3 px-5 rounded-lg hover:scale-110 duration-150 ${colors[color]}`}
			onClick={clbFunc}>
			{text}
		</button>
	)
}

export default Button
