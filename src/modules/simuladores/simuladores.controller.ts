import type { Request, Response } from "express";
import * as simuladorService from "./simuladores.service";

export const getSimuladores = async (req: Request, res: Response) => {
  try {
    const simuladores = await simuladorService.getAllSimuladores();
    res.json(simuladores);
  } catch (error) {
    const typedError = error as Error;
    res.status(500).json({ error: typedError.message });
  }
};

export const getSimulador = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const simulador = await simuladorService.getSimuladorById(parseInt(id));
    res.json(simulador);
  } catch (error) {
    const typedError = error as Error;
    res.status(404).json({ error: typedError.message });
  }
};

export const createSimulador = async (req: Request, res: Response) => {
  const { nombre, tipo_id, descripcion } = req.body;
  const data = { nombre, tipo_id, descripcion };
  try {
    const nuevoSimulador = await simuladorService.createSimulador(data);
    res
      .status(201)
      .json({
        message: "Simulador creado con éxito",
        simulador: nuevoSimulador,
      });
  } catch (error) {
    const typedError = error as Error;
    res.status(500).json({ error: typedError.message });
  }
};

export const updateSimulador = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, tipo_id, descripcion } = req.body;
  const data = { nombre, tipo_id, descripcion };
  try {
    const simuladorActualizado = await simuladorService.updateSimulador(
      parseInt(id),
      data
    );
    res.json({
      message: "Simulador actualizado con éxito",
      simulador: simuladorActualizado,
    });
  } catch (error) {
    const typedError = error as Error;
    res.status(500).json({ error: typedError.message });
  }
};

export const deleteSimulador = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await simuladorService.deleteSimulador(parseInt(id));
    res.status(204).send();
  } catch (error) {
    const typedError = error as Error;
    res.status(500).json({ error: typedError.message });
  }
};
