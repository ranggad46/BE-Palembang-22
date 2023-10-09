import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import outlatesRouter from './routes/outlates.js';
import productRouter from './routes/products.js';
import sequelize from './config/sequelize.js';
import { startSequelize } from './utils/startSequelize.js';

dotenv.config();

// process.env

const app = express();
const port = process.env.PORT;

startSequelize();

// Mendefinisikan Sebuah models

sequelize.sync({ alter: true });


console.log("Models:", sequelize.models)


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.raw());
app.use(bodyParser.json());

app.use('/outlates', outlatesRouter);
app.use('/products', productRouter);

app.use((error, request, response, next) =>{
  response.status(500).json({
    message: "Internal Server Error"
  });

  console.log(error);
  next();
});

app.listen(port, () =>{
  console.log(`Server berhasil di running di port: ${port}`);
})