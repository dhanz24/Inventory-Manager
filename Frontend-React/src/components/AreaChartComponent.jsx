import React from 'react'
import { AreaChart, Card, Title } from '@tremor/react'


const chartdata = [
  {
    date: 'Mar 17', 
    'Stok Keluar': 2890,
    'Stok Masuk': 2338,
  },
  {
    date: 'Mar 18',
    'Stok Keluar': 2890,
    'Stok Masuk': 2338,
  },
  {
    date: 'Mar 19',
    'Stok Keluar': 2756,
    'Stok Masuk': 2103,
  },
  {
    date: 'Mar 20',
    'Stok Keluar': 3322,
    'Stok Masuk': 2194,
  },
  {
    date: 'Mar 21',
    'Stok Keluar': 3470,
    'Stok Masuk': 2108,
  },
  {
    date: 'Mar 23',
    'Stok Keluar': 3475,
    'Stok Masuk': 1812,
  },
  {
    date: 'Mar 24',
    'Stok Keluar': 3129,
    'Stok Masuk': 1726,
  },
]

const valueFormatter = function (number) {
  return '$ ' + new Intl.NumberFormat('us').format(number).toString()
}

const AreaChartComponent = () => {
  // mengambil data terbaru dari data stok
  const latestData = chartdata[chartdata.length - 1];
  const latestDate = latestData.date;
  const latestStokMasuk = latestData['Stok Masuk'];
  const latestStokKeluar = latestData['Stok Keluar'];

  return (
    <Card className='mt-4'>
      <Title>Chart Stok</Title>
      <AreaChart
        className='h-72 mt-4'
        data={chartdata}
        index='date'
        categories={['Stok Masuk', 'Stok Keluar']}
        colors={['indigo', 'cyan']}
        //valueFormatter={valueFormatter}
      />
    </Card>
  )
}

export default AreaChartComponent