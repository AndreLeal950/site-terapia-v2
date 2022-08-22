import React from 'react'

import {FaPhoneSquareAlt } from "react-icons/fa";
import {GrMail } from "react-icons/gr";
import {BsFillGeoAltFill } from "react-icons/bs";

import { Flex, Box, Heading, Text } from '@chakra-ui/layout'



const Contato = () => {

     

  return (
    <>
      <Flex w='100%'
        maxWidth={{base: "100vh", md: "130vh", lg: "130vh", xl: "130vh"}}>
        <Box       
          alignSelf="center"
          w='100%' bg='gray.100'
          borderRadius='10'
          px="5" py="30">
          <Heading fontWeight='normal' color='green.500'>
          <Text fontSize='1.2rem' color='green.500' fontWeight='bold' mt={'-1.5rem'} mb={'-1.7rem'}>Atendimento On-line e Presencial</Text><br/>
           <FaPhoneSquareAlt size={'1.5rem'} /><Text ml='2.5rem' mt='-1.3rem' mb={'0.2rem'} fontSize={'1rem'} fontWeight={'semibold'}>(91) 99285-1178</Text>
            <GrMail size={'1.5rem'} /><Text ml='2.5rem' mt='-1.2rem' mb={'0.2rem'} fontSize={'1rem'} fontWeight={'semibold'}>E-mail :</Text>
            <Text ml='0.1rem' mb={'0.2rem'} fontSize={'1rem'} fontWeight={'semibold'}>silvanaleal950.terapeuta@gmail.com</Text>
          <BsFillGeoAltFill mb='1.2rem' size={'1.5rem'}/><Text ml='2.5rem' mt='-1.2rem' fontSize={'1rem'} fontWeight={'semibold'}>Endereço :</Text>
           <Text ml='2.5rem' fontSize={'1rem'} fontWeight={'semibold'}>Trav.Maurití,639 - Sl: 7 </Text>
           <Text ml='2.5rem' fontSize={'1rem'} fontWeight={'semibold'}>Belém - Pará</Text>
            </Heading>
           </Box>
      </Flex>
      </>
  )
}

export default Contato