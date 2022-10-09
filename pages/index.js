import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { ArchiveBoxIcon } from '@heroicons/react/24/outline';
import servicesData from '../data/services.data';
import Hero from 'containers/Hero';
import Services from 'containers/Services';
import News from 'containers/News';
import Articles from 'containers/Articles';
import HelpContainer from 'containers/Help';
export default function HomePage() {
	return (
		<div className={''}>
			<Hero />
			<Services />
			<News />
			<Articles />
			<HelpContainer />



		</div>
	);
}
