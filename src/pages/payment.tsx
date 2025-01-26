import { NextPage } from 'next';
import { Layout } from '@/components/Layout/Layout';
import  PaymentPage  from '@/screens/Room/components/PetProductList/PaymentPage';

const Payment: NextPage = () => {
    return (
        <Layout>
            <PaymentPage totalAmount={0} />
        </Layout>
    );
};

export default Payment;
