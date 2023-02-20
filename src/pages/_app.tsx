import React, { ReactElement, ReactNode } from 'react'
import { AppContextType, AppInitialProps } from 'next/dist/shared/lib/utils'
import { NextPage } from 'next'
import '@/styles/antd.scss'
import '@/styles/globals.scss'
import Head from 'next/head'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppContextType & AppInitialProps & {
  Component: NextPageWithLayout
}

export default function App({Component, pageProps}: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <div>
      <Head>
        <title>NFT store</title>
        <meta name="description" content="NFT store"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </div>
  )
}
