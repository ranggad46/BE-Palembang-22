import { request, response } from "express";
import sequelize from "../config/sequelize.js";
import Products from "../models/products.js";

export const getProducts = async (request, response) =>{
  const listProducts = await sequelize.models.Products.findAll();
  response.json({
    data: listProducts,
    message: 'Product telah didapatkan'
  });
}


export const postProducts =  (request, response) =>{
  const {nama_paket, asal, tujuan, harga_normal, tambahan} = request.body;

  sequelize.models.Products.create({
    nama_paket,
    asal,
    tujuan,
    harga_normal,
    tambahan
  });
  response.json({
    message: "Data Created succeccfully" 
  });
} 


