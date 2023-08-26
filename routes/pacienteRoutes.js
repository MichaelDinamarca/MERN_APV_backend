import express from 'express';
const router = express.Router();
import { agregarPaciente, obtenerPacientes, obtenerPaciente,
    actualizarPaciente, eliminarPaciente } from '../controllers/pacienteController.js';
import checkAuth from '../middleware/authMiddleware.js'

router
.route("/")
.post(checkAuth, agregarPaciente)
.get(checkAuth, obtenerPacientes);//con el check.. verificamos el veteri

router
    .route("/:id")//aqui seria la variable con la id del paciente
    .get(checkAuth, obtenerPaciente)//req autenticado que obtiene un paciente
    .put(checkAuth, actualizarPaciente)//put o patch para actualizar(hacen casi lo mismo)
    .delete(checkAuth, eliminarPaciente)

export default router;