import type { Request, Response } from 'express';
import { getAllUsuarios, getUsuarioById, createUsuario, getBasicInfoUsuario } from "./usuarios.service";

export const obtenerUsuarios = async (req: Request, res: Response) => {
    const usuarios = await getAllUsuarios();
    res.json(usuarios);
};

export const obtenerUsuarioPorId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const usuario = await getUsuarioById(Number(id));
    if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.json(usuario);
};

export const crearUsuario = async (req: Request, res: Response) => {
    const usuario = await createUsuario(req.body);
    res.status(201).json(usuario);
};

export const obtenerInfoBasicaUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const usuario = await getBasicInfoUsuario(Number(id));
    if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.json(usuario);
};