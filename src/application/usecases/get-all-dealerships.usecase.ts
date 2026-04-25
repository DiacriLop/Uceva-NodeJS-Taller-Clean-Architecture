import { Dealership } from "../../domain/models/dealership.model";
import { DealershipRepository } from "../../domain/repositories/dealership.repository";
/**
 * Caso de uso para obtener el listado completo de concesionarios.
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
 * {@link DealershipRepository}.
 *
 * @see {@link DealershipRepository}
 * @see {@link Dealership}
 */
export class GetAllDealershipsUseCase {

  /**
   * Crea una nueva instancia del caso de uso.
   *
   * @param dealershipRepository - Repositorio de concesionarios
   * utilizado para acceder a la información
   */
  constructor(private dealershipRepository: DealershipRepository) {}

  /**
   * Ejecuta el caso de uso.
   *
   * @remarks
   * - Obtiene todos los concesionarios utilizando el repositorio del dominio.
   *
   * @returns Promesa que resuelve un arreglo de {@link Dealership}
   *
   * @example
   * ```ts
   * const useCase = new GetAllDealershipsUseCase(dealershipRepository);
   * const dealerships = await useCase.execute();
   * ```
   */
  execute(countDealerships: number): Promise<Dealership[]> {
    return this.dealershipRepository.getAll(countDealerships);
  }
}