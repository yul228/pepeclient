
import  PetProductList  from './components/PetProductList/PetProductList'; 
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';
import styles from './Room.module.scss';

const Room: React.FC = () => {
	const {  } = useRouter();

	useEffect(() => {
		const script = document.createElement('script');
		script.src = '/player.js';
		document.body.appendChild(script);

		return () => {
			script.remove();
		};
	}, []);

	return (
		<section className={styles.content}>
			<Head>
				<title>Магазин товаров для животных</title>
				<meta name="description" content="Онлайн магазин с товарами для животных" />
			</Head>
			
			<div className={styles.left}>
				<PetProductList />
			</div>
			
		</section>
	);
};

export default Room;