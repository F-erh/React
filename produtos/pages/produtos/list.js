/* eslint-disable jsx-a11y/alt-text */
import { ChevronLeftIcon, StarIcon } from '@chakra-ui/icons'
import {
  Box,
  Stack,
  Heading,
  Flex,
  FlexProps,
  OmitCommonProps,
  Button,
  chakra,
  useColorModeValue,
  HStack,
  Container,
  Badge,
  Center,
  Image,
  Link,
  Text
} from '@chakra-ui/react'
import React, { DetailedHTMLProps, HTMLAttributes } from 'react'

const Header = (
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      keyof FlexProps
    > &
    FlexProps & { as?: 'div' | undefined }
) => {
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={5}
        mx="auto"
        bg={useColorModeValue('white', 'gray.800')}
        shadow="lg"
        rounded="lg"
        color="tomato"
        {...props}
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 5, md: 0 }}
        >
          <ChevronLeftIcon color="black" />
          <Button color="black" variant="link">
            Voltar
          </Button>
        </Stack>
        <Flex align="center" mr={200}>
          <Heading as="h1" size="Medium" letterSpacing={'tighter'}>
            Finalização de Pedidos
          </Heading>
        </Flex>
      </Flex>
      <Box w="100%" p={10} bgColor="white">
        Pedidos
        <Center py={1}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: '100%', md: '940px' }}
            height={{ sm: '1px', md: '8rem' }}
            direction={{ base: 'column', md: 'row' }}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            padding={4}
          >
            <Flex flex={1} bg="white.200">
              <Image
                objectFit="cover"
                boxSize="35%"
                src={
                  'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                }
              />
            </Flex>
            <Stack
              flex={3}
              justifyContent="left"
              alignItems="left"
              p={10}
              pt={2}
            >
              <Text
                textAlign={'left'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}
              >
                Girotade
              </Text>
            </Stack>
          </Stack>
        </Center>
        <Center py={1}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: '100%', md: '940px' }}
            height={{ sm: '1px', md: '8rem' }}
            direction={{ base: 'column', md: 'row' }}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            padding={4}
          >
            <Flex flex={1} bg="white.200">
              <Image
                objectFit="cover"
                boxSize="35%"
                src={
                  'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                }
              />
            </Flex>
            <Stack
              flex={3}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}
            >
              <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}
              >
                Actress, musician, songwriter and artist. PM for work inquires
                or me in your posts
              </Text>
            </Stack>
          </Stack>
        </Center>
        <Center py={1}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: '100%', md: '940px' }}
            height={{ sm: '1px', md: '8rem' }}
            direction={{ base: 'column', md: 'row' }}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            padding={4}
          >
            <Flex flex={1} bg="white.200">
              <Image
                objectFit="cover"
                boxSize="35%"
                src={
                  'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                }
              />
            </Flex>
            <Stack
              flex={3}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}
            >
              <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}
              >
                Actress, musician, songwriter and artist. PM for work inquires
                or me in your posts
              </Text>
            </Stack>
          </Stack>
        </Center>
        <Center py={1}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: '100%', md: '940px' }}
            height={{ sm: '1px', md: '8rem' }}
            direction={{ base: 'column', md: 'row' }}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            padding={4}
          >
            <Flex flex={1} bg="white.200">
              <Image
                objectFit="cover"
                boxSize="35%"
                src={
                  'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                }
              />
            </Flex>
            <Stack
              flex={3}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}
            >
              <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}
              >
                Actress, musician, songwriter and artist. PM for work inquires
                or me in your posts
              </Text>
            </Stack>
          </Stack>
        </Center>
        <Center py={1}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: '100%', md: '940px' }}
            height={{ sm: '1px', md: '8rem' }}
            direction={{ base: 'column', md: 'row' }}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            padding={4}
          >
            <Flex flex={1} bg="white.200">
              <Image
                objectFit="cover"
                boxSize="35%"
                src={
                  'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                }
              />
            </Flex>
            <Stack
              flex={3}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}
            >
              <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}
              >
                Actress, musician, songwriter and artist. PM for work inquires
                or me in your posts
              </Text>
            </Stack>
          </Stack>
        </Center>
      </Box>
      <Box w="100%" p={10} bgColor="yellow">
        Pedidos
        <Center py={1}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: '100%', md: '940px' }}
            height={{ sm: '1px', md: '8rem' }}
            direction={{ base: 'column', md: 'row' }}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            padding={4}
          >
            <Flex flex={1} bg="white.200">
              <Image
                objectFit="cover"
                boxSize="35%"
                src={
                  'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                }
              />
            </Flex>
            <Stack
              flex={3}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}
            >
              <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}
              >
                Actress, musician, songwriter and artist. PM for work inquires
                or me in your posts
              </Text>
            </Stack>
          </Stack>
        </Center>
        <Center py={1}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: '100%', md: '940px' }}
            height={{ sm: '1px', md: '8rem' }}
            direction={{ base: 'column', md: 'row' }}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            padding={4}
          >
            <Flex flex={1} bg="white.200">
              <Image
                objectFit="cover"
                boxSize="35%"
                src={
                  'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                }
              />
            </Flex>
            <Stack
              flex={3}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}
            >
              <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}
              >
                Actress, musician, songwriter and artist. PM for work inquires
                or me in your posts
              </Text>
            </Stack>
          </Stack>
        </Center>
        <Center py={1}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: '100%', md: '940px' }}
            height={{ sm: '1px', md: '8rem' }}
            direction={{ base: 'column', md: 'row' }}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            padding={4}
          >
            <Flex flex={1} bg="white.200">
              <Image
                objectFit="cover"
                boxSize="35%"
                src={
                  'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                }
              />
            </Flex>
            <Stack
              flex={3}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}
            >
              <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}
              >
                Actress, musician, songwriter and artist. PM for work inquires
                or me in your posts
              </Text>
            </Stack>
          </Stack>
        </Center>
        <Center py={1}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: '100%', md: '940px' }}
            height={{ sm: '1px', md: '8rem' }}
            direction={{ base: 'column', md: 'row' }}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            padding={4}
          >
            <Flex flex={1} bg="white.200">
              <Image
                objectFit="cover"
                boxSize="35%"
                src={
                  'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                }
              />
            </Flex>
            <Stack
              flex={3}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}
            >
              <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}
              >
                Actress, musician, songwriter and artist. PM for work inquires
                or me in your posts
              </Text>
            </Stack>
          </Stack>
        </Center>
        <Center py={1}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: '100%', md: '940px' }}
            height={{ sm: '1px', md: '8rem' }}
            direction={{ base: 'column', md: 'row' }}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            padding={4}
          >
            <Flex flex={1} bg="white.200">
              <Image
                objectFit="cover"
                boxSize="35%"
                src={
                  'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                }
              />
            </Flex>
            <Stack
              flex={3}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}
            >
              <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}
              >
                Actress, musician, songwriter and artist. PM for work inquires
                or me in your posts
              </Text>
            </Stack>
          </Stack>
        </Center>
      </Box>
    </>
  )
}

export default Header
