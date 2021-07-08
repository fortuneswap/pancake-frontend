import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'FortuneSwap',
  description:
    'Decentralized trading protocol on Binance Smart Chain',
  image: '',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('FortuneSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('FortuneSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('FortuneSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('FortuneSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('FortuneSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('FortuneSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('FortuneSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('FortuneSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('FortuneSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('FortuneSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('FortuneSwap')}`,
      }
    default:
      return null
  }
}
