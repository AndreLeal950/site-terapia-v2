import React from 'react'
import { Drawer, DrawerFooter, DrawerHeader,
  DrawerOverlay, DrawerContent, DrawerCloseButton,
  useDisclosure, Button, Image, Text, Box, Avatar, Wrap, WrapItem
} from '@chakra-ui/react'



function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const btnRef = React.useRef()

   

  return (
    <>
      <Button
        ref={btnRef} mt={6} w={'50%'}
        fontWeight='semibold'
        fontSize='1.3rem'
        bgGradient="linear(to-r, teal.300, green.500, yellow.200)"
        onClick={onOpen}>
        Sobre
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent overflow='scroll'>
          <DrawerCloseButton />
          <DrawerHeader >
              <Wrap>
        <WrapItem>
          <Avatar size='2xl' name='Dan Abrahmov' src={require('../img/terapeuta3.png')} />
    </WrapItem>
    </Wrap>
        </DrawerHeader>
            <Box  m='0.5rem' fontSize="1.2rem" >
            <Text
              fontSize="1.2rem"
              textAlign='center'
              fontWeight='semibold'
              w='100%'
              bgGradient="linear(to-r, teal.300, green.500, yellow.200)"
              >
              Silvana Gregório Leal<br />
              <Text>
                Psicanalista Clínica e Terapeuta Integrativa
                </Text>
              </Text> 
            <br/>
            <Text fontWeight="normal" > Atua como profissional liberal no segmento das Terapias Naturais Integrativas e
              Complementares de Saúde.</Text> 
            <br/>
            <Text fontWeight="normal" > Especializada no desenvolvimento do autoconhecimento, autoestima, autogestão, contribuindo
              com o processo de cura fisica, emocional e mental.</Text> 
            <br/>
            <Text fontWeight="normal" > Proporcionando maior liberdade, autonomia, bem-estar e qualidade de vida
              ao ser humano em todos os sentidos.
            </Text> <br/>


            <Text fontSize="1.2rem"
              textAlign='center'
              fontWeight='semibold' w='100%'
              bgGradient="linear(to-r, teal.300, green.500, yellow.200)"
              borderRadius='10'>
              Missão
              </Text><br/>
            <Text fontWeight="normal" >Atuar com excelência, produzir resultados profissionais que atendam de forma
                eficiente e satisfatória seus clientes, através do serviço de saúde mental, da 
                Psicanálise e das Terapias Integrativas e Complementares. Priorizando a saúde 
                e a vida humana de forma integral, consciente de seu papel social em benefício
                da sociedade.
             </Text><br/>
            <Text
              fontSize="1.2rem"
              textAlign='center'
              fontWeight='semibold'
              w='100%'
              bgGradient="linear(to-r, teal.300, green.500, yellow.200)"
              borderRadius='10'>
              Valor
              </Text><br/>
            <Text fontWeight="normal" >Atuar com Profissionalismo, Ética, Responsabilidade, Eficácia, Respeito, Confiabilidade.
             </Text><br/>
            <Text
              fontSize="1.2rem"
              textAlign='center'
              fontWeight='semibold'
              w='100%'
              bgGradient="linear(to-r, teal.300, green.500, yellow.200)"
              borderRadius='10'>
              Obejtivo
              </Text><br/>
            <Text fontWeight="normal" >Atender as necessidades dos clientes, buscando continuamente contrinuir com a promoção
                da saúde, autoconhecimento, autoformação, bem-estar e otimização da qualidade de vida.
             </Text>
           
             </Box>
           <DrawerFooter>
            <Button bgGradient="linear(to-r, teal.300, green.500, yellow.200)" onClick={onClose}>
                <Image alignSelf='center'
                 borderRadius='5%'
                  bgColor='transparent' 
                  mr='1rem'
                  w='30px' h='30px' src= {require('../img/lotus_button.png')}>
              </Image>
              Fechar</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Sidebar