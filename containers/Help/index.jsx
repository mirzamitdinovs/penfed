import HelpCard from 'components/HelpCard'
import Title from 'components/Title'
import helpData from 'data/help.data'

const HelpContainer = () => {
	return (
		<div>
			<Title
				title={'Ways We Can Help You Succeed'}
				text={
					'Whether you need to save money, borrow funds, or manage your accounts, we have your back every step of the way.'
				}
			/>
			<div className='px-20'>
				{helpData.map((item, index) => (
					<HelpCard key={index} item={item} index={index} />
				))}
			</div>
		</div>
	)
}

export default HelpContainer
