import { ReactElement } from 'react'
import CollectionCreate from '@/containers/CollectionCreate'
import MainLayout from '@/layouts/MainLayout'

const Page = () => <CollectionCreate />

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  );
};

export default Page
