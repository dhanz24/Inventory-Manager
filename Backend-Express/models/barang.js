'use strict';
const {
  Model
} = require('sequelize');
const {generateIdBrg} = require('../utils/generateId');
module.exports = (sequelize, DataTypes) => {
  class Barang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Barang.init({
    kode_barang: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      defaultValue: () => generateIdBrg(), // Menggunakan fungsi generateIdBrg sebagai nilai default
      unique: true // Pastikan setiap kode_barang adalah unik
    },
    nama_barang: {
      type: DataTypes.STRING,
      allowNull: false
    },
    harga: DataTypes.INTEGER,
    minimal: DataTypes.INTEGER,
    maksimal: DataTypes.INTEGER,
    stok: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    foto_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Barang',
    tableName: 'Barangs'
  });
  return Barang;
};