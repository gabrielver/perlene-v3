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
        <link rel="icon" href="/logo.svg" />
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
