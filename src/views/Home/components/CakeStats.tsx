import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  background-color: rgb(39, 38, 44);
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const { t } = useTranslation()
  const totalSupply = 1000000000
  const burnedBalance = 0

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading scale="xl" mb="24px" color="rgb(244, 238, 255)">
          {t('Mocca Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px" color="rgb(244, 238, 255)">{t('Total MOCCA Supply')}</Text>
          {totalSupply && <CardValue fontSize="14px" value={totalSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px" color="rgb(244, 238, 255)">{t('Total MOCCA Burned')}</Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
