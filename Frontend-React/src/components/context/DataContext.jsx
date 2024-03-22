import React, { createContext, useState, useContext, useEffect } from 'react';

// Membuat Context
const DataContext = createContext();

// Membuat Provider
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [dataStok, setDataStok] = useState([]);
  const [dataDashboard, setDataDashboard] = useState([]);
  const [error, setError] = useState(null);

  // Fungsi untuk fetch data
  const fetchDataBarang = async () => {
    try {
      const response = await fetch('http://localhost:3000/barang');
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.toString());
    }
  };

  // Fungsi untuk mengirim data dengan metode POST
  const postDataBarang = async (newData) => {
    try {
      const response = await fetch('http://localhost:3000/barang', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });
      if (!response.ok) {
        throw new Error(`Error posting data: ${response.statusText}`);
      }
      // Setelah sukses posting data, fetch data terbaru
      setData([...data, newData])
    } catch (error) {
      console.error('Error posting data:', error);
      setError(error.toString());
    }
  };

  // Fungsi untuk mengirim data dengan metode PUT
  const putDataBarang = async (id, updatedData) => {
    try {
      const response = await fetch(`http://localhost:3000/barang/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) {
        throw new Error(`Error updating data: ${response.statusText}`);
      }
      // Setelah sukses update data, fetch data terbaru
      fetchDataBarang();
    } catch (error) {
      console.error('Error updating data:', error);
      setError(error.toString());
    }
  };

  const deleteDataBarang = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/barang/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        
        throw new Error(`Error deleting data: ${response.statusText}`);
      }
      // After successfully deleting the data, fetch the latest data
      fetchDataBarang();
    } catch (error) {
      console.error('Error deleting data:', error);
      setError(error.toString());
    }
  };

  // Fetch data saat component di-mount
  useEffect(() => {
    fetchDataBarang();
    fetchDashboard();
  }, []);


  const fetchDataStok = async () => {
    try {
      const response = await fetch('http://localhost:3000/transaksiStok');
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.toString());
    }
  };

  async function fetchDatastokbarang() {
    const baseUrl = 'http://localhost:3000'; // Ganti dengan URL server JSON Anda
    const responseBarang = await fetch(`http://localhost:3000/barang`);
    const barang = await responseBarang.json();
  
    const responseTransaksiStok = await fetch(`http://localhost:3000/transaksiStok`);
    const transaksiStok = await responseTransaksiStok.json();
  
    return { barang, transaksiStok };
  }

  async function combineData() {
    const { barang, transaksiStok } = await fetchData();
  
    const transaksiWithBarang = transaksiStok.map(transaksi => {
      const barangDetail = barang.find(b => b.id_barang === transaksi.id_barang);
      return {
        ...transaksi,
        barang: barangDetail
      };
    });
  
    setDataStok(transaksiWithBarang);
  }

  async function fetchDashboard() {
    try {
      const response = await fetch('http://localhost:3000/dashboard');
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      const fetchedData = await response.json();
      setDataDashboard(fetchedData);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.toString());
    }
  }
  

  // Menyediakan data dan fungsi ke context
  const value = { data, dataStok, error, dataDashboard, postDataBarang, putDataBarang, fetchDataBarang, deleteDataBarang, combineData };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

// Custom hook untuk menggunakan DataContext
export const useData = () => useContext(DataContext);
