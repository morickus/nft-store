import { ReactElement } from 'react'
import MainLayout from "@/layouts/MainLayout";
import NftTrading from '@/containers/NftTrading'

const Page = () => <NftTrading />

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  );
};

export default Page
