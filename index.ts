import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import bodyParser from "body-parser";
import {AppDataSource} from "./src/data-source";

const app = express();
const hostname = 'localhost';
const port = 3001;

AppDataSource.initialize().then(() => {
    console.log('Connect database success')
})
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.listen(port,()=>{
    console.log(`server is running http://${hostname}:${port}/`)
})
