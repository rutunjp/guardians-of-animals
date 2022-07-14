import { Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import CTACard from '../components/CtaCard'
const GetInvolved = () => {
  return (
    <Stack align="center" paddingTop={'5rem'}>
      <Heading>GET INVOLVED AT K9</Heading>
      <Stack spacing={['2.5em', '3em']} direction={['column', 'row']}>
        <CTACard src="/images/sponsor.webp" heading="Sponsor" link="/blog" />
        <CTACard src="/images/volunteer.png" heading="Volunteer" link="/blog" />
        <CTACard src="/images/adoption.jpg" heading="Dogwalk" link="/blog" />
      </Stack>
    </Stack>
  )
}

export default GetInvolved
