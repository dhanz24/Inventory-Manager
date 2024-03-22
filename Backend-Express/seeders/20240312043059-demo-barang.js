'use strict';

const { generateIdBrg } = require('../utils/generateId');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Barangs', [
      {
        kode_barang : generateIdBrg(),
        nama_barang: 'mie ayam',
        harga: 15000,
        minimal: 5,
        maksimal: 50,
        stok: 30,
        foto_url: 'https://www.google.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        kode_barang : generateIdBrg(),
        nama_barang: 'nasi goreng',
        harga: 20000,
        minimal: 8,
        maksimal: 80,
        stok: 60,
        foto_url: 'https://www.google.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        kode_barang : generateIdBrg(),
        nama_barang: 'sate',
        harga: 25000,
        minimal: 10,
        maksimal: 100,
        stok: 70,
        foto_url: 'https://www.google.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        kode_barang : generateIdBrg(),
        nama_barang: 'ayam goreng',
        harga: 30000,
        minimal: 12,
        maksimal: 120,
        stok: 90,
        foto_url: 'https://www.google.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        kode_barang : generateIdBrg(),
        nama_barang: 'soto',
        harga: 35000,
        minimal: 15,
        maksimal: 150,
        stok: 110,
        foto_url: 'https://www.google.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        kode_barang : generateIdBrg(),
        nama_barang: 'bakso',
        harga: 40000,
        minimal: 18,
        maksimal: 180,
        stok: 130,
        foto_url: 'https://www.google.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        kode_barang : generateIdBrg(),
        nama_barang: 'rendang',
        harga: 45000,
        minimal: 20,
        maksimal: 200,
        stok: 150,
        foto_url: 'https://www.google.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        kode_barang : generateIdBrg(),
        nama_barang: 'gulai',
        harga: 50000,
        minimal: 22,
        maksimal: 220,
        stok: 170,
        foto_url: 'https://www.google.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        kode_barang : generateIdBrg(),
        nama_barang: 'sambal',
        harga: 55000,
        minimal: 25,
        maksimal: 250,
        stok: 190,
        foto_url: 'https://www.google.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        kode_barang : generateIdBrg(),
        nama_barang: 'gado-gado',
        harga: 60000,
        minimal: 28,
        maksimal: 280,
        stok: 210,
        foto_url: 'https://www.google.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }


    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Barangs', null, {});
  }
};
