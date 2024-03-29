import { ReactElement } from 'react'
import MainLayout from "@/layouts/MainLayout";
import NftItems from '@/containers/NftItems'

const Page = () => <NftItems />

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  );
};

export default Page
