import React from 'react'


import { Flex, Box, Heading, Text } from '@chakra-ui/layout'
import { ListItem, UnorderedList } from '@chakra-ui/react'


const Servico = () => {


    

  return (
    <>
      <Flex w='100%'
        maxWidth={{base: "100vh", md: "130vh", lg: "130vh", xl: "130vh"}}>
        <Box alignSelf="center"
          w='100%' bg='gray.100'
          borderRadius='10'
          px="5" py="30">
              <Heading fontWeight='normal' color='green.500'>
            <Text
              fontSize='1.2rem'
              color='green.500'
              fontWeight='bold'
              mt={'-1.5rem'}
              mb={'-0.5rem'} >Experiência no tratamento:</Text><br />
          
            <UnorderedList fontSize='1.1rem' marginLeft='1rem' mt='-1.5rem' >
                  <ListItem>Depressão</ListItem>
                  <ListItem>Ansiedade</ListItem>
                  <ListItem>Síndrome do Estresse Pós-traumático</ListItem>
                  <ListItem>Autoconhecimento e Elaboração de Traumas</ListItem>
                  <ListItem>Fobias</ListItem>
                  <ListItem>Ataque de Pânico</ListItem>
                  <ListItem>Transtorno Alimentar</ListItem>
                  <ListItem>Baixa Auto-estima</ListItem>
                  <ListItem>Problema de Relacionamento : (Pessoal e Interpessoal)</ListItem>
                  <ListItem>Insônia</ListItem>
                  <ListItem>Pensamentos Suicidas</ListItem>
                  <ListItem>Vícios</ListItem>
                </UnorderedList>
                  
              </Heading>
              
          </Box>
      </Flex>
      </>
  )
}

export default Servico