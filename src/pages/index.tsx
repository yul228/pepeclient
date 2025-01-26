import {  NextPage } from 'next';
import { Hero, Herounder_first, Herounder_second } from '@/screens/Home/index';
import { Layout } from '@/components/Layout/Layout';


const Index: NextPage = () => {
	return (
		<Layout>
			<Hero />
			<Herounder_first />
			<Herounder_second />
		</Layout>
	);
};


export default Index;
