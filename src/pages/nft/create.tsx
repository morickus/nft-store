import { ReactElement } from 'react'
import NftCreate from '@/containers/NftCreate'
import MainLayout from '@/layouts/MainLayout'

const Page = () => <NftCreate />

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  );
};

export default Page
