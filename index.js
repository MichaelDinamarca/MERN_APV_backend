import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from "./config/db.js";
import veterinarioRoutes from "./routes/veterinarioRoutes.js";
import pacienteRoutes from "./routes/pacienteRoutes.js";

const app = express();
app.use(express.json());
dotenv.config();
conectarDB();

const dominiosPermitidos = [process.env.FRONTEND_URL];

const corsOptions = { 
    origin: function(origin, callback){
        if(dominiosPermitidos.indexOf(origin) !== -1){
            callback(null, true)
        }else{
            callback(new Error('No Permitido por CORS'))
        }
    }
};

app.use(cors(corsOptions));

console.log(process.env.MONGO_URI);

app.use("/api/veterinarios", veterinarioRoutes); 
app.use("/api/pacientes", pacienteRoutes); 


const PORT = process.env.PORT || 4000;

//AQUI creamos el servidor y le damos un puerto
app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto: ${PORT}`);
});
