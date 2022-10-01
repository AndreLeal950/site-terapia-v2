import React from 'react'
import { Link } from '@chakra-ui/react'

import {FaPhoneSquareAlt } from "react-icons/fa";
import {GrMail } from "react-icons/gr";
import {BsFillGeoAltFill } from "react-icons/bs";

import { Flex, Box, Heading, Text } from '@chakra-ui/layout'
import '../img/clickaqui.png'



const Contato = () => {

     

  return (
    <>
      <Flex w='100%'
        maxWidth={{base: "100vh", md: "130vh", lg: "130vh", xl: "130vh"}}>
        <Box       
          alignSelf="center"
          w='100%' bg='gray.200'
          borderRadius='10'
          px="5" py="30"
          mt='-2.5rem'>
          <Heading fontWeight='normal' color='green.500'>
          <Text fontSize='1.2rem' color='green.500' fontWeight='bold' mt={'-1.5rem'} mb={'-1.7rem'}>Atendimento On-line e Presencial</Text><br/>
           <Link href="tel:+5591992851178"><FaPhoneSquareAlt size={'1.5rem'} /><Text ml='2.5rem' mt='-1.3rem' mb={'0.2rem'} fontSize={'1rem'} fontWeight={'semibold'}>(91) 99285-1178</Text></Link>
            <Link href="mailto:silvanaleal950.terapeuta@gmail.com"><GrMail size={'1.5rem'} /></Link>
            <Link href="mailto:silvanaleal950.terapeuta@gmail.com"><Text ml='2.5rem' mt='-1.2rem' mb={'0.2rem'} fontSize={'1rem'} fontWeight={'semibold'}>E-mail :</Text></Link>
            <Link href="mailto:silvanaleal950.terapeuta@gmail.com"><Text ml='0.1rem' mb={'0.2rem'} fontSize={'1rem'} fontWeight={'semibold'}>silvanaleal950.terapeuta@gmail.com</Text></Link>
            <Link href="https://goo.gl/maps/QsA7eYgz3S4wpezm9"><BsFillGeoAltFill mb='1.2rem' size={'1.5rem'}/></Link><Text ml='2.5rem' mt='-1.2rem' fontSize={'1rem'} fontWeight={'semibold'}>Endereço :</Text>
           <Link href="https://goo.gl/maps/QsA7eYgz3S4wpezm9"><Text ml='2.5rem' fontSize={'1rem'} fontWeight={'semibold'} >Trav.Maurití,639 - Sl: 7 </Text></Link>
           <Link href="https://goo.gl/maps/QsA7eYgz3S4wpezm9"><Text ml='2.5rem' fontSize={'1rem'} fontWeight={'semibold'} >Belém - Pará</Text></Link>
           </Heading>
           </Box>
      </Flex>
      </>
  )
}

export default Contato