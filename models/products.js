import { DataTypes } from "sequelize"
import sequelize from "../config/sequelize.js"


const Products = sequelize.define("Products",{
  nama_paket: DataTypes.STRING,
  asal: DataTypes.STRING,
  tujuan: DataTypes.STRING,
  harga_normal: DataTypes.INTEGER,
  tambahan: DataTypes.INTEGER
});

export default Products;
