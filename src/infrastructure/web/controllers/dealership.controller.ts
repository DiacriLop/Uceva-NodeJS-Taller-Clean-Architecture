import { Request, Response } from "express";
import { GetAllDealershipsUseCase } from "../../../application/usecases/get-all-dealerships.usecase";
import { HandleError } from "../erros/handle.error";

/**
 * Controlador HTTP para operaciones relacionadas con concesionarios.
 *
 * @remarks
 * Forma parte de la **capa de Frameworks & Drivers**
 * y actúa como un **adaptador HTTP** entre Express
 * y la capa de Application.
 *
 * Su función es:
 * - Interpretar la request HTTP
 * - Delegar la ejecución al caso de uso
 * - Enviar la respuesta HTTP adecuada
 *
 * @see {@link GetAllDealershipsUseCase}
 */
export class DealershipController {
    /**
   * Crea una nueva instancia del controlador de concesionarios.
   *
   * @param getAllDealershipsUseCase - Caso de uso encargado
   * de obtener el listado de concesionarios
   */
    constructor(
        private getAllDealershipsUseCase: GetAllDealershipsUseCase 
    ){}
    
    /**
   * Maneja la petición HTTP para obtener concesionarios.
   *
   * @remarks
   * Obtiene el parámetro `countDealerships` desde la request,
   * ejecuta el caso de uso correspondiente y devuelve
   * la respuesta en formato JSON.
   *
   * El manejo de errores se delega al componente
   * {@link HandleError}.
   *
   * El retardo artificial (`setTimeout`) se utiliza
   * únicamente con fines demostrativos.
   *
   * @param req - Objeto Request de Express
   * @param res - Objeto Response de Express
   */
    getAllDealerships = (req: Request, res: Response): void => {
        const { countDealerships } = req.params;

        setTimeout(() => {
            this.getAllDealershipsUseCase
            .execute(Number(countDealerships))
            .then((dealerships) => res.status(201).json(dealerships))
            .catch((error) => HandleError.error(error, res));
        }, 3000);
    };
}