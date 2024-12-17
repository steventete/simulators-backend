import type { Request, Response } from "express";
import prisma from "../../utils/prismaClient";
import bcrypt from "bcrypt";

export const register = async (req: Request, res: Response) => {
  const { cedula, email, clave, nombre, apellido, rol_id } = req.body;

  // Validación de datos básicos
  if (!cedula || !email || !clave || !nombre || !apellido || !rol_id) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  try {
    const existingUsuario = await prisma.usuario.findUnique({ where: { email } });

    if (existingUsuario) {
      return res.status(400).json({ error: "El correo ya está registrado" });
    }

    const existingCedula = await prisma.usuario.findUnique({ where: { cedula } });

    if (existingCedula) {
      return res.status(400).json({ error: "La cédula ya está registrada" });
    }

    const hashedPassword = await bcrypt.hash(clave, 10);

    const nuevoUsuario = await prisma.usuario.create({
      data: {
        cedula,
        email,
        clave: hashedPassword,
        nombre,
        apellido,
        rol_id,
      },
    });

    res.status(201).json({ message: "Usuario registrado con éxito", usuario: nuevoUsuario });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al registrar el usuario" });
  }
};
