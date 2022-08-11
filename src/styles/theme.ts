import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      "100": "#FFBA08",
      "50": "#FFDC83",
    },
    gray: {
      "900": "#000000",
      "800": "#47585B",
      "700": "#999999",
      "600": "#DADADA",
      "500": "#F5F8FA",
      "50": "#FFFFFF",
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.500',
        color: 'gray.800'
      }
    }
  }
})