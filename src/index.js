//Esto es para importa el servidor express
import  express  from "express";
import ejs from "ejs";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

app.set('views', )
app.set('view engine', ejs);

app.get('/', (reg,res) => res.render('index'));

app.listen(3000);

console.log('Sever is Listing on Port: 3000');