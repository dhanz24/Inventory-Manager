'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TransStoks', {
      kode_trans: {
        allowNull: false,
        //autoIncrement: true,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      kode_barang: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Barangs',
          key: 'kode_barang'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      tanggal_trans: {
        type: Sequelize.DATE
      },
      jenis_trans: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: [["masuk", "keluar"]],
        },
      },
      supplier: {
        type: Sequelize.STRING
      },
      tujuan: {
        type: Sequelize.STRING
      },
      jumlah: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      stok_awal: {
        type: Sequelize.INTEGER
      },
      stok_akhir: {
        type: Sequelize.INTEGER
      },
      catatan: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TransStoks');
  }
};