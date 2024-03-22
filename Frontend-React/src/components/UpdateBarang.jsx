import React, { useRef, useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import { useData } from './context/DataContext';

const UpdateBarang = ({ isOpen, onClose, editingItem }) => {
  const { putDataBarang } = useData();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const [namaBarang, setNamaBarang] = useState('');
  const [harga, setHarga] = useState('');
  const [minimal, setStokMinimal] = useState('');
  const [maksimal, setStokMaksimal] = useState('');
  const [stok, setStok] = useState('');

  useEffect(() => {
    if (editingItem) {
      setNamaBarang(editingItem.nama_barang);
      setHarga(editingItem.harga);
      setStokMinimal(editingItem.minimal);
      setStokMaksimal(editingItem.maksimal);
      setStok(editingItem.stok_sekarang);
    }
  }, [isOpen, editingItem]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    const updatedData = {
      nama_barang: namaBarang,
      harga,
      minimal,
      maksimal,
      stok,
      // Handle image separately if needed
    };
    
    await putDataBarang(editingItem.kode_barang, updatedData);
    console.log('Updating:', namaBarang);
    onClose(); // Close modal after submit
  };

  return (
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
          <ModalHeader>Update Data Barang</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Nama Barang</FormLabel>
              <Input
                ref={initialRef}
                placeholder='Masukan Nama Barang'
                value={namaBarang}
                onChange={(e) => setNamaBarang(e.target.value)}
                required
              />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Harga</FormLabel>
              <Input
                placeholder='Masukan Harga Barang'
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
                required
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Stok Minimal</FormLabel>
              <Input
                placeholder='Masukan stok minimal barang'
                value={minimal}
                onChange={(e) => setStokMinimal(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Stok Maksimal</FormLabel>
              <Input
                placeholder='Masukan stok maksimal barang'
                value={maksimal}
                onChange={(e) => setStokMaksimal(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Gambar Barang</FormLabel>
              <Input id="image" type="file" accept="image/*" name="image" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} type="submit">
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default UpdateBarang;
