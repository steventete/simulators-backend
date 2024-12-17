import prisma from "../../utils/prismaClient";

// Obtener todos los tipos de simuladores
export const getAllTiposSimuladores = async () => {
  try {
    return await prisma.tipoSimulador.findMany();
  } catch (error) {
    throw new Error("Error al obtener los tipos de simuladores");
  }
};

// Obtener un tipo de simulador por su ID
export const getTipoSimuladorById = async (id: number) => {
  try {
    const tipoSimulador = await prisma.tipoSimulador.findUnique({ where: { id } });
    if (!tipoSimulador) {
      throw new Error("Tipo de simulador no encontrado");
    }
    return tipoSimulador;
  } catch (error) {
    throw new Error("Error al obtener el tipo de simulador");
  }
};

// Crear un nuevo tipo de simulador
export const createTipoSimulador = async (data: any) => {
  try {
    return await prisma.tipoSimulador.create({ data });
  } catch (error) {
    throw new Error("Error al crear el tipo de simulador");
  }
};

// Actualizar un tipo de simulador existente
export const updateTipoSimulador = async (id: number, data: any) => {
  try {
    return await prisma.tipoSimulador.update({
      where: { id },
      data,
    });
  } catch (error) {
    throw new Error("Error al actualizar el tipo de simulador");
  }
};

// Eliminar un tipo de simulador
export const deleteTipoSimulador = async (id: number) => {
  try {
    await prisma.tipoSimulador.delete({ where: { id } });
  } catch (error) {
    throw new Error("Error al eliminar el tipo de simulador");
  }
};
