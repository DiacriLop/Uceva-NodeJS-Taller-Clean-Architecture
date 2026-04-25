import { faker } from '@faker-js/faker';
import { Dealership, DealershipContinent } from "../../domain/models/dealership.model";

/**
 * Datasource encargado de generar concesionarios simulados.
 *
 * @remarks
 * Forma parte de la **capa de Infrastructure** y actúa como
 * una fuente de datos temporal para desarrollo y pruebas.
 *
 * Utiliza la librería {@link https://www.npmjs.com/package/@faker-js/faker | faker}
 * para generar información aleatoria de concesionarios.
 *
 * ❗ No contiene reglas de negocio.
 * ❗ No debe ser consumido directamente por casos de uso.
 *
 * Es utilizado por `DealershipRepositoryImpl`.
 */
export class DealershipDatasource {
    /**
     * Continentes disponibles para los concesionarios simulados.
     *
     * @remarks
     * Se selecciona un continente de forma aleatoria
     * al generar cada concesionario.
     *
     * @readonly
     * @private
     */
    private DealershipContinents: DealershipContinent[] = [
        'America',
        'Europe',
        'Asia',
        'Africa',
        'Oceania',
    ];

    /**
     * Obtiene una lista de concesionarios simulados.
     *
     * @remarks
     * Genera dinámicamente una cantidad específica de concesionarios
     * con datos aleatorios.
     *
     * @param countDealerships - Cantidad de concesionarios a generar
     * @returns Promesa que resuelve un arreglo de {@link Dealership}
     *
     * @example
     * ```ts
     * const datasource = new DealershipDatasource();
     * const dealerships = await datasource.getAll(5);
     * ```
     */
    async getAll(countDealerships: number): Promise<Dealership[]> {
        const dealerships: Promise<Dealership>[] = [];

        for (let i = 1; i <= countDealerships; i++) {
            dealerships.push(this.generateDealership(i));
        }

        return Promise.all(dealerships);
    }

    /**
     * Genera un concesionario individual con datos simulados.
     *
     * @remarks
     * Método interno utilizado únicamente por el datasource
     * para construir concesionarios aleatorios.
     *
     * @param id - Identificador único del concesionario
     * @returns Promesa que resuelve un {@link Dealership}
     */
    private generateDealership(id: number): Promise<Dealership> {
        return Promise.resolve({
        id,
        name: faker.company.name(),
        location: faker.location.city(),
        continent: faker.helpers.arrayElement(this.DealershipContinents),
        });
    }


}