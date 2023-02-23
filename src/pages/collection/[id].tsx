import { ReactElement } from 'react'
import MainLayout from '@/layouts/MainLayout'
import CollectionPage from '@/containers/CollectionPage'

const Page = () => <CollectionPage />

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  );
};

export default Page
