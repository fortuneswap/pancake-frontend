import React from 'react'
import styled from 'styled-components'
import every from 'lodash/every'
import { Stepper, Step, StepStatus, Card, CardBody, Heading, Text, Button, Link, OpenNewIcon } from '@pancakeswap/uikit'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import { Ifo } from 'config/constants/types'
import { WalletIfoData } from 'views/Ifos/types'
import { useTranslation } from 'contexts/Localization'
import useTokenBalance from 'hooks/useTokenBalance'
import Container from 'components/layout/Container'
import { useProfile } from 'state/hooks'
import { getAddress } from 'utils/addressHelpers'

const Block = styled(Stepper)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const StyledCard = styled(Card)`
  background-color: rgb(39, 38, 44);
`

const Wrapper = styled(Container)`
  margin-left: -16px;
  margin-right: -16px;
  padding-top: 48px;
  padding-bottom: 48px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: -24px;
    margin-right: -24px;
  }
`

const Roadmap = () => {
  const { t } = useTranslation()

  const renderCardBody = (step: number) => {
    switch (step) {
      case 0:
        return (
          <CardBody>
            <Heading as="h4" color="secondary" mb="16px">
              {t('June 2021')}
            </Heading>
            <Text color="rgb(244, 238, 255)" small mb="16px">
              {t('Find the idea, icon, and gathering team.')}
            </Text>
          </CardBody>
        )
      case 1:
        return (
          <CardBody>
            <Heading as="h4" color="secondary" mb="16px">
              {t('July 2021')}
            </Heading>
            <Text color="rgb(244, 238, 255)" small mb="16px">
              {t('Launch website (beta), token & starting airdrop.')}
            </Text>
          </CardBody>
        )
      case 2:
        return (
          <CardBody>
            <Heading as="h4" color="secondary" mb="16px">
              {t('August 2021')}
            </Heading>
            <Text color="rgb(244, 238, 255)" small>
              {t('Starting private sale & public sale')} <br />
              {t('Create NFT & a few web menu.')}
            </Text>
          </CardBody>
        )
      case 3:
        return (
          <CardBody>
            <Heading as="h4" color="secondary" mb="16px">
              {t('September 2021')}
            </Heading>
            <Text color="rgb(244, 238, 255)" small>
              {t('Listing on exchanges & web swap')} <br />
              {t('Upgrade exchanges menu')}
            </Text>
          </CardBody>
        )
      case 4:
        return (
          <CardBody>
            <Heading as="h4" color="secondary" mb="16px">
              {t('Claim your tokens and achievement')}
            </Heading>
            <Text color="rgb(244, 238, 255)" small>
              {t(
                'After the IFO sales finish, you can claim any IFO tokens that you bought, and any unspent CAKE-BNB LP tokens will be returned to your wallet.',
              )}
            </Text>
          </CardBody>
        )
      default:
        return null
    }
  }

  return (
    <Wrapper>
      <div className="roadmap">
        <Heading as="h2" scale="xl" color="secondary" mb="24px" textAlign="center">
          {t('Roadmap')}
        </Heading>
      </div>
      <Text textAlign="center" mb="42px" color="rgb(244, 238, 255)">
        {t('We started our journey with the idea of bringing the best DeFi expriences to users.')}
      </Text>
      <Block>
          <Step key={0} index={0} status="past">
            <StyledCard mb="20px">{renderCardBody(0)}</StyledCard>
          </Step>
          <Step key={1} index={1} status="current">
            <StyledCard mb="20px">{renderCardBody(1)}</StyledCard>
          </Step>
          <Step key={2} index={2} status="future">
            <StyledCard mb="20px">{renderCardBody(2)}</StyledCard>
          </Step>
          <Step key={3} index={3} status="future">
            <StyledCard mb="20px">{renderCardBody(3)}</StyledCard>
          </Step>
          
      </Block>
    </Wrapper>
  )
}

export default Roadmap
