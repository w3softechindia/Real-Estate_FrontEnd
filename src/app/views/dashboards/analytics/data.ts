import type { ChartOptions } from '@common/apexchart.model'
import { currency, currentYear } from '@common/constants'
import { addOrSubtractDaysFromDate } from '@core/helper/utils'

export type StatisticType = {
  icon: string
  title: string
  amount: string
  change: number
  variant?: string
}

export type PropertyType = {
  title: string
  icon: string
  amount: string
  progress: number
  variant: string
}

export type TransactionType = {
  purchaseId: string
  user: string
  agentName: string
  invoiceNumber: string
  purchaseDate: string
  property?: PropertyType
  amount: string
  paymentType: 'Mastercard' | 'Visa' | 'Paypal'
  paymentStatus: 'Completed' | 'Cancel' | 'Pending'
}

export const statisticData: StatisticType[] = [
  {
    icon: 'solar:buildings-2-broken',
    title: 'No. of Properties',
    amount: '2,854',
    change: 7.34,
  },
  {
    icon: 'solar:users-group-two-rounded-broken',
    title: 'Regi. Agents',
    amount: '705',
    change: 76.89,
  },
  {
    icon: 'solar:shield-user-broken',
    title: 'Customers',
    amount: '9,431',
    change: 45.0,
    variant: 'danger',
  },
  {
    icon: 'solar:money-bag-broken',
    title: 'Revenue',
    amount: currency + '78.3M',
    change: 8.76,
  },
]

export const propertyData: PropertyType[] = [
  {
    title: 'Property',
    icon: 'solar:home-bold-duotone',
    amount: '15,780',
    progress: 60,
    variant: 'primary',
  },
  {
    title: 'Revenue',
    icon: 'solar:money-bag-bold-duotone',
    amount: currency + '78.3M',
    progress: 80,
    variant: 'success',
  },
]

export const chartOptions: Partial<ChartOptions> = {
  chart: {
    height: 95,
    parentHeightOffset: 0,
    type: 'bar',
    toolbar: {
      show: !1,
    },
  },
  plotOptions: {
    bar: {
      barHeight: '100%',
      columnWidth: '40%',
      borderRadius: 4,
      distributed: !0,
    },
  },
  grid: {
    show: !1,
    padding: {
      top: -20,
      bottom: -10,
      left: 0,
      right: 0,
    },
  },
  colors: ['#eef2f7', '#eef2f7', '#604ae3', '#eef2f7'],
  dataLabels: {
    enabled: !1,
  },
  series: [
    {
      name: 'New Agents',
      data: [40, 50, 65, 40, 40, 65, 40],
    },
  ],
  legend: {
    show: !1,
  },
  xaxis: {
    categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    axisBorder: {
      show: !1,
    },
    axisTicks: {
      show: !1,
    },
  },
  yaxis: {
    labels: {
      show: !1,
    },
  },
  tooltip: {
    enabled: !0,
  },
  responsive: [
    {
      breakpoint: 1025,
      options: {
        chart: {
          height: 199,
        },
      },
    },
  ],
}

export const salesChart: Partial<ChartOptions> = {
  chart: {
    height: 341,
    type: 'area',

    dropShadow: {
      enabled: true,
      opacity: 0.2,
      blur: 10,
      left: -7,
      top: 22,
    },
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  colors: ['#47ad94', '#604ae3'],
  dataLabels: {
    enabled: false,
  },

  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
    lineCap: 'square',
  },
  series: [
    {
      name: 'Expenses',
      data: [
        16800, 16800, 15500, 17000, 14800, 15500, 19000, 16000, 15000, 17000,
        14000, 17000,
      ],
    },
    {
      name: 'Income',
      data: [
        16500, 17500, 16200, 21500, 17300, 16000, 16000, 17000, 16000, 19000,
        18000, 19000,
      ],
    },
  ],
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
    },
    labels: {
      offsetX: 0,
      offsetY: 5,
      style: {
        fontSize: '12px',
        cssClass: 'apexcharts-xaxis-title',
      },
    },
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return value / 1000 + 'K'
      },
      offsetX: -15,
      offsetY: 0,
      style: {
        fontSize: '12px',
        cssClass: 'apexcharts-yaxis-title',
      },
    },
  },
  grid: {
    borderColor: '#191e3a',
    strokeDashArray: 5,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: -50,
      right: 0,
      bottom: 0,
      left: 5,
    },
  },
  legend: {
    show: false,
  },

  fill: {
    type: 'gradient',
    gradient: {
      type: 'vertical',
      shadeIntensity: 1,
      inverseColors: !1,
      opacityFrom: 0.12,
      opacityTo: 0.1,
      stops: [100, 100],
    },
  },
  responsive: [
    {
      breakpoint: 575,
      options: {
        legend: {
          offsetY: -50,
        },
      },
    },
  ],
}

export const socialOptions: Partial<ChartOptions> = {
  chart: {
    height: 349,
    type: 'radialBar',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
      hollow: {
        margin: 0,
        size: '70%',
        background: 'transparent',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24,
        },
      },
      track: {
        background: 'rgba(170,184,197, 0.4)',
        strokeWidth: '67%',
        margin: 0,
      },

      dataLabels: {
        // showOn: "always",
        name: {
          offsetY: -10,
          show: true,
          color: '#888',
          fontSize: '17px',
        },

        value: {
          // formatter: function (val) {
          //   return parseInt(val);
          // },
          color: '#111',
          fontSize: '36px',
          show: true,
        },
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ['#7f56da', '#4697ce'],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
    },
  },
  series: [70],
  stroke: {
    lineCap: 'round',
  },
  labels: ['Total Buyer'],
}

export const salesOptions: Partial<ChartOptions> = {
  chart: {
    height: 120,
    parentHeightOffset: 0,
    type: 'bar',
    toolbar: {
      show: !1,
    },
  },
  plotOptions: {
    bar: {
      barHeight: '100%',
      columnWidth: '40%',
      // startingShape: "rounded",
      // endingShape: "rounded",
      borderRadius: 4,
      distributed: !0,
    },
  },
  grid: {
    show: true,
    padding: {
      top: -20,
      bottom: -10,
      left: 0,
      right: 0,
    },
  },
  colors: ['#604ae3', '#604ae3', '#604ae3', '#604ae3'],
  dataLabels: {
    enabled: !1,
  },
  series: [
    {
      name: 'Property Sales',
      data: [40, 50, 65, 45, 40, 70, 40],
    },
  ],
  legend: {
    show: !1,
  },
  xaxis: {
    categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    axisBorder: {
      show: !1,
    },
    axisTicks: {
      show: !1,
    },
  },
  yaxis: {
    labels: {
      show: true,
    },
  },
  tooltip: {
    enabled: !0,
  },
  responsive: [
    {
      breakpoint: 1025,
      options: {
        chart: {
          height: 199,
        },
      },
    },
  ],
}

export const transactionData: TransactionType[] = [
  {
    purchaseId: '#TZ2540',
    user: 'assets/images/users/avatar-2.jpg',
    agentName: 'Michael A. Miner',
    invoiceNumber: 'IN-4563',
    purchaseDate: '07 Jan, ' + currentYear,
    amount: '45,842',
    paymentType: 'Mastercard',
    paymentStatus: 'Completed',
  },
  {
    purchaseId: '#TZ3924',
    user: 'assets/images/users/avatar-3.jpg',
    agentName: 'Theresa T. Brose',
    invoiceNumber: 'IN-3728',
    purchaseDate: '03 Dec, ' + currentYear,
    amount: '78,483',
    paymentType: 'Visa',
    paymentStatus: 'Cancel',
  },
  {
    purchaseId: '#TZ5032',
    user: 'assets/images/users/avatar-4.jpg',
    agentName: 'Walter L. Calab',
    invoiceNumber: 'IN-8265',
    purchaseDate: '28 Sep, ' + currentYear,
    amount: '83,644',
    paymentType: 'Paypal',
    paymentStatus: 'Completed',
  },
  {
    purchaseId: '#TZ1695',
    user: 'assets/images/users/avatar-5.jpg',
    agentName: 'Olive Mize',
    invoiceNumber: 'IN-3728',
    purchaseDate: '10 Aug, ' + currentYear,
    amount: '94,305',
    paymentType: 'Mastercard',
    paymentStatus: 'Pending',
  },
  {
    purchaseId: '#TZ8473',
    user: 'assets/images/users/avatar-6.jpg',
    agentName: 'Christa Sardina',
    invoiceNumber: 'IN-8945',
    purchaseDate: '22 May, ' + currentYear,
    amount: '42,561',
    paymentType: 'Visa',
    paymentStatus: 'Cancel',
  },
  {
    purchaseId: '#TZ2150',
    user: 'assets/images/users/avatar-7.jpg',
    agentName: 'Darren Rivera',
    invoiceNumber: 'IN-0987',
    purchaseDate: '15 Mar, ' + currentYear,
    amount: '25,671',
    paymentType: 'Paypal',
    paymentStatus: 'Completed',
  },
]
