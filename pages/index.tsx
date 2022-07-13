import { ChakraProvider, Img, LightMode } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/pageComponents/Navbar'
import HeroSection from '../components/pageComponents/Hero'
import Footer from '../components/pageComponents/Footer'
import HeroBlog from '../components/pageComponents/HeroBlog'
import HeroRehome from '../components/pageComponents/HeroRehome'
import GetInvolved from '../components/pageComponents/GetInvolved'
const Home: NextPage = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <HeroSection />
      <HeroBlog />
      <HeroRehome />
      <GetInvolved />
      <Footer />
    </ChakraProvider>
  )
}

export default Home
