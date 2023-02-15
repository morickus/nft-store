import { ReactElement } from 'react'
import Collections from '@/containers/Collections'
import MainLayout from "@/layouts/MainLayout";

const Page = () => <Collections />

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  );
};

export default Page
