import { Vehicle } from "../../domain/models/vehicle.model";
import { VehicleRepository } from "../../domain/repositories/vehicle.repository";
import { VehicleDatasource } from "../datasources/vehicle.datasource";



/**
 * Implementación concreta del repositorio de vehículos.
 *
 * @remarks
 * Forma parte de la **capa de Infrastructure** y cumple
 * el rol de **Adapter** entre el dominio y la fuente de datos.
 *
 * Implementa el contrato {@link VehicleRepository}
 * utilizando {@link VehicleDatasource} como datasource.
 *
 * Este patrón permite:
 * - Desacoplar el dominio de detalles técnicos
 * - Sustituir la fuente de datos sin afectar casos de use
 * - Facilitar pruebas unitarias mediante mocks
 *
 * @see {@link VehicleRepository}
 * @see {@link VehicleDatasource}
 */
export class VehicleRepositoryImpl extends VehicleRepository {

/**
   * Crea una nueva instancia del repositorio de vehículos.
   *
   * @param datasource - Fuente de datos encargada
   * de generar u obtener los vehículos
   */
constructor(private datasource: VehicleDatasource) {
    super();
}

/**
   * Obtiene el listado de vehículos.
   *
   * @remarks
   * Implementa el método definido en
   * {@link VehicleRepository#getAll}.
   *
   * En esta capa se pueden aplicar:
   * - Transformaciones de datos
   * - Validaciones técnicas
   * - Manejo de errores
   *
   * @param countVehicles - Cantidad de vehículos a obtener
   * @returns Promesa que resuelve un arreglo de {@link Vehicle}
   *
   * @example
   * ```ts
   * const repository = new VehicleRepositoryImpl(new VehicleDatasource());
   * const vehicles = await repository.getAll(5);
   * ```
   */
getAll(countVehicles: number): Promise<Vehicle[]> {
    return this.datasource.getAll(countVehicles);
}
}