'use strict';
const {
  Model
} = require('sequelize');
const {generateId} = require('../utils/generateId');
module.exports = (sequelize, DataTypes) => {
  class TransStok extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TransStok.belongsTo(models.Barang, { 
        foreignKey: 'kode_barang', 
      });
    }
  }
  TransStok.init({
    kode_trans: { 
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      defaultValue: () => generateId(), // Menggunakan fungsi generateId sebagai nilai default
      unique: true // Pastikan setiap id unik
    },
    kode_barang: { 
      type: DataTypes.STRING, 
      references: {
        model: 'Barang',
        key: 'kode_barang'
      },
    },
    tanggal_trans: { 
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date()
    },
    jenis_trans: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    supplier: DataTypes.STRING,
    tujuan: DataTypes.STRING,
    jumlah: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stok_awal: DataTypes.INTEGER,
    stok_akhir: DataTypes.INTEGER,
    catatan: DataTypes.STRING
    }, {
    sequelize,
    modelName: 'TransStok',
    tableName: 'TransStoks'
    });
  return TransStok;
};