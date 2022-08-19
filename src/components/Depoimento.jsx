import React from 'react'
import { Button, useDisclosure, Image } from '@chakra-ui/react'


import {
  AlertDialog,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay
  
} from '@chakra-ui/react'

function Depoimentos() {
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
        Depoimentos
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
              Depoimetos de Clientes:
            </AlertDialogHeader>
                <Image src={require('../img/dep1.jpeg')}></Image><br/>
                <Image src={require('../img/dep2.jpeg')}></Image><br/>
                <Image src={require('../img/dep3.jpeg')}></Image><br/>
                <Image src={require('../img/dep4.jpeg')}></Image><br/>
                <Image src={require('../img/dep5.jpeg')}></Image><br/>
                <Image src={require('../img/dep6.jpeg')}></Image><br/>
                <Image src={require('../img/dep7.jpeg')}></Image><br/>
                <Image src={require('../img/dep8.jpeg')}></Image><br/>
                <Image src={require('../img/dep9.jpeg')}></Image><br/>
                <Image src={require('../img/dep10.jpeg')}></Image><br/>
                <Image src={require('../img/dep11.jpeg')}></Image><br/>
                <Image src={require('../img/dep12.jpeg')}></Image><br/>
                <Image src={require('../img/dep13.jpeg')}></Image><br/>
                <Image src={require('../img/dep14.jpeg')}></Image><br/>
                <Image src={require('../img/dep15.jpeg')}></Image><br/>
                <Image src={require('../img/dep16.jpeg')}></Image><br/>
                <Image src={require('../img/dep17.jpeg')}></Image><br/>
                <Image src={require('../img/dep18.jpeg')}></Image><br/>
                <Image src={require('../img/dep19.jpeg')}></Image><br/>
                <Image src={require('../img/dep20.jpeg')}></Image><br/>
                <Image src={require('../img/dep21.jpeg')}></Image><br/>
                <Image src={require('../img/dep22.jpeg')}></Image><br/>
                <Image src={require('../img/dep23.jpeg')}></Image><br/>
                <Image src={require('../img/dep24.jpeg')}></Image><br/>
                <Image src={require('../img/dep25.jpeg')}></Image><br/>
                <Image src={require('../img/dep26.jpeg')}></Image><br/>
                <Image src={require('../img/dep27.jpeg')}></Image><br/>
                <Image src={require('../img/dep28.jpeg')}></Image><br/>
                <Image src={require('../img/dep29.jpeg')}></Image><br/>
                <Image src={require('../img/dep30.jpeg')}></Image><br/>
                <Image src={require('../img/dep31.jpeg')}></Image><br/>
                <Image src={require('../img/dep32.jpeg')}></Image><br/>
                
            <AlertDialogFooter>
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

export default Depoimentos