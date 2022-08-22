import React from 'react'
import { Stack, Flex, Box, Text } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/react';

const About = () => {
  const { isNotSmallerScreen } = useMediaQuery("(min-width:600px)");


  return (
    <Stack>
      <Flex direction={"collumn"}
        spacing="50px" p={isNotSmallerScreen ? "30" : "0"}
        alignSelf="flex-start">

        <Box mt={isNotSmallerScreen ? "0" : "4"} color='gray.900' align='start' w='100%' bg='gray.100' borderRadius='10'  >
          <Text fontSize="1.3rem"
            ml={'25%'}
            textAlign='center'
            fontWeight='normal' w='50%'
            bgGradient="linear(to-r, teal.300, green.500, yellow.200)"
            borderRadius='10' >Formação :</Text>

          <Text fontSize="1rem" fontWeight="normal" >* Graduada em Serviço Social,
            pela Universidade da Amazônia (UNAMA).</Text>
          <br />
          <Text fontSize="1rem" fontWeight="normal" >* Pós-Graduada em Serviços Sociais
            e Práticas em Saúde Básica e Hospitalar, pela Escola Superior da Amazônia.
          </Text>
          <br />
          <Text fontSize="1rem" fontWeight="normal" >* Pós-Graduada em Psicanálise Clínica e Intervenções Clínicas,
            pelo Centro Universitário de Tecnologia de Curitiba.</Text>
          <br />
          <Text fontSize="1.3rem" fontWeight='normal'   ml={'25%'} textAlign='center' w='50%' bgGradient="linear(to-r, teal.300, green.500, yellow.200)" borderRadius='10'>Cursos :</Text>
          <br />
          <Text fontSize="1rem" fontWeight="normal" >* Atendimento Analítico com Crianças, Teroria e Prática,
            pelo Instituto Telma Novaes (Desenvolvimento e Pesquisa).</Text>
          <br />
          <Text fontSize="1rem" fontWeight="normal" >* Auriculoterapia Neurofisiológica, pelo
            Instituto Dra.Lirane Suliano.</Text>
          <br />
          <Text fontSize="1rem" fontWeight="normal" >* Formação Internacional em Hipnóse Clínica,
            pela Mind Training Academy - Instituto Lucas Novaes.</Text>
          <br />
          <Text fontSize="1rem" fontWeight="normal" >* Inteligência Emocional, pela
            Escola Nacional de Adm. Pública (ENAP).</Text>
          <br />
          <Text fontSize="1rem" fontWeight="normal" >* Formação Básica para Trabalhadores da Área de Saúde, pela
            Fundação Osvaldo Cruz.(FIOCRUZ)</Text>
          <br />
          <Text fontSize="1rem" fontWeight="normal" >* Introdução a Prática Integrativa e Complementar :
            Práticas Corporais e Mentais da Medicina Tradicional Chinesa, pelo AVASUS.</Text>
          <br />
          <Text fontSize="1rem" fontWeight="normal" >* Constelação Familiar e Sistêmica,
            pela Faculdade GAIO.</Text>
          <br />
          <Text fontSize="1rem" fontWeight="normal" >* Terapia Holística, pelo
            Instituto Saber Consciente.</Text>
          <br />
          <Text fontSize="1rem" fontWeight="normal" >* Coaching Integrativo Sistêmico Profissional - (Internacional), pela
            UDEMY.</Text>
        </Box>
      </Flex>
    </Stack>
  )
}

export default About