import { createRequire } from "module";
import envlocal from "dotenv";

envlocal.config();
const require = createRequire(import.meta.url);

export const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
//Set up default mongoose connection

const DB = process.env.DATABASE || "mongodb+srv://kartikhatwar98:9371865060k@cluster0.w3714lm.mongodb.net/Text-Tools?retryWrites=true&w=majority";
mongoose.connect(DB, { useNewUrlParser: true }).then(()=>{
    // console.log('Connected');
})
