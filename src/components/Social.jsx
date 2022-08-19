import React from 'react'
import { HStack } from '@chakra-ui/layout'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Icon } from '@chakra-ui/react'
import { BsFillGeoAltFill } from "react-icons/bs";

const Social = () => {
  return (
      <HStack spacing={10}>
      <Icon
        title='facebook'
        as={FaFacebookF}
        boxSize='6'
        target='blank'
        onClick={() =>
         window.open('https://www.facebook.com/silvana.leal.37')}></Icon>
          
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
    </HStack>  
  )
}

export default Social