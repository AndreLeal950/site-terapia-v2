import './App.css';
import { VStack, Flex, Heading, Spacer } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'
import { Image, useMediaQuery } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode'
import {FaSun, FaMoon, FaInstagram, FaWhatsapp} from 'react-icons/fa'
import Header from './components/Header';
import Profile from './components/Profile';
import Social from './components/Social';
import Modal from './components/Modal'
import Sidebar from './components/Sidebar';


 
function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const { isNotSmallerScreen } = useMediaQuery("(min-width:650px)");
 
  
  return (
             
    <VStack p={5}>
      <Flex w='100%'>
        <Heading
          ml='8'
          size='md'
          fontWeight='semibold'
          color='cyan.400'
        >
          <Image src={isNotSmallerScreen ? require('../src/img/flor_lotus.png') : require('../src/img/Logo.png') } w='20rem' alignItems='center'/>
        </Heading>

      
      <Spacer/>
      <IconButton
        ml={8} icon={isDark ? <FaSun /> : <FaMoon />}
        isRound='true' onClick={toggleColorMode} />
      <IconButton
          ml={8} icon={<FaInstagram />}
          isRound='true' target='blank'
          onClick={() =>
          window.open('https://www.instagram.com/silvanaleal.terapeuta')} />
      <IconButton
          ml={8} icon={<FaWhatsapp />}
          isRound='true' target='blank'
          onClick={() =>
          window.open('https://api.whatsapp.com/send?phone=5591992851178')} />
      </Flex>
      <Header />
      <Profile />
      <Social />
      <Modal />
      <Sidebar />
      <br/><br/>
      <Social />

    </VStack>
   
      
  );
}

export default App;
