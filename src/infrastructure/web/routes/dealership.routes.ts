import { Router } from "express";
import { DealershipRepositoryImpl } from "../../repositories/dealership-node.impl";
import { DealershipDatasource } from "../../datasources/dealership.datasource";
import { GetAllDealershipsUseCase } from "../../../application/usecases/get-all-dealerships.usecase";
import { DealershipController } from "../controllers/dealership.controller";

/**
 * Configura y devuelve el Router de Express para rutas relacionadas con concesionarios.
 *
 * @remarks
 * Esta clase actúa como un **adaptador de Rutas**
 * y centraliza toda la configuración del endpoint
 * `/api/dealerships`.
 *
 * Sigue el patrón **Router Composite**:
 * - Crea un Router independiente
 * - Inyecta las dependencias necesarias
 * - Define las rutas y sus manejadores
 *
 * Las rutas configuradas son:
 * - `GET /:countDealerships` → {@link DealershipController#getAllDealerships}
 */

export class DealershipRoutes {
    /**
   * Crea y configura las rutas para concesionarios.
   *
   * @returns Router configurado con todas las rutas de concesionarios
   */
    static get routes(): Router {
        const router = Router();
        const repository = new DealershipRepositoryImpl(new DealershipDatasource());
        const getAllDealerships = new GetAllDealershipsUseCase(repository);
        const controller = new DealershipController(getAllDealerships);

        /**
         * @openapi
         * /api/dealerships/{countDealerships}:
         *   get:
         *     summary: Obtener listado de concesionarios
         *     description: Retorna una lista de concesionarios generados dinámicamente según la cantidad solicitada.
         *     tags:
         *       - Dealerships
         *     parameters:
         *       - in: path
         *         name: countDealerships
         *         required: true
         *         schema:
         *           type: integer
         *           minimum: 1
         *           example: 10
         *         description: Cantidad de concesionarios a generar
         *     responses:
         *       200:
         *         description: Lista de concesionarios generados
         *         content:
         *           application/json:
         *             schema:
         *               type: array
         *               items:
         *                 $ref: '#/components/schemas/Dealership'
         *       400:
         *         description: Parámetro inválido
         */
        router.get("/:countDealerships", controller.getAllDealerships);

        return router;
    }
}   