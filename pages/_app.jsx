import '../styles/globals.css'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/router'
import { ChakraProvider } from '@chakra-ui/react'
function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    // localStorage.setItem('price',"0")
   
  },[])
  return <>
  <ChakraProvider>

  <Component  {...pageProps} />
  </ChakraProvider>

  </>
}

export default MyApp
