'use strict';

const { generateId, generateIdBrg } = require('../utils/generateId');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TransStoks', [
      {
        kode_trans : generateId(),
        kode_barang: "BRG5lI6",
        tanggal_trans: new Date,
        jenis_trans: 'masuk',
        supplier: 'udin',
        tujuan: '',
        jumlah: 40,
        stok_awal: 10,
        stok_akhir: 50,
        catatan: 'barang masuk dari udin q1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        kode_trans: generateId(),
        kode_barang: "BRG5lI6",
        tanggal_trans: new Date,
        jenis_trans: 'masuk',
        supplier: 'supplier1',
        tujuan: '',
        jumlah: 20,
        stok_awal: 30,
        stok_akhir: 50,
        catatan: 'barang masuk dari supplier1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        kode_trans: generateId(),
        kode_barang: "BRGAUFB",
        tanggal_trans: new Date,
        jenis_trans: 'keluar',
        supplier: '',
        tujuan: 'gudang C',
        jumlah: 15,
        stok_awal: 50,
        stok_akhir: 35,
        catatan: 'barang keluar ke gudang C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        kode_trans: generateId(),
        kode_barang: "BRGAUFB",
        tanggal_trans: new Date,
        jenis_trans: 'masuk',
        supplier: 'supplier2',
        tujuan: '',
        jumlah: 25,
        stok_awal: 40,
        stok_akhir: 65,
        catatan: 'barang masuk dari supplier2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        kode_trans: generateId(),
        kode_barang: "BRGAUFB",
        tanggal_trans: new Date,
        jenis_trans: 'keluar',
        supplier: '',
        tujuan: 'gudang D',
        jumlah: 10,
        stok_awal: 65,
        stok_akhir: 55,
        catatan: 'barang keluar ke gudang D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        kode_trans: generateId(),
        kode_barang: "BRGAUFB",
        tanggal_trans: new Date,
        jenis_trans: 'masuk',
        supplier: 'supplier3',
        tujuan: '',
        jumlah: 30,
        stok_awal: 55,
        stok_akhir: 85,
        catatan: 'barang masuk dari supplier3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        kode_trans: generateId(),
        kode_barang: "BRGAUFB",
        tanggal_trans: new Date,
        jenis_trans: 'keluar',
        supplier: '',
        tujuan: 'gudang E',
        jumlah: 20,
        stok_awal: 85,
        stok_akhir: 65,
        catatan: 'barang keluar ke gudang E',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        kode_trans: generateId(),
        kode_barang: "BRGijlC",
        tanggal_trans: new Date,
        jenis_trans: 'masuk',
        supplier: 'supplier4',
        tujuan: '',
        jumlah: 35,
        stok_awal: 65,
        stok_akhir: 100,
        catatan: 'barang masuk dari supplier4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        kode_trans: generateId(),
        kode_barang: "BRGijlC",
        tanggal_trans: new Date,
        jenis_trans: 'keluar',
        supplier: '',
        tujuan: 'gudang F',
        jumlah: 25,
        stok_awal: 100,
        stok_akhir: 75,
        catatan: 'barang keluar ke gudang F',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        kode_trans: generateId(),
        kode_barang: "BRGijlC",
        tanggal_trans: new Date,
        jenis_trans: 'masuk',
        supplier: 'supplier5',
        tujuan: '',
        jumlah: 40,
        stok_awal: 75,
        stok_akhir: 115,
        catatan: 'barang masuk dari supplier5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        kode_trans: generateId(),
        kode_barang: "BRGijlC",
        tanggal_trans: new Date,
        jenis_trans: 'keluar',
        supplier: '',
        tujuan: 'gudang G',
        jumlah: 30,
        stok_awal: 115,
        stok_akhir: 85,
        catatan: 'barang keluar ke gudang G',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TransStoks', null, {});
  }
};
