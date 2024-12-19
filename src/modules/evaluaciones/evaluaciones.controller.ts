import type { Request, Response, NextFunction } from "express";
import * as evaluacionService from "./evaluaciones.service";

export const getEvaluaciones = async (req: Request, res: Response) => {
  try {
    const evaluaciones = await evaluacionService.getAllEvaluaciones();
    res.json(evaluaciones);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Error desconocido" });
    }
  }
};

export const getEvaluacion = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const { id } = req.params;
  try {
    const evaluacion = await evaluacionService.getEvaluacionById(parseInt(id));
    if (!evaluacion) {
      return res.status(404).json({ error: "Evaluación no encontrada" });
    }
    res.json(evaluacion);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Error desconocido" });
    }
  }
};

export const createEvaluacion = async (req: Request, res: Response) => {
  const { usuario_id, proyecto_id, simulacion_id, resultado } = req.body;
  const data = { usuario_id, proyecto_id, simulacion_id, resultado };
  try {
    const nuevaEvaluacion = await evaluacionService.createEvaluacion(data);
    res.status(201).json({ message: "Evaluación creada con éxito", evaluacion: nuevaEvaluacion });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Error desconocido" });
    }
  }
};

export const getEvaluacionesByProyectoId = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const evaluaciones = await evaluacionService.getEvaluacionesByProyectoId(parseInt(id));
    res.json(evaluaciones);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Error desconocido" });
    }
  }
}

export const updateEvaluacion = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { resultado } = req.body;
  const data = { resultado };
  try {
    const evaluacionActualizada = await evaluacionService.updateEvaluacion(parseInt(id), data);
    res.json({ message: "Evaluación actualizada con éxito", evaluacion: evaluacionActualizada });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Error desconocido" });
    }
  }
};

export const deleteEvaluacion = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await evaluacionService.deleteEvaluacion(parseInt(id));
    res.status(204).send();
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Error desconocido" });
    }
  }
};