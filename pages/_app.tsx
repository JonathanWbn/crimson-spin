import './globals.css'

import Head from 'next/head'

interface AppProps {
  Component: React.FunctionComponent
  pageProps: object
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pick A Crimsee</title>
        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css?family=Inconsolata:400" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
