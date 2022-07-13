import { VStack, Image, Heading, Button } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'
import { UrlObject } from 'url'

const CTACard = (props: {
  src: string | undefined
  heading:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
  link: string | UrlObject
}) => {
  return (
    <VStack>
      <Image
        maxHeight="250px"
        src={props.src}
        maxWidth={['18rem', '25rem']}
        alt={'img'}
      ></Image>
      <Heading as="h2" size="lg">
        {props.heading}
      </Heading>
      <Link href={props.link}>
        <Button bg="#1B2E35" color="whiteAlpha.900" variant="solid">
          Learn More
        </Button>
      </Link>
    </VStack>
  )
}
CTACard.propTypes = {
  props: PropTypes.any,
  src: PropTypes.string,
  heading: PropTypes.string,
  link: PropTypes.string,
}
export default CTACard
