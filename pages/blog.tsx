import { Image, Heading, VStack, Container } from '@chakra-ui/react'
import { useEffect } from 'react'
import Navbar from '../components/pageComponents/Navbar'
import React from 'react'
import Footer from '../components/pageComponents/Footer'
const Blog = () => {
  useEffect(() => {
    window.scrollTo(22, 2)
  })
  return (
    <>
      <Navbar />
      <VStack>
        <Image src="/images/french.jpg" maxW="65%" alt="blog-image" />
        <Heading as="h1" size="xl">
          A guide to feeding Strays
        </Heading>
        <Container opacity="0.7">
          Brief explainantion on the Blog/Article
        </Container>
        <Container>
          A single-judge Bench of the High Court had observed that animals have
          a right under the law to be treated with compassion, respect, and
          dignity, and that their protection is the “moral responsibility of
          each and every citizen, including the governmental and
          non-governmental organisations”. 2021 The order by a single-judge
          Bench of Justice J R Midha read: “Community dogs (stray/street dogs)
          have the right to food and citizens have the right to feed community
          dogs but in exercising this right, care and caution should be taken to
          ensure that it does not impinge upon the rights of others or cause any
          harm, hindrance, harassment and nuisance to other individuals or
          members of the society.” The order said that “It shall be the duty and
          responsibility of the RWA or Municipal Corporation and all Government
          authorities including…Police to provide all assistance and ensure that
          no hindrance is caused to the caregivers or feeders of community
          dogs…”
        </Container>
      </VStack>
      <Footer />
    </>
  )
}

export default Blog
