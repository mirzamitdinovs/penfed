import axios from 'axios';
import ArticleCard from 'components/ArticleCard';
import Button from 'components/Button';
import Title from 'components/Title';
import articlesData from 'data/articles.data';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json());
const Articles = () => {
	const { data } = useSWR('/api/v1/articles', fetcher);
	if (!data) return <h1>Loader...</h1>;
	return (
		<div className='p-20 bg-gray-100'>
			<Title title={'Featured Articles'} />
			<div className='grid grid-cols-3 gap-4'>
				{data.map((item, index) => (
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
	);
};

export default Articles;
