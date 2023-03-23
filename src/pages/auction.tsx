import { ReactElement } from 'react'
import MainLayout from "@/layouts/MainLayout";
import NftAuction from '@/containers/NftAuction'

const Page = () => <NftAuction />

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  );
};

export default Page
