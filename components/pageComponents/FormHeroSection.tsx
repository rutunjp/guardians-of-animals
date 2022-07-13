import React from 'react'
import { FormControl, Select, Button } from '@chakra-ui/react'

const FormHeroSection = () => {
  return (
    <FormControl display={'flex'} gap={'3'}>
      <Select maxW={'fit-content'} id="country" placeholder="Select pet">
        <option>Dog</option>
        <option>Cat</option>
      </Select>
      <Button type="submit">Submit</Button>
    </FormControl>
  )
}

export default FormHeroSection
