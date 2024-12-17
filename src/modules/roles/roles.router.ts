import { Router } from 'express';
import { getRoles, createRole, updateRole, deleteRole } from './roles.controller';

const router = Router();

// Ruta para obtener todos los roles
router.get('/', getRoles);

// Ruta para crear un nuevo rol
router.post('/', createRole);

// Ruta para actualizar un rol por su ID
router.put('/:id', updateRole);

// Ruta para eliminar un rol por su ID
router.delete('/:id', deleteRole);

export default router;
