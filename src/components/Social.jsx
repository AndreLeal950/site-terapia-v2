import React from 'react'
import { HStack } from '@chakra-ui/layout'
import { FaFacebookF, FaGoogle, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Icon } from '@chakra-ui/react'
import { BsFillGeoAltFill, BsFillGeoFill } from "react-icons/bs";

const Social = () => {
  return (
      <HStack spacing={14}>
          <Icon as={FaFacebookF} boxSize='10' target='blank'
            onClick={() =>
            window.open('https://www.facebook.com/silvana.leal.37')} />
          
          <Icon as={FaInstagram} boxSize='10' target='blank'
            onClick={() =>
            window.open('https://www.instagram.com/silvanaleal.terapeuta')}/>
          
          <Icon as={FaWhatsapp} boxSize='10' target='blank'
            onClick={() =>
            window.open('https://api.whatsapp.com/send?phone=5591992851178')}/>
          
          <Icon as={BsFillGeoAltFill} boxSize='10' target='blank'
            onClick={() =>
            window.open('https://goo.gl/maps/QsA7eYgz3S4wpezm9')}/>

    </HStack>  
  )
}

export default Social