import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

interface SwiperItemProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

export function SwiperItem({ imageUrl, title, description, link }: SwiperItemProps) {
  return (
    <Link href={`/continente/${link}`}>
      <a>
        <Image src={imageUrl} w="100%" h={["250px", "450px"]} position="relative" objectFit="cover" />
        <Flex position="absolute" inset="0" margin="auto" flexDirection="column" alignItems="center" justifyContent="center">
          <Heading color="gray.50" fontWeight="700" fontSize={["24px", "48px"]} lineHeight={["36px", "72px"]} mb={["12px", "16px"]}>{title}</Heading>
          <Text color="gray.600" fontWeight="700" fontSize={["14px", "24px"]} lineHeight={["21px", "36px"]}>{description}</Text>
        </Flex>
      </a>
    </Link>
  )
}