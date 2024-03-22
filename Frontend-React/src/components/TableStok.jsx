import React, { useState, useEffect } from 'react';
import AddBarang from './AddBarang'
import UpdateBarang from './UpdateBarang'
import { Trash2, Pencil,RefreshCw} from "lucide-react"
import { useDisclosure } from '@chakra-ui/react'

import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
  Button, 
} from '@tremor/react'

import { useData } from './context/DataContext';


const TableBarang = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isUpdateOpen, onOpen: onUpdateOpen, onClose: onUpdateClose } = useDisclosure();

  const { data, error, fetchData, deleteData, dataStok, combineData } = useData();
  const [editingItem, setEditingItem] = useState(null);
  

const handleEdit = () => {
  console.log(dataStok);
};

  if (error) {
    return <div className='my-5 justify-center'>Error: {error} <Button className="mx-5" icon={RefreshCw} onClick={fetchData} size="xs" variant="light">
     Refresh here
  </Button></div>;
  }
  
  return (
    <Card className='mt-4'>
      <div className="flex justify-between items-center">
    {/* Bagian judul */}
    <Title>Daftar Barang</Title>

    {/* Bagian tombol */}
    <div>
      
      <Button icon={RefreshCw} onClick={fetchData} size="xs" variant="light">
        Refresh
      </Button>
    </div>
  </div><Button onClick={onOpen} size="xs" variant="primary" className='mr-2 mt-3'>
        Input Stok
      </Button>
      
      <AddBarang isOpen={isOpen} onClose={onClose} />
      <UpdateBarang isOpen={isUpdateOpen} onClose={onUpdateClose} editingItem={editingItem} />


        
      <Table className='mt-5'>
        <TableHead>
          <TableRow>
            <TableHeaderCell >No</TableHeaderCell>
            <TableHeaderCell >Kode Barang</TableHeaderCell>
            <TableHeaderCell >Nama Barang</TableHeaderCell>
            <TableHeaderCell >Asal / Tujuan</TableHeaderCell>
            <TableHeaderCell >Jumlah</TableHeaderCell>
            <TableHeaderCell >Stok Awal</TableHeaderCell>
            <TableHeaderCell >Stok Akhir</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataStok.map((item, index) => (
            <TableRow key={item.id}>
            <TableCell className="custom-cell">{index + 1}</TableCell>
              <TableCell>{item.id}</TableCell>
              <TableCell>
                <Text>{item.nama_barang}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.harga}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.supplier}</Text>
              </TableCell>
              <TableCell>
              <Text>{item.minimal ? item.minimal : '-'}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.maksimal ? item.maksimal: '-'}</Text>
              </TableCell>
              <TableCell>
               <Text>{item.stok_sekarang ? item.stok_sekarang : '-'}</Text>
              </TableCell>
              <TableCell>
                <Button icon={Pencil} size='xs' color='amber' className='mx-1 ' tooltip='Edit Barang' onClick={() => handleEdit(item)}></Button>
                <Button icon={Trash2} size='xs' color='rose' className='mx-1' tooltip='Hapus Barang' onClick={() => deleteData(item.id)}></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

export default TableBarang