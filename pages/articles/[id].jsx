import { useRouter } from 'next/router';
import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json());

const BlogPage = () => {
	const {
		query: { id },
	} = useRouter();
	const { data } = useSWR(`/api/v1/articles/${id}`, fetcher);

	if (!data) return <h3>Loading...</h3>;
	return (
		<>
			<div className='p-20 bg-gray-100'>
				<div
					className='bg-no-repeat bg-cover'
					style={{
						backgroundImage: `url(${data.image})`,
					}}
				>
					<div className='bg-black bg-opacity-50  '>
						<div className=' py-36 text-white text-center'>
							<h4 className='uppercase text-xl'>{data.category}</h4>
							<h2 className='py-6 text-4xl font-bold w-1/2 mx-auto leading-relaxed'>
								{data.title}
							</h2>
							<div className='flex justify-center'>
								<div className='h-2 bg-blue-500 w-36'></div>
							</div>
							<p className='mt-5 uppercase text-lg'>
								Expected Read Time:
								<br /> {data.duration} MINUTES
							</p>
						</div>
					</div>
				</div>
				<div className='bg-white p-10'>
					<p className='text-gray-900 italic'>{data.publish_date}</p>
					<div
						className='leading-8'
						dangerouslySetInnerHTML={{ __html: data.body }}
					/>
				</div>
			</div>
			<style>{`
				h1,
				h2,
				h3,
				h4,
				h5,
				h6 {
					font-size: 40px;
					margin: 20px 0;
					line-height: 52px;
				}
				h1 {
					font-size: 52px;
				}
				h2 {
					font-size: 46px;
				}
				h4 {
					font-size: 36px;
				}
				h5 {
					font-size: 28px;
				}
				h6 {
					font-size: 24px;
				}
				ol,
				ul {
					list-style: disk;
					padding-left: 20px;
				}

			`}</style>
		</>
	);
};

export default BlogPage;
