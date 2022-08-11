import { Flex, Icon, Text, useBreakpointValue } from "@chakra-ui/react";
import { ElementType, ReactNode } from "react";
import { FaCircle } from 'react-icons/fa';

interface TypesProps {
  icon: ElementType;
  children: ReactNode;
}

export function Types({ icon, children }: TypesProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex mx="auto" alignItems="center" justifyContent="center" flexDirection={["row", "column"]}>
      { isWideVersion 
        ? 
        <Icon as={icon} fontSize="85" color="brand.100" />
        :
        <Icon as={FaCircle} fontSize='8px' color="brand.100" mr={2} />
      }
      <Text fontWeight={["500", "600"]} fontSize={["18px", "24px"]} lineHeight="36px" color="gray.800">{children}</Text>
    </Flex>
  )
}