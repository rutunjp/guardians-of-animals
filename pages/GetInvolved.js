import { Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import CTACard from './CTACard'
const GetInvolved = () => {
  return (
    <Stack align="center">
      <Heading>GET INVOLVED AT K9</Heading>
      <Stack spacing={['2.5em', '3em']} direction={['column', 'row']}>
        <CTACard src="/sponsor.webp" heading="Sponsor" link="/blog"></CTACard>
        <CTACard
          src="/volunteer.png"
          heading="Volunteer"
          link="/blog"
        ></CTACard>
        <CTACard src="/adoption.jpg" heading="Dogwalk" link="/blog"></CTACard>
      </Stack>
    </Stack>
  )
}

export default GetInvolved
