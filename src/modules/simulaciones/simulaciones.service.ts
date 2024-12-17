import prisma from "../../utils/prismaClient";

export const getAllSimulaciones = async () => {
  return await prisma.simulacion.findMany({
    include: {
      usuario: true,
      simulador: true,
    },
  });
};

export const getSimulacionById = async (id: number) => {
  return await prisma.simulacion.findUnique({
    where: { id },
    include: {
      usuario: true,
      simulador: true,
    },
  });
};

export const createSimulacion = async (data: any) => {
  return await prisma.simulacion.create({
    data,
  });
};

export const updateSimulacion = async (id: number, data: any) => {
  return await prisma.simulacion.update({
    where: { id },
    data,
  });
};

export const deleteSimulacion = async (id: number) => {
  return await prisma.simulacion.delete({
    where: { id },
  });
};
