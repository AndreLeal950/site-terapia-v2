import React from 'react'
import { HStack } from '@chakra-ui/layout'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Icon, Text } from '@chakra-ui/react'
import { BsFillGeoAltFill } from "react-icons/bs";

const Social = () => {
  return (
    <>
      <HStack spacing={10}>
      <Icon
        title='facebook'
        as={FaFacebookF}
        boxSize='6'
        target='blank'
        onClick={() =>
          window.open('https://www.facebook.com/silvana.leal.37')}></Icon><br/>
          
          <Icon as={FaInstagram} boxSize='6' target='blank'
            onClick={() =>
            window.open('https://www.instagram.com/silvanaleal.terapeuta')}/>
          
          <Icon as={FaWhatsapp} boxSize='6' target='blank'
            onClick={() =>
            window.open('https://api.whatsapp.com/send?phone=5591992851178')}/>
          
          <Icon as={BsFillGeoAltFill} boxSize='6' target='blank'
            onClick={() =>
            window.open('https://goo.gl/maps/QsA7eYgz3S4wpezm9')}/>
            <br/><br/><br/>
            
      </HStack >
      <HStack mb="-2rem">
        <Text mt='-2.5rem' ml='-7.5rem' fontSize={'0.7rem'}>facebook</Text>
      </HStack>
      <HStack >
        <Text mt='-3.5rem' ml='-3.7rem' fontSize={'0.7rem'}>instagram</Text>
      </HStack>
      <HStack >
        <Text mt='-4.5rem' ml='3.7rem' fontSize={'0.7rem'}>whatsapp</Text>
      </HStack>
      <HStack >
        <Text mt='-5.5rem' ml='12rem' fontSize={'0.7rem'}>localização</Text>
      </HStack>

    </>  
  )
}

export default Social