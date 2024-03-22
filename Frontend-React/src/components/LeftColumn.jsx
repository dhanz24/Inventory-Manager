import React from 'react'
import CardItem from './CardItem'
import AreaChartComponent from './AreaChartComponent'
import TableComponent from './TableComponent'
import TableBarang from './TableBarang'

import { useData } from './context/DataContext';


const LeftColumn = () => {
  const { data, error } = useData();
  const jumlahBarang = data.length

  return (
    <div className='w-full flex flex-col p-2 justify-between'>
      <div className='flex flex-col lg:flex-row gap-2 w-full '>
        <CardItem itemName="Jumlah Barang" item={jumlahBarang} />
        <CardItem itemName='Stok Minim'item=""/>
        <CardItem itemName='Overstok' item=''/>
      </div>
      <div className='flex-auto w-full '>
        <AreaChartComponent />
      </div>
      <div className='max-h-2'>
        <TableBarang />
      </div>
    </div>
  )
}

export default LeftColumn