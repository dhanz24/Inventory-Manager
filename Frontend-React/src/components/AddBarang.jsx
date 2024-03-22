import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure, FormControl, FormLabel, Input, Button
  } from '@chakra-ui/react'

  import {useState} from 'react'
  import { useData } from './context/DataContext';

const AddBarang = ({isOpen, onClose}) => {
  const { postDataBarang } = useData();

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [namaBarang, setNamaBarang] = useState('');
  const [harga, setHarga] = useState('');
  const [minimal, setStokMinimal] = useState('');
  const [maksimal, setStokMaksimal] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah reload halaman
    // Struktur data yang akan dikirim
    const newData = {
      nama_barang: namaBarang,
      harga,
      minimal,
      maksimal,
      // Gambar dihandle secara terpisah jika diperlukan
    };
  
    await postDataBarang(newData);
    console.log('Submitting:', newData);
    onClose(); // Tutup modal setelah submit
  };

  
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
     

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        isCentered
        size={'xl'}
        
      >
        <ModalOverlay />
        <ModalContent>
        <form onSubmit={handleSubmit}>
          <ModalHeader>Tambah Data Barang</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <FormControl isRequired>
              <FormLabel>Nama Barang</FormLabel>
              <Input 
                placeholder='Masukan Nama Barang' 
                value={namaBarang} 
                onChange={(e) => setNamaBarang(e.target.value)} 
                required 
              />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Harga</FormLabel>
              <Input placeholder='Masukan Harga Barang' onChange={(e) => setHarga(e.target.value)}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Stok Minimal</FormLabel>
              <Input placeholder='Masukan stok minimal barang' onChange={(e) => setStokMinimal(e.target.value)}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Stok Maksimal</FormLabel>
              <Input placeholder='Masukan stok masksimal barang' onChange={(e) => setStokMaksimal(e.target.value)}/>
            </FormControl>
            <FormControl mt={4} >
              <FormLabel>Gambar Barang</FormLabel>
              <Input id="image" type="file" accept="image/*" name="image" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} type="submit">
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddBarang;