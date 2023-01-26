import { ReactElement } from 'react'
import Home from '@/containers/Home'
import MainLayout from "@/layouts/MainLayout";

const HomePage = () => <Home />

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  );
};

export default HomePage
