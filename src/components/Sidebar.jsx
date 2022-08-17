import React from 'react'
import { Drawer, DrawerFooter, DrawerHeader,
  DrawerOverlay, DrawerContent, DrawerCloseButton,
  useDisclosure, Button, Image, Text, Box, List,
  ListItem, ListIcon, OrderedList, UnorderedList,
} from '@chakra-ui/react'


function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const btnRef = React.useRef()

   

  return (
    <>
      <Button ref={btnRef}  mt={6} w={'50%'} /*colorScheme='blue' */colorScheme='teal' onClick={onOpen}>
        Sobre Mim:
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
         <Image position='relative' alignSelf='center' 
           mr='80px'
           borderRadius='20%'
           bgColor='transparent' 
           boxSize='150px' src= {require('../img/terapeuta3.png')}>
        </Image> 
                </DrawerHeader>
            <Box  m='0.5rem' fontSize="1rem" >
            <Text textAlign='flex-start'fontWeight='normal'  w='90%' bg='gray.200' borderRadius='10' >Silvana Gregório Leal</Text> 
            <br/>
                      <Text  fontWeight="normal" > Nascida na cidade de Belém do Estado no Pará.
                          A Silvana Leal é formada pela Universidade da Amazõnia(UNAMA).</Text> 
            <br/>
                      <Text fontWeight="normal" > Especialista em Psicanálise Clínica,
                          formada pelo Centro Universitário de Tecnologia de Curitiba.</Text> 
            <br/>
            <Text fontWeight="normal" > Atualmente a Silvana Leal atua em Consultório Particular como:
             </Text>  <br/>
                <UnorderedList>
                  <ListItem>Psicanalista Clínica</ListItem>
                  <ListItem>Terapeuta Holística</ListItem>
                  <ListItem>Terapeuta Integrativa</ListItem>
                  <ListItem>Auriculoterapeuta</ListItem>
                  <ListItem>Hipnoterapeuta</ListItem>
                </UnorderedList>
                   <br/>
            </Box>
           <DrawerFooter>
             <Button colorScheme='blue' onClick={onClose}>Fechar</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Sidebar