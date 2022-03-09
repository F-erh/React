import { ChevronLeftIcon } from '@chakra-ui/icons'
import {
  Box,
  Stack,
  Heading,
  Flex,
  FlexProps,
  OmitCommonProps
} from '@chakra-ui/react'
import React, { DetailedHTMLProps, HTMLAttributes } from 'react'

const Header = (
) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={2}
      bg="teal.500"
      color="white"
      {...props}
    >
      <Flex align="right" mr={2}>
        <Box display={{ base: 'block' }}>
          <ChevronLeftIcon />
          Voltar
        </Box>

        <Heading as="h1" size="Medium" letterSpacing={'tighter'}>
          Pedidos
        </Heading>
      </Flex>
    </Flex>
  )
}

export default Header
