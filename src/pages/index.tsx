import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'
import { ReactElement } from 'react';

export default function Home() {
  return (
    <>
      <main className={'main'}>
        <div className={'description'}>
          <h1>hola mundo HOME PAGE</h1>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>src/pages/index.tsx</code>
          </p>
        </div>
      </main>
    </>
  )
}

Home.getLayout = function getLayout( page: ReactElement ) { 
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}