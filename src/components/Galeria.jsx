import React from 'react'
import { Button, useDisclosure, Image } from '@chakra-ui/react'


import {
  AlertDialog,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay
  
} from '@chakra-ui/react'

function Galeria() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  return (
    <>
      <Button 
       fontWeight='semibold'
       fontSize='1.3rem'
       mt={6} w={'50%'} 
       bgGradient="linear(to-r, teal.300, green.500, yellow.200)"
       onClick={onOpen}>
        Galeria
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
              Minha Galeria:
            </AlertDialogHeader>
                <Image src={require('../img/gal1.jpeg')}></Image><br/>
                <Image src={require('../img/gal2.jpeg')}></Image><br/>
                <Image src={require('../img/gal3.jpeg')}></Image><br/>
                <Image src={require('../img/gal4.jpeg')}></Image><br/>
                <Image src={require('../img/gal5.jpeg')}></Image><br/>
                <Image src={require('../img/gal6.jpeg')}></Image><br/>
                <Image src={require('../img/gal7.jpeg')}></Image><br/>
                <Image src={require('../img/gal8.jpeg')}></Image><br/>
                <Image src={require('../img/gal9.jpeg')}></Image><br/>
                <Image src={require('../img/gal10.jpeg')}></Image><br/>
                <Image src={require('../img/gal11.jpeg')}></Image><br/>
                <Image src={require('../img/gal12.jpeg')}></Image><br/>
                <Image src={require('../img/gal13.jpeg')}></Image><br/>
            <AlertDialogFooter>
              <Button
                bgGradient="linear(to-r, teal.300, green.500, yellow.200)"
                ref={cancelRef}
                onClick={onClose}>
                Fechar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default Galeria