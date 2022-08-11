import { Box, Container, Flex, Heading, HStack, Icon, SimpleGrid, Text, Tooltip } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { FiInfo } from "react-icons/fi";
import CardCountry from "../../components/CardCountry";
import { Header } from "../../components/Header";
import api from "../../services/api"

type ContinentType = {
  name: string;
  description: string;
  bannerImage: string;
  numberOfCountries: number;
  numberOfLanguages: number;
  numberOfCities: number;
  mostPopularCities: [{
    cityName: string;
    countryName: string;
    cityImage: string;
    countryFlag: string;
  }]
}

interface ContinentProps {
  continent: ContinentType;
}

export default function Continent({ continent }: ContinentProps) {
  return ( 
    <>
      <Header hasBackLink />

      <Box bgImage={`url(${continent.bannerImage})`} bgPosition="center" bgRepeat="no-repeat" bgSize="cover" height={["150","500"]}>
        <Container w="100%" maxW={1240} h="100%" display="flex" alignItems="flex-end" justifyContent={["center", "flex-start"]}>
          <Heading as="h1" fontWeight="600" fontSize={["28px", "48px"]} color="gray.50" mb="60px" textTransform="capitalize">{continent.name}</Heading>
        </Container>
      </Box>

      <Container w="100%" maxW={1240}>
        <Flex direction={["column", "row"]} justify="space-between" align="center" mt={["6", "20"]} mb={["8", "20"]}>
          <Text maxW="600" fontSize={["sm", "2xl"]} lineHeight={["5","9"]} textAlign="justify" fontWeight="400">
            {continent.description}
          </Text>

          <HStack spacing="42px" mt={["4", "0"]}>
            <Box textAlign="center">
              <Text as="span" fontSize={["2xl", "48px"]} color="brand.100" fontWeight="600">{continent.numberOfCountries}</Text>
              <Text fontSize={["lg","24px"]} fontWeight={["400", "600"]}>países</Text>
            </Box>
            <Box textAlign="center">
              <Text as="span" fontSize={["2xl", "48px"]} color="brand.100" fontWeight="600">{continent.numberOfLanguages}</Text>
              <Text fontSize={["lg","24px"]} fontWeight={["400", "600"]}>línguas</Text>
            </Box>
            <Box textAlign="center">
              <Text as="span" fontSize={["2xl", "48px"]} color="brand.100" fontWeight="600">{continent.numberOfCities}</Text>
              <Flex align='center'>
                <Text fontSize={["lg","24px"]} fontWeight={["400", "600"]}>cidades +100 </Text>
                <Tooltip label="100 cidades mais visitadas do mundo" bg="gray.800" color="gray.50">
                  <span><Icon as={FiInfo} fontSize={["xs", "md"]} opacity='0.5' ml='5px'/></span>
                </Tooltip>
              </Flex>
            </Box>
          </HStack>
        </Flex>

        <Heading as="h2">Cidades +100</Heading>
        <SimpleGrid columns={[1, 4]} spacing={[5, 10]} my={['5','45px']}>
          {continent.mostPopularCities.map((city) => (
            <CardCountry
              key={city.cityName}
              cityName={city.cityName}
              cityImage={city.cityImage}
              countryName={city.countryName}
              countryFlag={city.countryFlag}
            />
          ))}
        </SimpleGrid>
      </Container>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { continent } = params
  const res = await api.get(`/continents?slug=${continent}`)
  const continentInfos: ContinentType = res.data[0]

  return {
    props: {
      continent: continentInfos
    }
  }
}