import React from 'react'
import { Text } from '@chakra-ui/layout'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  useDisclosure,
  useMediaQuery
} from '@chakra-ui/react'

import About from './About'

function Sobre() {
    const { isNotSmallerScreen } = useMediaQuery("(min-width:500px)");
    const { isOpen, onOpen, onClose } = useDisclosure()
    
  return (
    <>
  
   <Image position='relative' alignSelf='center' 
           mr='80px'
           borderRadius='20%'
           bgColor='transparent' 
           boxSize='180px' src= {require('../img/terapeuta3.png')}>
    </Image> 
      <Button
        fontWeight='semibold'
        fontSize='1.3rem'
        mt={6} w={isNotSmallerScreen ? '0%' : '50%'}
        bgGradient="linear(to-r, teal.300, green.500, yellow.200)"
        onClick={onOpen}>Formação</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
                  <ModalHeader fontSize="1.5rem" fontWeight="semibold">Minha Formação:</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{ <About/>}</Text>
          </ModalBody>

          <ModalFooter>
            <Button bgGradient="linear(to-r, teal.300, green.500, yellow.200)" mr={1} onClick={onClose}>
               <Image alignSelf='center'
                 borderRadius='5%'
                  bgColor='transparent' 
                  mr='1rem'
                  w='30px' h='30px' src= {require('../img/lotus_button.png')}>
                </Image>
              Fechar
            </Button>
          
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Sobre