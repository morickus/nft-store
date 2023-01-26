import React, { ReactElement, ReactNode } from 'react'
import { AppContextType, AppInitialProps } from 'next/dist/shared/lib/utils'
import { NextPage } from 'next'
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
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </div>
  )
}
