import NewsCard from 'components/NewsCard'
import newsData from 'data/news.data'
const News = () => {
	return (
		<div className='grid grid-rows-2 grid-flow-col gap-2'>
			{newsData.map((item, index) => (
				<div
					className={`bg-blue-300 h-full w-full ${
						index === 0 || index === 3 ? 'row-span-2' : ''
					}`}
					key={index}>
					<NewsCard item={item} />
				</div>
			))}
		</div>
	)
}

export default News
