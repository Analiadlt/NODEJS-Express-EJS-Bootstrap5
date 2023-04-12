import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./routes/index.js";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url)); //detecta la ruta absoluta del archivo

app.set("views", join(__dirname, "views")); //indico donde están las vistas
app.set("view engine", "ejs"); //nos permite agregar js al html
app.use(indexRoutes);
app.use(express.static(join(__dirname, "public"))); //indico dónde está el css

app.listen(3000);
console.log("Server is listening at port: ", 3000);
