import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
const colors = {
  pink: {
    50: '#FDE8E9',
    100: '#F9BDC2',
    200: '#F6939A',
    300: '#F26973',
    400: '#EE3F4B',
    500: '#EA1524',
    600: '#BC101D',
    700: '#8D0C16',
    800: '#5E080E',
    900: '#2F0407',
  },
  blue: {
    50: '#EBEEFA',
    100: '#C7D1F0',
    200: '#A2B3E6',
    300: '#7E95DD',
    400: '#5A77D3',
    500: '#3559CA',
    600: '#2B47A1',
    700: '#203579',
    800: '#152451',
    900: '#0B1228',
  },
  yellow: {
    50: '#FFF5E5',
    100: '#FFE3B8',
    200: '#FFD18A',
    300: '#FFBE5C',
    400: '#FFAC2E',
    500: '#FF9A00',
    600: '#CC7B00',
    700: '#995C00',
    800: '#663E00',
    900: '#331F00',
  },
}
import '/styles/globals.css'
const theme = extendTheme({ colors })
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
