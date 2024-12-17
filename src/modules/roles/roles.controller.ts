import type { Request, Response } from 'express';
import prisma from '../../utils/prismaClient';

export const getRoles = async (req: Request, res: Response) => {
  try {
    const roles = await prisma.role.findMany();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los roles' });
  }
};

export const createRole = async (req: Request, res: Response) => {
  const { nombre } = req.body;

  try {
    const nuevoRole = await prisma.role.create({
      data: { nombre },
    });

    res.status(201).json(nuevoRole);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el rol' });
  }
};

export const updateRole = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre } = req.body;

  try {
    const roleActualizado = await prisma.role.update({
      where: { id: parseInt(id) },
      data: { nombre },
    });

    res.json(roleActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el rol' });
  }
};

export const deleteRole = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.role.delete({
      where: { id: parseInt(id) },
    });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el rol' });
  }
};
