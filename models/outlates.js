import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Outlates = sequelize.define("Outlates",{
  kota: DataTypes.STRING,
  alamat: DataTypes.STRING,
  no_telp: DataTypes.STRING
})

export default Outlates;