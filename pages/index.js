import Head from 'next/head';
import Header from '@/components/layout/Header';
import Carousel from '@/components/Carousel';
import Campaigns from '@/components/Campaigns';



export default function Index() {
  return (
    <>
       <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Header />
      <div>
      <Carousel />
      </div>
      <Campaigns />
    </div>
    </>
    
  )
}
