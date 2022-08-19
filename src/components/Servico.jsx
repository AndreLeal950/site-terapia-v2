import React from 'react'
import { Button, useDisclosure, Image, UnorderedList, ListItem } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode'

import {
  AlertDialog,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Text
} from '@chakra-ui/react'

function Servico() {
  const { isOpen, onOpen, onClose } = useDisclosure()
   const {colorMode} = useColorMode();
  const isDark = colorMode === 'dark'
  const cancelRef = React.useRef()

  return (
    <>
      <Button 
       fontWeight='semibold'
       fontSize='1.3rem'
       mt={6} w={'50%'} 
       bgGradient="linear(to-r, teal.300, green.500, yellow.200)"
       onClick={onOpen}>
        Serviços
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay >
          <AlertDialogContent  >
            <AlertDialogHeader
              fontSize="1.5rem"
              textAlign='center'
              fontWeight='semibold'
              w='100%'
              bgGradient="linear(to-r, teal.300, green.500, yellow.200)"
              >
              Serviços:
            </AlertDialogHeader>
            <Text m='0.3rem' fontWeight='semibold' color={isDark ? "gray.200" : "gray.600"}>
              - Psicanálise Clínica On-line
            </Text>
            <Text m='0.3rem' fontWeight='semibold' color={isDark ? "gray.200" : "gray.600"}>
              - Clínica Psicanalítica para Adultos
            </Text>
            <Text m='0.3rem' fontWeight='semibold' color={isDark ? "gray.200" : "gray.600"}>
              - Clínica Psicanalítica para Adolescentes
            </Text>
            <Text m='0.3rem' fontWeight='semibold' color={isDark ? "gray.200" : "gray.600"}>
              - Clínica Psicanalítica para Crianças
            </Text>
            <Text m='0.3rem' fontWeight='semibold' color={isDark ? "gray.200" : "gray.600"}>
              - Terapias Integrativas e Complementares:
            </Text>
            <UnorderedList color={isDark ? "gray.200" : "gray.600"} paddingLeft={'1.5rem'} mr='-1rem'>
              <ListItem>Reiki</ListItem>
              <ListItem>Auriculoterapia</ListItem>
              <ListItem>Cromoterapia</ListItem>
              <ListItem>Hipnose Clínica Terapeutica</ListItem>
              <ListItem>Coaching Integrativo Sistêmico Profissional</ListItem>
            </UnorderedList>
             <Text m='0.3rem' fontWeight='semibold' color={isDark ? "gray.200" : "gray.600"}>
              - Tratamento e Acompanhamento:
            </Text>
            <UnorderedList color={isDark ? "gray.200" : "gray.600"} paddingLeft={'1.5rem'} mr='-1rem'>
              <ListItem>Depressão</ListItem>
              <ListItem>Ansiedade</ListItem>
              <ListItem>Síndrome do Estresse Pós-traumático</ListItem>
              <ListItem>Fobias</ListItem>
              <ListItem>Ataque de Pânico</ListItem>
              <ListItem>Transtorno Alimentar</ListItem>
              <ListItem>Baixa Auto-estima</ListItem>
              <ListItem>Problema de Relacionamento <br/>(Pessoal e Interpessoal)</ListItem>
              <ListItem>Insônia</ListItem>
              <ListItem>Pensamentos Suicidas</ListItem>
              <ListItem>Vícios</ListItem>
           </UnorderedList>

            <AlertDialogFooter>
              <Button bgGradient="linear(to-r, teal.300, green.500, yellow.200)" onClick={() =>
                window.open('https://api.whatsapp.com/send?phone=5591992851178')} ml={3}>
                <Image alignSelf='center'
                 borderRadius='5%'
                  bgColor='transparent' 
                  mr='1rem'
                  w='30px' h='30px' src= {require('../img/lotus_button.png')}>
                </Image>
                Marque Sua Consulta
              </Button>
              <Button ref={cancelRef} onClick={onClose}>
                Fechar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default Servico