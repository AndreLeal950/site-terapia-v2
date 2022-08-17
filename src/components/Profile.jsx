import React from 'react'
import { Flex, Box, Heading, Text } from '@chakra-ui/layout'


const Profile = () => {

   
    

  return (
      <Flex w='100%'
            maxWidth={{base: "100vh", md: "130vh", lg: "130vh", xl: "130vh"}}>
          <Box alignSelf="center" w='100%' bg='gray.200' borderRadius='10' px="10" py="38">
              <Heading fontWeight='semibold' color='cyan.500'>
                  <Text fontSize='1.15rem' color='gray.400'>Experiência no tratamento de traumas, síndrome do pânico, Ansiedade, Depressão e todos os demais tipos de sofrimento.</Text>
              </Heading>
              
          </Box>
    </Flex>
  )
}

export default Profile