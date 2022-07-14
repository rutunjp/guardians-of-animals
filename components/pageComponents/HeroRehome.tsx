import Link from 'next/link'
import {
  Stack,
  Image,
  VStack,
  Heading,
  Container,
  Button,
} from '@chakra-ui/react'
const HeroRehome = () => {
  return (
    <Stack
      direction={['column', 'row']}
      justify="center"
      paddingTop={'5rem'}
      margin={'auto'}
      maxW={'80%'}
    >
      <Image src="/images/rehome.jpg" maxW={['300px', '500px']} alt="rehome" />
      <VStack justifyContent="center" gap={3} alignContent="center">
        <Heading as="h2" size="lg">
          Rehome your Pet
        </Heading>
        <Container>
          Has your situation changed? Do you want to rehome your Pet? We will
          help to do it, ETHICALLY and SYSTEMATICALLY
        </Container>
        <Link href="/blog">
          <Button bg="#1B2E35" color="whiteAlpha.900" variant="solid">
            Learn More
          </Button>
        </Link>
      </VStack>
    </Stack>
  )
}
export default HeroRehome
