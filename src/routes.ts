import { Router } from "express";
import registerRouter from "./modules/register/register.router";
import loginRouter from "./modules/login/login.router";
import usuariosRouter from "./modules/usuarios/usuarios.router";
import rolesRouter from "./modules/roles/roles.router.ts";
import proyectosRouter from "./modules/proyectos/proyectos.router.ts";
import evaluacionesRouter from "./modules/evaluaciones/evaluaciones.router.ts";
import tiposSimuladoresRouter from "./modules/tipos_simuladores/tipos_simuladores.router.ts";
import simuladoresRouter from "./modules/simuladores/simuladores.router.ts";
import simulacionesRouter from "./modules/simulaciones/simulaciones.router.ts";

const router = Router();

router.use("/welcome", (req, res) => {
  res.json({ message: "Simulators API" });
});
router.use("/register", registerRouter);
router.use("/login", loginRouter);
router.use("/usuarios", usuariosRouter);
router.use("/roles", rolesRouter);
router.use("/proyectos", proyectosRouter);
router.use("/evaluaciones", evaluacionesRouter);
router.use("/tipos-simuladores", tiposSimuladoresRouter);
router.use("/simuladores", simuladoresRouter);
router.use("/simulaciones", simulacionesRouter);

export default router;
