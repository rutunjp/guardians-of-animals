import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  FormLabel,
  FormControl,
  Input,
  Select,
  FormHelperText,
} from '@chakra-ui/react'
import FormHeroSection from './FormHeroSection'

export default function CallToActionWithVideo() {
  return (
    <Container maxW={'6xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              //   _after={{
              //     content: "''",
              //     width: 'full',
              //     height: '5%',
              //     position: 'absolute',
              //     bottom: 1,
              //     left: 0,
              //     bg: 'red.400',
              //     zIndex: -1,
              //   }}
            >
              Guardians of Animals
            </Text>
            <br />
            <Text as={'span'} color={'yellow.200'}>
              The Art of Compassion. Creative activism for Animals
            </Text>
          </Heading>
          {/* <Text color={'gray.500'}>
            Snippy is a rich coding snippets app that lets you create your own
            code snippets, categorize them, and even sync them in the cloud so
            you can use them anywhere. All that is free!
          </Text> */}
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          >
            <FormHeroSection />
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Image
            alt={'Hero Image'}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={'100%'}
            src={'/images/hero.jpg   '}
          />
        </Flex>
      </Stack>
    </Container>
  )
}
