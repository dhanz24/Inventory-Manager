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

  const { data, error, fetchDataBarang, deleteDataBarang } = useData();
  const [editingItem, setEditingItem] = useState(null);

const handleEdit = (item) => {
  setEditingItem(item); // Set state dengan item yang akan diedit
  onUpdateOpen(); // Buka modal
};

  if (error) {
    return <div className='my-5 justify-center'>Error: {error} <Button className="mx-5" icon={RefreshCw} onClick={fetchDataBarang} size="xs" variant="light">
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
      
      <Button icon={RefreshCw} onClick={fetchDataBarang} size="xs" variant="light">
        Refresh
      </Button>
    </div>
  </div><Button onClick={onOpen} size="xs" variant="primary" className='mr-2 mt-3'>
        Tambah Barang
      </Button>
      
      <AddBarang isOpen={isOpen} onClose={onClose} />
      <UpdateBarang isOpen={isUpdateOpen} onClose={onUpdateClose} editingItem={editingItem} />


        
      <Table className='mt-5'>
        <TableHead>
          <TableRow>
            <TableHeaderCell >No</TableHeaderCell>
            <TableHeaderCell >Kode Barang</TableHeaderCell>
            <TableHeaderCell >Nama Barang</TableHeaderCell>
            <TableHeaderCell >Harga</TableHeaderCell>
            <TableHeaderCell >Minimal</TableHeaderCell>
            <TableHeaderCell >Maksimal</TableHeaderCell>
            <TableHeaderCell >Stok Sekarang</TableHeaderCell>
            <TableHeaderCell >Aksi</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={item.kode_barang}>
            <TableCell className="custom-cell">{index + 1}</TableCell>
              <TableCell>{item.kode_barang}</TableCell>
              <TableCell>
                <Text>{item.nama_barang}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.harga}</Text>
              </TableCell>
              <TableCell>
              <Text>{item.minimal ? item.minimal : '-'}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.maksimal ? item.maksimal: '-'}</Text>
              </TableCell>
              <TableCell>
               <Text>{item.stok ? item.stok : '-'}</Text>
              </TableCell>
              <TableCell>
                <Button icon={Pencil} size='xs' color='amber' className='mx-1 ' tooltip='Edit Barang' onClick={() => handleEdit(item)}></Button>
                <Button icon={Trash2} size='xs' color='rose' className='mx-1' tooltip='Hapus Barang' onClick={() => deleteDataBarang(item.kode_barang)}></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

export default TableBarang