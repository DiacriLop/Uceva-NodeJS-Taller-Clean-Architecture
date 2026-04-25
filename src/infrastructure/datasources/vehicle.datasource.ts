import { faker } from '@faker-js/faker';
import { Vehicle, VehicleCategory } from "../../domain/models/vehicle.model";


/**
 * Datasource encargado de generar vehículos simulados.
 *
 * @remarks
 * Forma parte de la **capa de Infrastructure** y actúa como
 * una fuente de datos temporal para desarrollo y pruebas.
 *
 * Utiliza la librería {@link https://www.npmjs.com/package/@faker-js/faker | faker}
 * para generar información aleatoria de vehículos.
 *
 * ❗ No contiene reglas de negocio.
 * ❗ No debe ser consumido directamente por casos de uso.
 *
 * Es utilizado por `VehicleRepositoryImpl`.
 */
export class VehicleDatasource {


    /**
     * Categorías disponibles para los vehículos simulados.
     *
     * @remarks
     * Se selecciona una categoría de forma aleatoria
     * al generar cada vehículo.
     */
    private VehicleCategories: VehicleCategory[] = [
        'Sedan',
        'SUV',
        'Camioneta',
    ];

    /**
     * Obtiene una lista de vehículos simulados.
     *
     * @remarks
     * Genera dinámicamente una cantidad específica de vehículos
     * con datos aleatorios.
     *
     * @param countVehicles - Cantidad de vehículos a generar
     * @returns Promesa que resuelve un arreglo de {@link Vehicle}
     *
     * @example
     * ```ts
     * const datasource = new VehicleDatasource();
     * const vehicles = await datasource.getAll(5);
     * ```
     */
    async getAll(countVehicles: number): Promise<Vehicle[]> {
        const vehicles: Promise<Vehicle>[] = [];

        for (let i = 1; i <= countVehicles; i++) {
            vehicles.push(this.generateVehicle(i));
        }

        return Promise.all(vehicles);
    }

    /**
     * Genera un vehículo individual con datos simulados.
     *
     * @remarks
     * Método interno utilizado únicamente por el datasource
     * para construir vehículos aleatorios.
     *
     * @param id - Identificador único del vehículo
     * @returns Promesa que resuelve un {@link Vehicle}
     */
    private generateVehicle(id: number): Promise<Vehicle> {
        return Promise.resolve({
        id,
        brand: faker.vehicle.manufacturer(),
        category: faker.helpers.arrayElement(this.VehicleCategories),
        price:faker.commerce.price({ min: 1000, max: 100000, dec: 0, symbol: '$' }),
        year: faker.number.int({ min: 1990, max: 2026 }),
        });
    }


}