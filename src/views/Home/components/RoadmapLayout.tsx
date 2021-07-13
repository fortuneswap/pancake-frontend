import styled from 'styled-components'

const RoadmapLayout = styled.div`
  display: grid;
  grid-gap: 32px;
  padding: 40px 0;
  border-top: 2px solid ${({ theme }) => theme.colors.textSubtle};
`

export default RoadmapLayout
