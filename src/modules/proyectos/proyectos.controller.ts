import type { Request, Response } from "express";
import prisma from "../../utils/prismaClient";

export const getProyectos = async (req: Request, res: Response) => {
  try {
    const proyectos = await prisma.proyecto.findMany({
      include: {
        creador: { select: { nombre: true, email: true } },
      },
    });
    res.json(proyectos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los proyectos" });
  }
};

export const createProyecto = async (req: Request, res: Response) => {
  const { nombre, descripcion, creador_id } = req.body;

  try {
    const nuevoProyecto = await prisma.proyecto.create({
      data: {
        nombre,
        descripcion,
        creador_id,
      },
    });
    res
      .status(201)
      .json({ message: "Proyecto creado con éxito", proyecto: nuevoProyecto });
  } catch (error) {
    res.status(500).json({ error: "Error al crear el proyecto" });
  }
};

export const updateProyecto = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;

  try {
    const proyectoActualizado = await prisma.proyecto.update({
      where: { id: parseInt(id) },
      data: {
        nombre,
        descripcion,
      },
    });
    res.json({
      message: "Proyecto actualizado con éxito",
      proyecto: proyectoActualizado,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el proyecto" });
  }
};

export const deleteProyecto = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.proyecto.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el proyecto" });
  }
};
