import prisma from "../../utils/prismaClient";

export const getAllProyectos = async () => {
  try {
    return await prisma.proyecto.findMany();
  } catch (error) {
    throw new Error("Error al obtener los proyectos");
  }
};

export const getProyectoById = async (id: number) => {
  try {
    const proyecto = await prisma.proyecto.findUnique({ where: { id } });
    if (!proyecto) {
      throw new Error("Proyecto no encontrado");
    }
    return proyecto;
  } catch (error) {
    throw new Error("Error al obtener el proyecto");
  }
};

export const createProyecto = async (data: any) => {
  try {
    return await prisma.proyecto.create({ data });
  } catch (error) {
    throw new Error("Error al crear el proyecto");
  }
};

export const updateProyecto = async (id: number, data: any) => {
  try {
    return await prisma.proyecto.update({
      where: { id },
      data,
    });
  } catch (error) {
    throw new Error("Error al actualizar el proyecto");
  }
};

export const deleteProyecto = async (id: number) => {
  try {
    await prisma.proyecto.delete({ where: { id } });
  } catch (error) {
    throw new Error("Error al eliminar el proyecto");
  }
};
