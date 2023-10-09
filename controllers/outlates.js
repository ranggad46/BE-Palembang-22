import { request, response } from "express";
import sequelize from "../config/sequelize.js"
import Outlates from "../models/outlates.js";

export const getOutlates = async (request, response) =>{
  const listOutlates = await sequelize.models.Outlates.findAll();
  response.json({
    data: listOutlates,
    message: 'Outlates telah didapatkan'
  });
}

export const postOutlates =  (request, response) =>{
  const {kota, kategori, no_telp} = request.body;

  sequelize.models.Outlates.create({
    kota,
    kategori,
    no_telp
  });
  response.json({
    message: "Data Created succeccfully"
  });
} 