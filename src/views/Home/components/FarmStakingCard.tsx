import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button, Text } from '@pancakeswap/uikit'
import { harvestFarm } from 'utils/calls'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import useFarmsWithBalance from 'views/Home/hooks/useFarmsWithBalance'
import { useMasterchef } from 'hooks/useContract'
import useToast from 'hooks/useToast'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'

const StyledFarmStakingCard = styled(Card)`
  background-color: rgb(39, 38, 44);
  background-image: url('/images/logo.png');
  opacity: 0.8;
  background-size: 150px;
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWeb3React()
  const { t } = useTranslation()
  const { toastError } = useToast()
  const farmsWithBalance = useFarmsWithBalance()
  const masterChefContract = useMasterchef()
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.gt(0))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    // eslint-disable-next-line no-restricted-syntax
    for (const farmWithBalance of balancesWithValue) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await harvestFarm(masterChefContract, farmWithBalance.pid)
      } catch (error) {
        toastError(t('Error'), error?.message)
      }
    }
    setPendingTx(false)
  }, [balancesWithValue, masterChefContract, toastError, t])

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading scale="xl" mb="24px" color="rgb(244, 238, 255)">
          {t('Private Sale')}
        </Heading>
        <Block>
          <Heading scale="md" color="red" mb="150px">
            {t('Coming Soon')}
          </Heading>
        </Block>
        <Block>
          <Label color="rgb(244, 238, 255)">{t('Open at:')}</Label>
        </Block>
        <Actions>
            <Button
              id="harvest-all"
              disabled={0 < 1}
              onClick={harvestAllFarms}
              width="100%"
            >
            {t('Whitelist')}
            </Button>
        </Actions>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
