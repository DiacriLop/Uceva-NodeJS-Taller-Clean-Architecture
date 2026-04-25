import { Vehicle } from "../models/vehicle.model";

/**
 * Contrato del repositorio de vehículos.
 *
 * @remarks
 * Forma parte de la **capa de Domain** y representa
 * una abstracción de acceso a datos de vehículos.
 *
 * Define qué operaciones están disponibles para
 * los casos de uso, sin exponer detalles técnicos
 * ni decisiones de infraestructura.
 *
 * Las implementaciones concretas viven en la capa
 * de *Infrastructure*.
 *
 * @see {@link Vehicle}
 */
export abstract class VehicleRepository {

  /**
   * Obtiene un listado de vehículos.
   *
   * @remarks
   * Representa una operación del dominio relacionada
   * con la obtención de vehículos.
   *
   * No define:
   * - Cómo se obtienen los datos
   * - Desde qué fuente provienen
   * - Qué tecnología se utiliza
   *
   * @param countVehicles - Cantidad de vehículos a obtener
   * @returns Promesa que resuelve un arreglo de {@link Vehicle}
   */
  abstract getAll(countVehicles: number): Promise<Vehicle[]>;
}