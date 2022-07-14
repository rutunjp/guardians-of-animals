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

// import { ReactElement } from 'react'
// import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react'
// import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc'

// interface FeatureProps {
//   title: string
//   text: string
//   icon: ReactElement
// }

// const Feature = ({ title, text, icon }: FeatureProps) => {
//   return (
//     <Stack>
//       <Flex
//         w={16}
//         h={16}
//         align={'center'}
//         justify={'center'}
//         color={'white'}
//         rounded={'full'}
//         bg={'gray.100'}
//         mb={1}
//       >
//         {icon}
//       </Flex>
//       <Text fontWeight={600}>{title}</Text>
//       <Text color={'gray.600'}>{text}</Text>
//     </Stack>
//   )
// }

// export default function SimpleThreeColumns() {
//   return (
//     <Box p={4}>
//       <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
//         <Feature
//           icon={<Icon as={FcAssistant} w={10} h={10} />}
//           title={'Lifetime Support'}
//           text={
//             'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
//           }
//         />
//         <Feature
//           icon={<Icon as={FcDonate} w={10} h={10} />}
//           title={'Unlimited Donations'}
//           text={
//             'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
//           }
//         />
//         <Feature
//           icon={<Icon as={FcInTransit} w={10} h={10}  />}
//           title={'Instant Delivery'}
//           text={
//             'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
//           }
//         />
//       </SimpleGrid>
//     </Box>
//   )
// }
