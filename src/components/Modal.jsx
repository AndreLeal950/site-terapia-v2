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
    const { isNotSmallerScreen } = useMediaQuery("(min-width:600px)");
    const { isOpen, onOpen, onClose } = useDisclosure()
    
  return (
    <>
   <Image position='relative' alignSelf='center' 
           mr='80px'
           borderRadius='20%'
           bgColor='transparent' 
           boxSize='180px' src= {require('../img/terapeuta3.png')}>
    </Image> 
          <Button mt={6} w={isNotSmallerScreen ? '40%' : '50%'} colorScheme='blue'  onClick={onOpen}>Formação</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
                  <ModalHeader fontSize="1.5rem" fontWeight="semibold">Minha Formação:</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{ <About/>}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Fechar
            </Button>
            {/* <Button variant='ghost'>Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Sobre