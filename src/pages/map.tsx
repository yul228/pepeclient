
import { NextPage } from 'next';
import { Layout } from '@/components/Layout/Layout';
import  MyMap  from '@/components/MyMap/MyMap';

const MapPage: NextPage = () => {
  return (
    <Layout>
      <MyMap />
    </Layout>
  );
};

export default MapPage;