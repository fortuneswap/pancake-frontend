import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Card, CardBody, ArrowForwardIcon, Link, Button, Text, Skeleton, Flex } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { getTotalWon } from 'state/predictions/helpers'
import { usePriceBnbBusd } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import Balance from '../../../components/Balance'

const StyledPredictionCard = styled(Card)`
  background-color: rgb(39, 38, 44);
  background-image: url('/images/Rocket-PNG-File.png');
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 50%;
  min-height: 376px;
  ${({ theme }) => theme.mediaQueries.sm} {
    background-size: 45%;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    background-size: 50%;
  }
`

const PredictionLive = styled(Text)`
  color: rgb(244, 238, 255);
  font-size: 28px;
  line-height: 1.1;
  font-weight: 600;
  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 40px;
  }
`


const PredictionWon = styled(Balance)`
  font-size: 36px;
  line-height: 1.1;
  font-weight: 600;
  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 50px;
  }
`


const PredictionBNBSoFar = styled(Text)`
  color: rgb(244, 238, 255);
  font-size: 22px;
  line-height: 1.1;
  font-weight: 600;
  max-width: 160px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 24px;
    max-width: 320px;
  }
`

const PredictionTryNow = styled(Flex)`
  align-items: center;
  max-width: 120px;
  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: none;
  }
`

const JoinButton = styled(Button)`
  background: rgb(255, 213, 35);
`

const PredictionPromotionCard = () => {
  const { t } = useTranslation()
  const { slowRefresh } = useRefresh()
  const [loadData, setLoadData] = useState(false)
  const bnbBusdPrice = usePriceBnbBusd()
  const [bnbWon, setBnbWon] = useState(0)
  const [bnbWonInUsd, setBnbWonInUsd] = useState(0)


  useEffect(() => {
    const fetchMarketData = async () => {
      const totalWon = await getTotalWon()
      setBnbWon(totalWon)
    }

    if (loadData) {
      fetchMarketData()
    }
  }, [slowRefresh, loadData])

  useEffect(() => {
    if (bnbBusdPrice.gt(0) && bnbWon > 0) {
      setBnbWonInUsd(bnbBusdPrice.times(bnbWon).toNumber())
    }
  }, [bnbBusdPrice, bnbWon])

  const bnbWonInUsdText = bnbWonInUsd ? bnbWonInUsd.toString() : '-'
  const wonBNBText = t('Over %amount% in BNB won so far', { amount: bnbWonInUsdText })
  const [over, bnbSoFar] = wonBNBText.split(bnbWonInUsdText)

  return (
    <StyledPredictionCard>
      <CardBody>
        <PredictionLive mb="24px">{t('Airdrop Now Live')}</PredictionLive>
        <PredictionWon mb="24px" color="rgb(255, 213, 35)" bold decimals={0} value={100000000} />
        <PredictionBNBSoFar bold mb="24px">
          {t('MOCCA Token')}
        </PredictionBNBSoFar>
        <Link href="https://pancakeswap.finance/prediction" id="homepage-prediction-cta">
          <JoinButton px={['14px', null, null, null, '20px']}>
            <PredictionTryNow>
              <Text color="white" bold fontSize="16px">
                {t('Join Now')}
              </Text>
              <ArrowForwardIcon color="white" />
            </PredictionTryNow>
          </JoinButton>
        </Link>
      </CardBody>
    </StyledPredictionCard>
  )
}

export default PredictionPromotionCard
