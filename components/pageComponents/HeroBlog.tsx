import React, { useEffect } from 'react'
import { MdOutlineChecklist } from 'react-icons/md'
import { GiSittingDog } from 'react-icons/gi'
import { Button, Flex, VStack, Heading } from '@chakra-ui/react'
import Link from 'next/link'
const HeroBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <Flex bgColor="#CBD5E0" alignItems="center" flexDirection="column" my="1em">
      <Heading as="h3" size="lg">
        ARE YOU READY FOR A DOG?
      </Heading>
      <Flex
        flexDirection={['column', 'row']}
        flexWrap="wrap"
        padding={['5', '7']}
      >
        <VStack paddingX={['2em']} marginY="1.5em">
          <MdOutlineChecklist size={64} />
          <Heading fontWeight="medium" as="h3" size="sm">
            ADOPTION CHECKLIST
          </Heading>
          <Link href="/blog">
            <Button bg="#1B2E35" color="whiteAlpha.900" variant="solid">
              Learn More
            </Button>
          </Link>
        </VStack>
        <VStack paddingX={['2em']} marginY="1.5em">
          <GiSittingDog size={64} />
          <Heading fontWeight="medium" as="h3" size="sm">
            FINDING THE RIGHT PET FOR YOU
          </Heading>
          <Link href="/blog">
            <Button bg="#1B2E35" color="whiteAlpha.900" variant="solid">
              Learn More
            </Button>
          </Link>
        </VStack>
        <VStack paddingX={['2em']} marginY="1.5em">
          <MdOutlineChecklist size={64} />
          <Heading fontWeight="medium" as="h3" size="sm">
            DOG OWNER&apos;S RESOURCES
          </Heading>
          <Link href="/blog">
            <Button bg="#1B2E35" color="whiteAlpha.900" variant="solid">
              Learn More
            </Button>
          </Link>
        </VStack>
      </Flex>
    </Flex>
  )
}

export default HeroBlog
