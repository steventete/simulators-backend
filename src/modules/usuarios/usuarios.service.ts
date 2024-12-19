import prisma from "../../utils/prismaClient";

export const getAllUsuarios = async () => {
    return await prisma.usuario.findMany();
};

export const getBasicInfoUsuario = async (cedula: number) => {
    return await prisma.usuario.findFirst({
        select: {
            cedula: true,
            nombre: true,
            apellido: true,
            email: true,
            rol_id: true,
        },
    });
}

export const getUsuarioById = async (cedula: number) => {
    return await prisma.usuario.findUnique({ where: { cedula } });
};

export const createUsuario = async (data: any) => {
    return await prisma.usuario.create({ data });
};
