// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import articlesData from 'data/articles.data';
export default function handler(req, res) {
	const { id } = req.query;
	res.status(200).json(articlesData.find((item) => item.id == id));
}
