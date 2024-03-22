import React from 'react'
import CardItem from '../CardItem'
import TableStok from '../TableStok'

import { useData } from '../context/DataContext';

 export const BarangPage = () => {
  const { data, error } = useData();
  const jumlahBarang = data.length

    return (
      <div className='grid md:grid-cols-3 grid-cols-1 w-full'>
      <div className='col-span-full'>
            <div className='w-full flex flex-col p-2 justify-between'>
            <div className='flex flex-col lg:flex-row gap-2 w-full '>
            <CardItem itemName="Jumlah Barang" item={jumlahBarang} />
            <CardItem itemName='Stok Minimum' item='5'/>
            <CardItem itemName='Stok Oversupply' item='3'/>
            </div>
      <div>
        <TableStok />
      </div>
      </div>      
    </div>
      </div>      
    )

}

export default BarangPage