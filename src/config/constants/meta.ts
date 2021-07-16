import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MoccaSwap',
  description:
    'Decentralized trading protocol on Binance Smart Chain',
  image: '',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('MoccaSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('MoccaSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('MoccaSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('MoccaSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('MoccaSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('MoccaSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('MoccaSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('MoccaSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('MoccaSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('MoccaSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('MoccaSwap')}`,
      }
    default:
      return null
  }
}
