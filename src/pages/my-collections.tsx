import { ReactElement } from 'react'
import MyCollections from '@/containers/Collections/my'
import MainLayout from "@/layouts/MainLayout";

const Page = () => <MyCollections />

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  );
};

export default Page
