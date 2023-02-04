import { ReactElement } from 'react'
import MainLayout from "@/layouts/MainLayout";
import Users from '@/containers/Users'

const UsersPage = () => <Users />

UsersPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  );
};

export default UsersPage
