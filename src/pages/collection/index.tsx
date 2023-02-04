import { ReactElement } from 'react'
import Collections from '@/containers/Collections'
import MainLayout from "@/layouts/MainLayout";

const CollectionsPage = () => <Collections />

CollectionsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  );
};

export default CollectionsPage
