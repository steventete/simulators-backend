import type { Request, Response } from "express";
import * as tipoSimuladorService from "./tipos_simuladores.service";

// Obtener todos los tipos de simuladores
export const getTiposSimuladores = async (req: Request, res: Response) => {
  try {
    const tiposSimuladores =
      await tipoSimuladorService.getAllTiposSimuladores();
    res.json(tiposSimuladores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un tipo de simulador por ID
export const getTipoSimulador = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const tipoSimulador = await tipoSimuladorService.getTipoSimuladorById(
      parseInt(id)
    );
    res.json(tipoSimulador);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Crear un nuevo tipo de simulador
export const createTipoSimulador = async (req: Request, res: Response) => {
  const { nombre } = req.body;
  const data = { nombre };
  try {
    const nuevoTipoSimulador = await tipoSimuladorService.createTipoSimulador(
      data
    );
    res.status(201).json({
      message: "Tipo de simulador creado con éxito",
      tipoSimulador: nuevoTipoSimulador,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un tipo de simulador
export const updateTipoSimulador = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre } = req.body;
  const data = { nombre };
  try {
    const tipoSimuladorActualizado =
      await tipoSimuladorService.updateTipoSimulador(parseInt(id), data);
    res.json({
      message: "Tipo de simulador actualizado con éxito",
      tipoSimulador: tipoSimuladorActualizado,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un tipo de simulador
export const deleteTipoSimulador = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await tipoSimuladorService.deleteTipoSimulador(parseInt(id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
