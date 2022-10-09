import ArticleCard from 'components/ArticleCard'
import Button from 'components/Button'
import Title from 'components/Title'
import articlesData from 'data/articles.data'

const Articles = () => {
	return (
		<div className='p-20 bg-gray-100'>
			<Title title={'Featured Articles'} />
			<div className='grid grid-cols-3 gap-4'>
				{articlesData.map((item, index) => (
					<ArticleCard
						key={index}
						id={item.id}
						title={item.title}
						image={item.avatar}
					/>
				))}
			</div>
			<div className='flex justify-center mt-10 '>
				<Button
					text={'See All Articicals'}
					clbFunc={() => console.log('text')}
					color={'primary'}
				/>
			</div>
		</div>
	)
}

export default Articles
