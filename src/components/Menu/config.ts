import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: 'https://exchange.pancakeswap.finance/#/swap',
      },
      {
        label: t('Liquidity'),
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/#',
    status: {
      text: t('Soon').toLocaleUpperCase(),
      color: 'success',
    },
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/#',
    status: {
      text: t('Soon').toLocaleUpperCase(),
      color: 'success',
    },
  },
  {
    label: t('Info'),
    icon: 'InfoIcon',
    href: '/#',
    status: {
      text: t('Soon').toLocaleUpperCase(),
      color: 'success',
    },
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.pancakeswap.finance/contact-us',
      },
      {
        label: t('Github'),
        href: 'https://github.com/pancakeswap',
      },
      {
        label: t('Blog'),
        href: 'https://pancakeswap.medium.com',
      },
    ],
  },
]

export default config
