import prisma from "../../utils/prismaClient";

// Obtener todos los simuladores
export const getAllSimuladores = async () => {
  try {
    return await prisma.simulador.findMany();
  } catch (error) {
    throw new Error("Error al obtener los simuladores");
  }
};

// Obtener un simulador por su ID
export const getSimuladorById = async (id: number) => {
  try {
    const simulador = await prisma.simulador.findUnique({ where: { id } });
    if (!simulador) {
      throw new Error("Simulador no encontrado");
    }
    return simulador;
  } catch (error) {
    throw new Error("Error al obtener el simulador");
  }
};

// Crear un nuevo simulador
export const createSimulador = async (data: any) => {
  try {
    return await prisma.simulador.create({ data });
  } catch (error) {
    throw new Error("Error al crear el simulador");
  }
};

// Actualizar un simulador existente
export const updateSimulador = async (id: number, data: any) => {
  try {
    return await prisma.simulador.update({
      where: { id },
      data,
    });
  } catch (error) {
    throw new Error("Error al actualizar el simulador");
  }
};

// Eliminar un simulador
export const deleteSimulador = async (id: number) => {
  try {
    await prisma.simulador.delete({ where: { id } });
  } catch (error) {
    throw new Error("Error al eliminar el simulador");
  }
};
