import { Vehicle } from "../../domain/models/vehicle.model";
import { VehicleRepository} from "../../domain/repositories/vehicle.repository";
/**
 * Caso de uso para obtener el listado completo de vehículos.
 * @remarks
 * Forma parte de la **capa de Application** y define
 * una acción concreta que la aplicación puede ejecutar.
 *
 * Este caso de uso:
 * - Orquesta el acceso a datos
 * - Aplica reglas de negocio si es necesario
 * - Aísla la lógica de la UI y la infraestructura
 *
 * Depende únicamente del contrato
 * {@link VehicleRepository}.
 *
 * @see {@link VehicleRepository}
 * @see {@link Vehicle}
 */
export class GetAllVehiclesUseCase {

  /**
   * Crea una nueva instancia del caso de uso.
   *
   * @param vehicleRepository - Repositorio de vehículos
   * utilizado para acceder a la información
   */
  constructor(private vehicleRepository: VehicleRepository) {}

  /**
   * Ejecuta el caso de uso.
   *
   * @remarks
   * Obtiene una cantidad específica de vehículos
   * utilizando el repositorio del dominio.
   *
   * En este nivel se pueden implementar:
   * - Validaciones de entrada
   * - Reglas de negocio de la aplicación
   * - Composición de múltiples operaciones
   *
   * @param countVehicles - Cantidad de vehículos a obtener
   * @returns Promesa que resuelve un arreglo de {@link Vehicle}
   *
   * @example
   * ```ts
   * const useCase = new GetAllVehiclesUseCase(vehicleRepository);
   * const vehicles = await useCase.execute(5);
   * ```
   */
  execute(countVehicles: number): Promise<Vehicle[]> {
    return this.vehicleRepository.getAll(countVehicles);
  }
}