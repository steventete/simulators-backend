import prisma from "../../utils/prismaClient";

// Obtener todos los roles
export const getAllRoles = async () => {
  return await prisma.role.findMany();
};

// Obtener un rol por su ID
export const getRoleById = async (id: number) => {
  return await prisma.role.findUnique({ where: { id } });
};

// Crear un nuevo rol
export const createRole = async (data: any) => {
  return await prisma.role.create({ data });
};

// Actualizar un rol por su ID
export const updateRole = async (id: number, data: any) => {
  return await prisma.role.update({
    where: { id },
    data,
  });
};

// Eliminar un rol por su ID
export const deleteRole = async (id: number) => {
  return await prisma.role.delete({ where: { id } });
};
