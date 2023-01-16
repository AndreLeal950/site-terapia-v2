import React from 'react'
import { useColorMode } from '@chakra-ui/color-mode'
import { Button, useMediaQuery, Image, VStack } from '@chakra-ui/react';
import { Flex, Box, Text } from '@chakra-ui/layout'





const Header = () => {
    const {colorMode} = useColorMode();
    
    const isDark = colorMode === 'dark'

    const { isNotSmallerScreen } = useMediaQuery("(min-width:600px)");
    
      
  return (
    <VStack>
             <Image alignSelf='center' mt={isNotSmallerScreen ? "0" : "4"}
                  mb={isNotSmallerScreen ? "0" : "0"}
                  ml={isNotSmallerScreen ? "0" : "2"} mr='20px'
                  borderRadius='5%'
                  bgColor='transparent' 
                  w='190px' h='260px' src= {require('../img/terapeuta.png')}>
            </Image>
            
         
           <Flex direction={isNotSmallerScreen ? "row" : "collumn"}
                spacing="50px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
              
              <Box mt={isNotSmallerScreen ? "0" : "4"} align='flex-start'>
                 <Text fontSize="1.5rem" fontWeight="semibold">Eu sou</Text> 
          <Text
            fontSize="3rem"
            fontWeight="bold"
            bgGradient="linear(to-r, teal.300, green.500, yellow.200)"
            bgClip="text" >Silvana Leal</Text> 
                 <Text 
                 fontSize={'0.9rem'}
                 color={isDark ? "gray.200" : "gray.600"}>
                    Psicanalista Clínica - Terapeuta Integrativa
                 </Text> 
                
          <Button
            w='15rem'
            mt={2} ml='0.8rem'
            fontSize={'1.2rem'}
            bgGradient="linear(to-r, teal.300, green.500, yellow.200)" onClick={() =>
                    window.open('https://api.whatsapp.com/send?phone=5591992851178')}>
                  Entre em Contato
                  
          </Button>
              </Box>

          </Flex>
    </VStack>
  )
}

export default Header