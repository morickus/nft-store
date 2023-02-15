import { ReactElement } from 'react'
import MainLayout from "@/layouts/MainLayout";
import NftPage from '@/containers/NftPage'

const Page = () => <NftPage />

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  );
};

export default Page
