import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text, Link } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab)

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const SocialLink = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`

const TotalValueLockedCard = () => {
  const { t } = useTranslation()
  const data = useGetStats()
  const tvl = data ? data.tvl.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading scale="lg" mb="24px">
          {t('Social Links')}
        </Heading>
        <SocialLink>
          <Link href="/#">
            <Text color="secondary" bold fontSize="48px" mr="15px">
              <FontAwesomeIcon icon={['fab', 'telegram']} />
            </Text>
          </Link>
          <Link href="/#">
            <Text color="secondary" bold fontSize="48px" mr="15px">
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </Text>
          </Link>
          <Link href="/#">
            <Text color="secondary" bold fontSize="48px" mr="15px">
              <FontAwesomeIcon icon={['fab', 'medium']} />
            </Text>
          </Link>
          <Link href="/#">
            <Text color="secondary" bold fontSize="48px">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </Text>
          </Link>
        </SocialLink>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
