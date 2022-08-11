import {Box, Center, Heading, Text, Stack, Flex, Image, HStack} from '@chakra-ui/react';

interface CardProps {
  cityName: string;
  countryName: string;
  cityImage: string;
  countryFlag: string;
}

export default function CardCountry({ cityName, countryName, cityImage, countryFlag }: CardProps) {
  return (
    <Center py={4}>
      <Box maxW={'445px'} w={'full'} bg={'gray.50'} border='1px' borderColor='brand.50' rounded={'md'} overflow={'hidden'}>
        <Image src={cityImage} w="100%" h="173px" objectFit="cover" />
        <HStack justify="space-between" align="center" p="6" spacing="16px">
          <Box>
            <Heading color={'gray.800'} fontSize={'20px'} fontWeight="600" mb="3">{cityName}</Heading>
            <Text color={'gray.700'}>{countryName}</Text>
          </Box>
          <Image src={countryFlag} width="30px" height="30px" borderRadius="50%" objectFit="cover" />
        </HStack>
      </Box>
    </Center>
  );
}