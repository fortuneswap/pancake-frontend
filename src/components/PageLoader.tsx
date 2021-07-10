import React from 'react'
import styled from 'styled-components'
import { Spinner } from '@pancakeswap/uikit'
import Page from './layout/Page'
import Loader from './Loader'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`


const PageLoader: React.FC = () => {

  return (
    <Wrapper>
      <Loader />
    </Wrapper>
  )
}

export default PageLoader
