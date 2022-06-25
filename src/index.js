//Esto es para importa el servidor express
import  express  from "express";
import {dirname, join} from "path";
import { fileURLToPath } from "url";

import routers from "./routers/index.js";


const app = express();

// Absolute Router / Ruta Absoluta
const __dirname = dirname(fileURLToPath(import.meta.url));

// Absolute Router of the views / Ruta Absoluta de las vistas
app.set('views', join(__dirname, "views") );

//Connects with the views through the 'ejs' model/ conecta con las vistas a través del modelo ejs
app.set('view engine', 'ejs');

//Routers
app.use(routers);

//Customs css
app.use(express.static(join(__dirname, 'public')));

//localhost
app.listen(3000);
console.log('Sever is Listing on Port: 3000');