import { Request, Response } from "express";
import { GetAllVehiclesUseCase } from "../../../application/usecases/get-all-vehicles.usecase";
import { HandleError } from "../erros/handle.error";

/**
 * Controlador HTTP para operaciones relacionadas con vehículos.
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
 * @see {@link GetAllVehiclesUseCase}
 */
export class VehiclesController {

  /**
   * Crea una nueva instancia del controlador de vehículos.
   *
   * @param getAllVehiclesUseCase - Caso de uso encargado
   * de obtener el listado de vehículos
   */
  constructor(private getAllVehiclesUseCase: GetAllVehiclesUseCase){}


    /**
   * Maneja la petición HTTP para obtener vehículos.
   *
   * @remarks
   * Obtiene el parámetro `countVehicles` desde la request,
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
  getAllVehicles = (req: Request, res: Response): void => {
    const { countVehicles } = req.params;

    setTimeout(() => {
      this.getAllVehiclesUseCase
      .execute(Number(countVehicles))
      .then((vehicles) => res.status(201).json(vehicles))
      .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}