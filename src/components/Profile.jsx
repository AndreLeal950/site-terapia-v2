import React from 'react'
import { Flex, Box, Heading, Text } from '@chakra-ui/layout'


const Profile = () => {

   
    

  return (
      <Flex w='100%'
            maxWidth={{base: "100vh", md: "130vh", lg: "130vh", xl: "130vh"}}>
          <Box alignSelf="center" px="10" py="38">
              <Heading fontWeight='semibold' color='cyan.500'>
                  <Text fontSize='1.5rem' color='gray.400'>Experiência com vários tipos de síndromes e traumas</Text>
              </Heading>
              
          </Box>
    </Flex>
  )
}

export default Profile