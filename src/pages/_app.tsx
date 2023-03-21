import 'antd/dist/reset.css';
import 'antd/dist/antd.min.css';
import '@/styles/antd.scss';
import '@/styles/globals.scss';
import { ThemeProvider } from '@emotion/react';
import { ConfigProvider } from 'antd';
import { NextPage } from 'next';
import { AppContextType, AppInitialProps } from 'next/dist/shared/lib/utils';
import Head from 'next/head';
import React, { ReactElement, ReactNode, useMemo } from 'react';
import theme from '../../antd-theme.json';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppContextType & AppInitialProps & {
  Component: NextPageWithLayout
}

const createEmotionTheme = () => ({
  ...theme,
  components: new Proxy(theme.components as any, {
    get: (target, name) => {
      if (name in target) {
        return Object.assign({}, theme.token, target[name]);
      }
      return theme.token;
    },
  }),
});

export default function App({Component, pageProps}: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  const emotionTheme = useMemo(createEmotionTheme, []);

  return (
    <div>
      <Head>
        <title>NFT store</title>
        <meta name="description" content="NFT store"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <ConfigProvider theme={theme}>
        <ThemeProvider theme={emotionTheme}>
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </ConfigProvider>
    </div>
  )
}
