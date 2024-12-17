import type { Request, Response } from "express";
import * as simulacionService from "./simulaciones.service";

export const getSimulaciones = async (req: Request, res: Response) => {
  try {
    const simulaciones = await simulacionService.getAllSimulaciones();
    res.json(simulaciones);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Error desconocido" });
    }
  }
};

export const getSimulacion = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const simulacion = await simulacionService.getSimulacionById(parseInt(id));
    if (!simulacion) {
      return res.status(404).json({ error: "Simulación no encontrada" });
    }
    res.json(simulacion);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Error desconocido" });
    }
  }
};

export const createSimulacion = async (req: Request, res: Response) => {
  const { usuario_id, simulador_id, parametros, resultado } = req.body;
  const data = { usuario_id, simulador_id, parametros, resultado };
  try {
    const nuevaSimulacion = await simulacionService.createSimulacion(data);
    res.status(201).json({ message: "Simulación creada con éxito", simulacion: nuevaSimulacion });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Error desconocido" });
    }
  }
};

export const updateSimulacion = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { parametros, resultado } = req.body;
  const data = { parametros, resultado };
  try {
    const simulacionActualizada = await simulacionService.updateSimulacion(parseInt(id), data);
    res.json({ message: "Simulación actualizada con éxito", simulacion: simulacionActualizada });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Error desconocido" });
    }
  }
};

export const deleteSimulacion = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await simulacionService.deleteSimulacion(parseInt(id));
    res.status(204).send();
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Error desconocido" });
    }
  }
};
