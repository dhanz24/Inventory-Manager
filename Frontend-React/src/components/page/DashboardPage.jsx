import React from 'react'
import CardItem from '../CardItem'
import AreaChartComponent from '../AreaChartComponent'
import TableComponent from '../TableComponent'
import TableBarang from '../TableBarang'

import { useData } from '../context/DataContext';


const LeftColumn = () => {
  const { dataDashboard, error } = useData();
  const jumlahBarang = dataDashboard.totalBarang;
  const totalStok = dataDashboard.totalStok;
  const stokMinim = dataDashboard.stokMinim;
  const stokMax = dataDashboard.stokMax;
  console.log(dataDashboard); 

  return (
    <div className='w-full flex flex-col p-2 justify-between'>
      <div className='flex flex-col lg:flex-row gap-2 w-full '>
        <CardItem itemName="Jumlah Barang" item={jumlahBarang} />
        <CardItem itemName='Total Stok' item={totalStok}/>
        <CardItem itemName='Stok Minim'item={stokMinim}/>
        <CardItem itemName='Overstok' item={stokMax}/>
      </div>
      <div className='flex-auto w-full '>
        <AreaChartComponent />
      </div>

        <TableBarang />
      
    </div>
  )
}

export default LeftColumn