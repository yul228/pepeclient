import { Layout } from '@/components/Layout/Layout';
import Room from '@/screens/Room/Room';

import { NextPage } from 'next';




const StorePage: NextPage = () => {
    return (
        <Layout>
            <Room />
            
        </Layout>
    );
};

export default StorePage;