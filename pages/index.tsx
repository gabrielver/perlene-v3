import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'


const Home: NextPage = () => {
  return (
    <div className='home'>
      <Head>
        <title>Per'lène</title>
        {/* <link rel="icon" href="/logo.svg" /> */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>

      </Head>
   {/* Header */}
   <Header/>
    <section id='hero' className='snap-start'>
   <Hero/>
   </section>
   <section id='project' className='snap-start'>
   <Projects/>
   </section>
   <section id='about' className='snap-center'>
   <About/>
   </section>
   
   {/* <Link href='#hero'>
    <footer className='sticky bottom-5 w-full cursor-pointer'>
      <div className='flex items-center justify-center'>
        <img className='h-10 w-10 rounded-full filter grayscale jover:grayscale-0' src="https://i.imgur.com/e2yvD6A.png" alt="" />
      </div>
    </footer>
    </Link> */}
    </div>
  )
}

export default Home
