import prisma from "../../utils/prismaClient";

export const getAllEvaluaciones = async () => {
  return await prisma.evaluacion.findMany({
    include: {
      usuario: true,
      proyecto: true,
      simulacion: true,
    },
  });
};

export const getEvaluacionById = async (id: number) => {
  return await prisma.evaluacion.findUnique({
    where: { id },
    include: {
      usuario: true,
      proyecto: true,
      simulacion: true,
    },
  });
};

export const getEvaluacionesByProyectoId = async (proyecto_id: number) => {
  return await prisma.evaluacion.findMany({
    where: { proyecto_id },
    include: {
      usuario: {
        select: {
          cedula: true,
          nombre: true,
          apellido: true,
          email: true,
          rol_id: false,
          creado_en: false,
          clave: false,
        },
      },
      proyecto: true,
      simulacion: true,
    },
  });
};

export const createEvaluacion = async (data: any) => {
  return await prisma.evaluacion.create({
    data,
  });
};

export const updateEvaluacion = async (id: number, data: any) => {
  return await prisma.evaluacion.update({
    where: { id },
    data,
  });
};

export const deleteEvaluacion = async (id: number) => {
  return await prisma.evaluacion.delete({
    where: { id },
  });
};
