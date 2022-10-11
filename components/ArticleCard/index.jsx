import Image from 'next/image';
import Link from 'next/link';
const ArticleCard = ({ id, title, image }) => {
	return (
		<div className='bg-white'>
			<div>
				<img className='w-full h-full' src={image} />
			</div>
			<div className='p-5 h-32'>
				<Link href={`/articles/${id}`}>
					<a className='text-xl '>{title}</a>
				</Link>
			</div>
		</div>
	);
};

export default ArticleCard;
