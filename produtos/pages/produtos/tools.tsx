<Tooltip label="informação de erro" fontSize="sm">
<InfoOutlineIcon color="feedback.error-default" />
</Tooltip>

const pedodoMinimo = 
const saldoInsuficiente = 
const creditoInsuficiente = 

{isCreditoYandeh ? null : isPedodoMinimo ? null : (
    <Flex justifyContent="space-between">
      <Text color="feedback.error-default">
        {translate('pedido.minimumOrder')}
      </Text>
      <Text color="feedback.error-default" as="b">
        R$ 500,00
      </Text>
    </Flex>
  )}