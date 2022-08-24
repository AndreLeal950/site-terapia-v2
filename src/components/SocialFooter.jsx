import React from 'react'
import { HStack } from '@chakra-ui/layout'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Icon, Box, Text } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode'
import { BsFillGeoAltFill } from "react-icons/bs";




const SocialFooter = () => {
  
  const {colorMode} = useColorMode();
  
  const isDark = colorMode === 'dark'

  return (
    <>
      <HStack spacing={12}>
          <Icon as={FaFacebookF} boxSize='4' target='blank'
            onClick={() =>
            window.open('https://www.facebook.com/silvana.leal.37')} />
          
          <Icon as={FaInstagram} boxSize='4' target='blank'
            onClick={() =>
            window.open('https://www.instagram.com/silvanaleal.terapeuta')}/>
          
          <Icon as={FaWhatsapp} boxSize='4' target='blank'
            onClick={() =>
            window.open('https://api.whatsapp.com/send?phone=5591992851178')}/>
          
          <Icon as={BsFillGeoAltFill} boxSize='4' target='blank'
            onClick={() =>
            window.open('https://goo.gl/maps/QsA7eYgz3S4wpezm9')}/>
            <br/><br/>
      </HStack>  
      <HStack spacing={12}>
        <Text mt='-2rem' ml='-7.5rem' fontSize={'0.7rem'}>facebook</Text>
      </HStack>
      <HStack >
        <Text mt='-3rem' ml='-3.6rem' fontSize={'0.7rem'}>instagram</Text>
      </HStack>
      <HStack >
        <Text mt='-4rem' ml='3.9rem' fontSize={'0.7rem'}>whatsapp</Text>
      </HStack>
      <HStack >
        <Text mt='-5rem' ml='12rem' fontSize={'0.7rem'}>localização</Text>
      </HStack>
      
        <Box w='310px' borderRadius={'1rem'} textAlign={'center'} fontSize={'0.7rem'} bgColor={isDark ? "gray.600" : "gray.200"} > 
          <Text color={isDark ? "gray.200" : "gray.600"} >Desenvolvedor Responsável: André Leal - 91-99184-9107 </Text>
        </Box>
    </>
  )
}

export default SocialFooter