import { Layout } from '@/components/Layout/Layout';
import Room from '@/screens/Room/Room';

import { NextPage } from 'next';

// Assume you have a totalAmount here; for example, let's set a default of 1200
const totalAmount = 1200; // You can modify this as needed

const StorePage: NextPage = () => {
    return (
        <Layout>
            <Room />
            
        </Layout>
    );
};

export default StorePage;