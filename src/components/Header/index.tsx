import { Flex, Link, Icon, Image } from "@chakra-ui/react";
import {FiChevronLeft} from "react-icons/fi";

interface HeaderProps {
  hasBackLink?: boolean;
}

export function Header({ hasBackLink = false }: HeaderProps) {
  return (
    <Flex as="header" w="100%" maxW={1240} mx="auto" py={[4, 6]} align="center" justifyContent="center" >
      {hasBackLink && (
        <Link position='absolute' left="0" href='/'>
          <Icon as={FiChevronLeft} fontSize={["1rem", "2rem"]}/>
        </Link>
      )}
      <Image src="/images/logo.svg" alt="World Trip" w={["80px", "184px"]} />
    </Flex>
  )
}