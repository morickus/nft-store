import { ReactElement } from 'react'
import MainLayout from "@/layouts/MainLayout";
import Users from '@/containers/Users'

const Page = () => <Users />

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  );
};

export default Page
