import express from 'express';
import { registrar, perfil, confirmar, autenticar, olvidePassword,
comprobarToken, nuevoPassword, actualizarPerfil, actualizarPassword } from '../controllers/veterinarioController.js';
import checkAuth from '../middleware/authMiddleware.js';
const router = express.Router();

//Area publica
//estas rutas son de express y las del frontend de React
router.post("/", registrar);

router.get("/confirmar/:token", confirmar);//los : dejan pasar un parametro dinamico

router.post("/login", autenticar);

router.post("/olvide-password", olvidePassword);

router.get("/olvide-password/:token", comprobarToken);
router.post("/olvide-password/:token", nuevoPassword);
//router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

//Area privada
router.get("/perfil", checkAuth, perfil);//cuando abrimos perfil se va check.. ejecuta y con next pasa a el sig middleware perfil
router.put("/perfil/:id", checkAuth, actualizarPerfil);
router.put("/actualizar-password", checkAuth, actualizarPassword);

export default router;