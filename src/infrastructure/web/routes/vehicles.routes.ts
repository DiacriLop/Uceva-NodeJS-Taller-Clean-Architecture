import { Router } from "express";
import { VehicleRepositoryImpl } from "../../repositories/vehicle-node.impl";
import { VehiclesController } from "../controllers/vehicles.controller";
import { GetAllVehiclesUseCase } from "../../../application/usecases/get-all-vehicles.usecase";
import { VehicleDatasource } from "../../datasources/vehicle.datasource";

export class VehiclesRoutes {
  static get routes(): Router {
    const router = Router();
    const repository = new VehicleRepositoryImpl(new VehicleDatasource());
    const getAllVehicles = new GetAllVehiclesUseCase(repository);
    const controller = new VehiclesController(getAllVehicles);

    /**
     * @openapi
     * /api/vehicles/{countVehicles}:
     *   get:
     *     summary: Obtener listado de vehículos
     *     description: Retorna una lista de vehículos generados dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Vehicles
     *     parameters:
     *       - in: path
     *         name: countVehicles
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de vehículos a generar
     *     responses:
     *       200:
     *         description: Lista de vehículos generados
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Vehicle'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countVehicles", controller.getAllVehicles);

    return router;
  }
}