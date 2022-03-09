/* eslint-disable jsx-a11y/alt-text */
import { EditIcon, InfoIcon } from '@chakra-ui/icons'
import { Container, Link } from '@chakra-ui/react'
import { translate } from 'internationalization'

import {
  Box,
  Flex,
  Button,
  Image,
  Grid,
  GridItem,
  Text,
  Divider
} from '@yandeh/design-system/'

import Pedidos from './box-pedidos'
import Independente from './fonecedor-independente'
import Fornecedor from './fornecedor-yandeh'
const Carrinho = () => {
  return (
    <>
      <Container
        maxW="container.xl"
        borderRadius="md"
        border="4px solid transparent"
        justifyContent="center"
        shadow="primary-level1"
        bgColor="standard.white"
        marginTop="xxxs"
      >
        <Fornecedor />
        <Pedidos />
        <Box
          borderRadius="md"
          paddingX="nano"
          paddingY="xxxs"
          shadow="primary-level1"
          bgColor="brand.primary-extralightest"
          border="4px solid transparent"
          justifyContent="center"
          padding="24px"
          marginTop="xxxs"
          borderColor="feedback.error-default"
        >
          <Grid templateColumns="repeat(12, 1fr)" gap={50}>
            <GridItem colSpan={{ sm: 12, base: 12, md: 3 }}>
              <Flex justify="center" direction="column">
                <Flex align="center">
                  <Image
                    maxWidth="45px"
                    width="45px"
                    src="https://bit.ly/dan-abramov"
                  />
                  <Text color="brand.primary-extralightest">........</Text>
                  <Text as="b">Girotrade</Text>
                </Flex>
                <Text>{translate}</Text>
                <Link color="brand.primary-default" href="" isExternal>
                  {translate('pedido.bankslipDays')} <EditIcon mx="2px" />
                </Link>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ sm: 12, base: 12, md: 4 }}>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.quantityItems')}</Text>
                <Text as="b">82</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.deliveryEstimate')}</Text>
                <Text as="b">14/05/2022</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.minimumOrder')}</Text>
                <Text as="b">R$ 500,00</Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ sm: 12, base: 12, md: 3 }}>
              <Flex justifyContent="space-between">
                <Text>Subtotal</Text>
                <Text as="b">R$ 3,850,00</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.discount')}</Text>
                <Text as="b">- R$ 350,00</Text>
              </Flex>
              <Divider orientation="horizontal" variant="solid" />
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.amount')}</Text>
                <Text as="b" color="brand.primary-default">
                  R$ 3.500,00
                </Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ sm: 12, base: 12, md: 2 }}>
              <Flex direction="column" align="center">
                <Button colorScheme="black" variant="outline">
                  {translate('pedido.viewItems')}
                </Button>
                <Button marginTop="xxxs" colorScheme="feedback.error-default">
                  {translate('pedido.finalizePurchase')}
                </Button>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
        <Box
          borderRadius="md"
          paddingX="nano"
          paddingY="xxxs"
          shadow="primary-level1"
          bgColor="brand.primary-extralightest"
          border="4px solid transparent"
          justifyContent="center"
          padding="24px"
          marginTop="xxxs"
        >
          <Grid templateColumns="repeat(12, 1fr)" gap={50}>
            <GridItem colSpan={{ sm: 12, base: 12, md: 3 }}>
              <Flex justify="center" direction="column">
                <Flex align="center">
                  <Image
                    maxWidth="45px"
                    width="45px"
                    src="https://bit.ly/dan-abramov"
                  />
                  <Text color="brand.primary-extralightest">........</Text>
                  <Text as="b">Girotrade</Text>
                </Flex>
                <Text>{translate}</Text>
                <Link color="brand.primary-default" href="" isExternal>
                  {translate('pedido.bankslipDays')} <EditIcon mx="2px" />
                </Link>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ sm: 12, base: 12, md: 4 }}>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.quantityItems')}</Text>
                <Text as="b">82</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.deliveryEstimate')}</Text>
                <Text as="b">14/05/2022</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.minimumOrder')}</Text>
                <Text as="b">R$ 500,00</Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ sm: 12, base: 12, md: 3 }}>
              <Flex justifyContent="space-between">
                <Text>Subtotal</Text>
                <Text as="b">R$ 3,850,00</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.discount')}</Text>
                <Text as="b">- R$ 350,00</Text>
              </Flex>
              <Divider orientation="horizontal" variant="solid" />
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.amount')}</Text>
                <Text as="b" color="brand.primary-default">
                  R$ 3.500,00
                </Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ sm: 12, base: 12, md: 2 }}>
              <Flex direction="column" align="center">
                <Button colorScheme="black" variant="outline">
                  {translate('pedido.viewItems')}
                </Button>
                <Button marginTop="xxxs" colorScheme="feedback.error-default">
                  {translate('pedido.finalizePurchase')}
                </Button>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
        <Box
          borderRadius="md"
          paddingX="nano"
          paddingY="xxxs"
          shadow="primary-level1"
          bgColor="brand.primary-extralightest"
          border="4px solid transparent"
          justifyContent="center"
          padding="24px"
          marginTop="xxxs"
        >
          <Grid templateColumns="repeat(12, 1fr)" gap={50}>
            <GridItem colSpan={{ sm: 12, base: 12, md: 3 }}>
              <Flex justify="center" direction="column">
                <Flex align="center">
                  <Image
                    maxWidth="45px"
                    width="45px"
                    src="https://bit.ly/dan-abramov"
                  />
                  <Text color="brand.primary-extralightest">........</Text>
                  <Text as="b">Girotrade</Text>
                </Flex>
                <Text>{translate}</Text>
                <Link color="brand.primary-default" href="" isExternal>
                  {translate('pedido.bankslipDays')} <EditIcon mx="2px" />
                </Link>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ sm: 12, base: 12, md: 4 }}>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.quantityItems')}</Text>
                <Text as="b">82</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.deliveryEstimate')}</Text>
                <Text as="b">14/05/2022</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.minimumOrder')}</Text>
                <Text as="b">R$ 500,00</Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ sm: 12, base: 12, md: 3 }}>
              <Flex justifyContent="space-between">
                <Text>Subtotal</Text>
                <Text as="b">R$ 3,850,00</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.discount')}</Text>
                <Text as="b">- R$ 350,00</Text>
              </Flex>
              <Divider orientation="horizontal" variant="solid" />
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.amount')}</Text>
                <Text as="b" color="brand.primary-default">
                  R$ 3.500,00
                </Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ sm: 12, base: 12, md: 2 }}>
              <Flex direction="column" align="center">
                <Button colorScheme="black" variant="outline">
                  {translate('pedido.viewItems')}
                </Button>
                <Button marginTop="xxxs" colorScheme="feedback.error-default">
                  {translate('pedido.finalizePurchase')}
                </Button>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
        <Box
          borderRadius="md"
          paddingX="nano"
          paddingY="xxxs"
          shadow="primary-level1"
          bgColor="brand.primary-extralightest"
          border="4px solid transparent"
          justifyContent="center"
          padding="24px"
          marginTop="xxxs"
        >
          <Grid templateColumns="repeat(12, 1fr)" gap={50}>
            <GridItem colSpan={{ sm: 12, base: 12, md: 3 }}>
              <Flex justify="center" direction="column">
                <Flex align="center">
                  <Image
                    maxWidth="45px"
                    width="45px"
                    src="https://bit.ly/dan-abramov"
                  />
                  <Text color="brand.primary-extralightest">........</Text>
                  <Text as="b">Girotrade</Text>
                </Flex>
                <Text>{translate}</Text>
                <Link color="brand.primary-default" href="" isExternal>
                  {translate('pedido.bankslipDays')} <EditIcon mx="2px" />
                </Link>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ sm: 12, base: 12, md: 4 }}>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.quantityItems')}</Text>
                <Text as="b">82</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.deliveryEstimate')}</Text>
                <Text as="b">14/05/2022</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.minimumOrder')}</Text>
                <Text as="b">R$ 500,00</Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ sm: 12, base: 12, md: 3 }}>
              <Flex justifyContent="space-between">
                <Text>Subtotal</Text>
                <Text as="b">R$ 3,850,00</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.discount')}</Text>
                <Text as="b">- R$ 350,00</Text>
              </Flex>
              <Divider orientation="horizontal" variant="solid" />
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.amount')}</Text>
                <Text as="b" color="brand.primary-default">
                  R$ 3.500,00
                </Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ sm: 12, base: 12, md: 2 }}>
              <Flex direction="column" align="center">
                <Button colorScheme="black" variant="outline">
                  {translate('pedido.viewItems')}
                </Button>
                <Button marginTop="xxxs" colorScheme="feedback.error-default">
                  {translate('pedido.finalizePurchase')}
                </Button>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Container>
      <Container
        maxW="container.xl"
        borderRadius="md"
        border="4px solid transparent"
        justifyContent="center"
        shadow="primary-level1"
        bgColor="standard.white"
        marginTop="xxxs"
      >
        <Independente />
        <Box
          borderRadius="md"
          paddingX="nano"
          paddingY="xxxs"
          shadow="primary-level1"
          bgColor="brand.primary-extralightest"
          border="4px solid transparent"
          justifyContent="center"
          padding="24px"
          marginTop="xxxs"
          borderColor="feedback.warning-default"
        >
          <Grid templateColumns="repeat(12, 1fr)" gap={50}>
            <GridItem colSpan={{ sm: 12, base: 12, md: 3 }}>
              <Flex justify="center" direction="column">
                <Flex align="center">
                  <Image
                    maxWidth="45px"
                    width="45px"
                    src="https://bit.ly/dan-abramov"
                  />
                  <Text color="brand.primary-extralightest">........</Text>
                  <Text as="b">Girotrade</Text>
                </Flex>
                <Text>{translate}</Text>
                <Link color="brand.primary-default" href="" isExternal>
                  {translate('pedido.bankslipDays')} <EditIcon mx="2px" />
                </Link>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ sm: 12, base: 12, md: 4 }}>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.quantityItems')}</Text>
                <Text as="b">82</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.deliveryEstimate')}</Text>
                <Text as="b">14/05/2022</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>
                  {translate('pedido.minimumOrder')}
                  <InfoIcon color="feedback.warning-default" mx="2px" />
                </Text>
                <Text as="b">R$ 500,00</Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ sm: 12, base: 12, md: 3 }}>
              <Flex justifyContent="space-between">
                <Text>Subtotal</Text>
                <Text as="b">R$ 3,850,00</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.discount')}</Text>
                <Text as="b">- R$ 350,00</Text>
              </Flex>
              <Divider orientation="horizontal" variant="solid" />
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.amount')}</Text>
                <Text as="b" color="brand.primary-default">
                  R$ 3.500,00
                </Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ sm: 12, base: 12, md: 2 }}>
              <Flex direction="column" align="center">
                <Button colorScheme="black" variant="outline">
                  {translate('pedido.viewItems')}
                </Button>
                <Button marginTop="xxxs" colorScheme="feedback.error-default">
                  {translate('pedido.finalizePurchase')}
                </Button>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
        <Box
          borderRadius="md"
          paddingX="nano"
          paddingY="xxxs"
          shadow="primary-level1"
          bgColor="brand.primary-extralightest"
          border="4px solid transparent"
          justifyContent="center"
          padding="24px"
          marginTop="xxxs"
        >
          <Grid templateColumns="repeat(12, 1fr)" gap={50}>
            <GridItem colSpan={{ sm: 12, base: 12, md: 3 }}>
              <Flex justify="center" direction="column">
                <Flex align="center">
                  <Image
                    maxWidth="45px"
                    width="45px"
                    src="https://bit.ly/dan-abramov"
                  />
                  <Text color="brand.primary-extralightest">........</Text>
                  <Text as="b">Girotrade</Text>
                </Flex>
                <Text>{translate}</Text>
                <Link color="brand.primary-default" href="" isExternal>
                  {translate('pedido.bankslipDays')} <EditIcon mx="2px" />
                </Link>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ sm: 12, base: 12, md: 4 }}>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.quantityItems')}</Text>
                <Text as="b">82</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.deliveryEstimate')}</Text>
                <Text as="b">14/05/2022</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.minimumOrder')}</Text>
                <Text as="b">R$ 500,00</Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ sm: 12, base: 12, md: 3 }}>
              <Flex justifyContent="space-between">
                <Text>Subtotal</Text>
                <Text as="b">R$ 3,850,00</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.discount')}</Text>
                <Text as="b">- R$ 350,00</Text>
              </Flex>
              <Divider orientation="horizontal" variant="solid" />
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.amount')}</Text>
                <Text as="b" color="brand.primary-default">
                  R$ 3.500,00
                </Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ sm: 12, base: 12, md: 2 }}>
              <Flex direction="column" align="center">
                <Button colorScheme="black" variant="outline">
                  {translate('pedido.viewItems')}
                </Button>
                <Button marginTop="xxxs" colorScheme="feedback.error-default">
                  {translate('pedido.finalizePurchase')}
                </Button>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
        <Box
          borderRadius="md"
          paddingX="nano"
          paddingY="xxxs"
          shadow="primary-level1"
          bgColor="brand.primary-extralightest"
          border="4px solid transparent"
          justifyContent="center"
          padding="24px"
          marginTop="xxxs"
        >
          <Grid templateColumns="repeat(12, 1fr)" gap={50}>
            <GridItem colSpan={{ sm: 12, base: 12, md: 3 }}>
              <Flex justify="center" direction="column">
                <Flex align="center">
                  <Image
                    maxWidth="45px"
                    width="45px"
                    src="https://bit.ly/dan-abramov"
                  />
                  <Text color="brand.primary-extralightest">........</Text>
                  <Text as="b">Girotrade</Text>
                </Flex>
                <Text>{translate}</Text>
                <Link color="brand.primary-default" href="" isExternal>
                  {translate('pedido.bankslipDays')} <EditIcon mx="2px" />
                </Link>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ sm: 12, base: 12, md: 4 }}>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.quantityItems')}</Text>
                <Text as="b">82</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.deliveryEstimate')}</Text>
                <Text as="b">14/05/2022</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.minimumOrder')}</Text>
                <Text as="b">R$ 500,00</Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ sm: 12, base: 12, md: 3 }}>
              <Flex justifyContent="space-between">
                <Text>Subtotal</Text>
                <Text as="b">R$ 3,850,00</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.discount')}</Text>
                <Text as="b">- R$ 350,00</Text>
              </Flex>
              <Divider orientation="horizontal" variant="solid" />
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.amount')}</Text>
                <Text as="b" color="brand.primary-default">
                  R$ 3.500,00
                </Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ sm: 12, base: 12, md: 2 }}>
              <Flex direction="column" align="center">
                <Button colorScheme="black" variant="outline">
                  {translate('pedido.viewItems')}
                </Button>
                <Button marginTop="xxxs" colorScheme="feedback.error-default">
                  {translate('pedido.finalizePurchase')}
                </Button>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
        <Box
          borderRadius="md"
          paddingX="nano"
          paddingY="xxxs"
          shadow="primary-level1"
          bgColor="brand.primary-extralightest"
          border="4px solid transparent"
          justifyContent="center"
          padding="24px"
          marginTop="xxxs"
        >
          <Grid templateColumns="repeat(12, 1fr)" gap={50}>
            <GridItem colSpan={{ sm: 12, base: 12, md: 3 }}>
              <Flex justify="center" direction="column">
                <Flex align="center">
                  <Image
                    maxWidth="45px"
                    width="45px"
                    src="https://bit.ly/dan-abramov"
                  />
                  <Text color="brand.primary-extralightest">........</Text>
                  <Text as="b">Girotrade</Text>
                </Flex>
                <Text>{translate}</Text>
                <Link color="brand.primary-default" href="" isExternal>
                  {translate('pedido.bankslipDays')} <EditIcon mx="2px" />
                </Link>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ sm: 12, base: 12, md: 4 }}>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.quantityItems')}</Text>
                <Text as="b">82</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.deliveryEstimate')}</Text>
                <Text as="b">14/05/2022</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.minimumOrder')}</Text>
                <Text as="b">R$ 500,00</Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ sm: 12, base: 12, md: 3 }}>
              <Flex justifyContent="space-between">
                <Text>Subtotal</Text>
                <Text as="b">R$ 3,850,00</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.discount')}</Text>
                <Text as="b">- R$ 350,00</Text>
              </Flex>
              <Divider orientation="horizontal" variant="solid" />
              <Flex justifyContent="space-between">
                <Text>{translate('pedido.amount')}</Text>
                <Text as="b" color="brand.primary-default">
                  R$ 3.500,00
                </Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ sm: 12, base: 12, md: 2 }}>
              <Flex direction="column" align="center">
                <Button colorScheme="black" variant="outline">
                  {translate('pedido.viewItems')}
                </Button>
                <Button marginTop="xxxs" colorScheme="feedback.error-default">
                  {translate('pedido.finalizePurchase')}
                </Button>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default Carrinho
