import mongoose from "mongoose";
import{connectDb} from "./helpers/db";



const express = require('express')
const app = express()

app.listen(3000, () => console.log('Server Started'))
mongoose.connect("mongodb://localhost:27017")


export const server = express()