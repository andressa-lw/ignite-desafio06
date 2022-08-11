import { Box, Container, Divider, Flex, Heading, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { MdNightlife } from "react-icons/md";
import { TbBeach, TbBuildingMonument } from "react-icons/tb";
import { RiBankLine } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";

import { Header } from '../components/Header'
import { Types } from '../components/TravelTypes';
import { SwiperContainer } from '../components/SwiperContinent/SwiperContainer';

const Home: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <>
      <Header />
      
      <Flex w="100%" backgroundImage="/images/background-banner.jpg" bgSize="cover" h={["163", "335"]}>
        <Container w="100%" maxW={1240} display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Heading as="h1" fontWeight="500" fontSize={["20px", "36px"]} lineHeight={["30px", "54px"]} color="gray.500" mb="5">5 Continentes,<br />infinitas possibilidades.</Heading>
            <Text fontSize={["14px", "20px"]} lineHeight={["21px", "30px"]} color="gray.600" w="100%" maxW={524} >Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
          </Box>
          {isWideVersion && (<Image mb={[-16, -28]} src='/images/airplane.svg' alt='Avião' />)}
        </Container>
      </Flex>

      <Container w="100%" maxW={1240}>
        
        <Flex w="100%" my={[8, 20]} alignItems="center" justifyContent="space-between" columnGap={10} rowGap={6} flexWrap={isWideVersion ? 'nowrap' : 'wrap'}>
          <Types icon={MdNightlife}>vida noturna</Types>
          <Types icon={TbBeach}>praia</Types>
          <Types icon={TbBuildingMonument}>moderno</Types>
          <Types icon={RiBankLine}>clássico</Types>
          <Types icon={BiWorld}>e mais...</Types>
        </Flex>

        <Box w="100%">
          <Divider orientation='horizontal' w="90px" mx="auto" mb={["24px", "52px"]} borderWidth={["1px", "2px"]} borderColor="gray.800" />
          <Heading as="h2" fontWeight="500" fontSize={["20px", "36px"]} lineHeight={["30px", "54px"]} textAlign="center" mb={["24px", "52px"]}>
            Vamos nessa?<br />
            Então escolha seu continente
          </Heading>
        </Box>

      </Container>

      <Container w="100%" maxW={1240} mb={["24px", "40px"]} px={[0, 4]}>
        <SwiperContainer />
      </Container>
    </>
  )
}

export default Home
