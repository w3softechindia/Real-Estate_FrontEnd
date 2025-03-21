import { currency } from '@common/constants'

export type PropertyStatType = {
  title: string
  amount: string
  icon: string
  change: number
  variant: string
}

export const propertyStatData: PropertyStatType[] = [
  {
    title: 'Total Incomes',
    amount: currency + '12,7812.09',
    icon: 'solar:wallet-money-broken',
    change: 34.4,
    variant: 'success',
  },
  {
    title: 'Total Properties',
    amount: '15,780 Unit',
    icon: 'solar:home-broken',
    change: 8.5,
    variant: 'danger',
  },
  {
    title: 'Unit Sold',
    amount: '893 Unit',
    icon: 'solar:dollar-broken',
    change: 17,
    variant: 'success',
  },
  {
    title: 'Unit Rent',
    amount: '459 Unit',
    icon: 'solar:key-minimalistic-square-broken',
    change: 12,
    variant: 'danger',
  },
]
