
import React from 'react';
import {  NextPage } from 'next';
import  FAQ  from '@/screens/AboutUs/FAQ';
import { Layout } from '@/components/Layout/Layout';

const faqpage: NextPage  = () => {
  return (
    <Layout>
      <FAQ />
    </Layout>
  );
};

export default faqpage;
