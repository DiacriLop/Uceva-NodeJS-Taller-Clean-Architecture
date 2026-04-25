import { Dealership } from "../../domain/models/dealership.model";
import { DealershipRepository } from "../../domain/repositories/dealership.repository";
import { DealershipDatasource } from "../datasources/dealership.datasource";

/**
 * Implementación concreta del repositorio de concesionarios.
 *
 * @remarks
 * Forma parte de la **capa de Infrastructure** y cumple
 * el rol de **Adapter** entre el dominio y la fuente de datos.
 *
 * Implementa el contrato {@link DealershipRepository}
 * utilizando {@link DealershipDatasource} como datasource.
 *
 * Este patrón permite:
 * - Desacoplar el dominio de detalles técnicos
 * - Sustituir la fuente de datos sin afectar casos de use
 * - Facilitar pruebas unitarias mediante mocks
 *
 * @see {@link DealershipRepository}
 * @see {@link DealershipDatasource}
 */
export class DealershipRepositoryImpl extends DealershipRepository {

/**
   * Crea una nueva instancia del repositorio de concesionarios.
   *
   * @param datasource - Fuente de datos encargada
   * de generar u obtener los concesionarios
   */
constructor(private datasource: DealershipDatasource) {
    super();
}

/**
   * Obtiene el listado de concesionarios.
   *
   * @remarks
   * Implementa el método definido en
   * {@link DealershipRepository#getAll}.
   *
   * En esta capa se pueden aplicar:
   * - Transformaciones de datos
   * - Validaciones técnicas
   * - Manejo de errores
   *
   * @param countDealerships - Cantidad de concesionarios a obtener
   * @returns Promesa que resuelve un arreglo de {@link Dealership}
   *
   * @example
   * ```ts
   * const repository = new DealershipRepositoryImpl(new DealershipDatasource());
   * const dealerships = await repository.getAll(5);
   * ```
   */
getAll(countDealerships: number): Promise<Dealership[]> {
    return this.datasource.getAll(countDealerships);
}
}