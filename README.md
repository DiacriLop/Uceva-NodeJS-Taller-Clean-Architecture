# Clean Architecture en NodeJS

```
src
├── domain
│   ├── models
│   │   ├── user.entity.ts
│   │   ├── product.entity.ts
│   │   ├── vehicle.entity.ts
│   │   └── dealership.entity.ts
│   └── repositories
│       ├── user.repository.ts
│       ├── product.repository.ts
│       ├── vehicle.repository.ts
│       └── dealership.repository.ts
│
├── application
│   └── use-cases
│       ├── get-all-users.usecase.ts
│       ├── get-all-products.usecase.ts
│       ├── get-all-vehicles.usecase.ts
│       └── get-all-dealerships.usecase.ts
│
├── infrastructure
│   ├── controllers
│   │   ├── user.controller.ts
│   │   ├── product.controller.ts
│   │   ├── vehicle.controller.ts
│   │   └── dealership.controller.ts
│   ├── repositories
│   │   ├── user.repository.impl.ts
│   │   ├── product.repository.impl.ts
│   │   ├── vehicle.repository.impl.ts
│   │   └── dealership.repository.impl.ts
│   ├── datasources
│   │   ├── user.datasource.ts
│   │   ├── product.datasource.ts
│   │   ├── vehicle.datasource.ts
│   │   └── dealership.datasource.ts
│   └── web
│       ├── config/
│       ├── errors/
│       ├── interfaces/
│       ├── controllers/
│       ├── routes/
│       └── server.ts
│
└── app.ts
```

## Paso 1 - Crear Modelos

```
src/domain/models/
├── user.model.ts
├── product.model.ts
├── vehicle.model.ts
└── dealership.model.ts
```

## Paso 2 - Crear Repositorios

```
src/domain/repositories/
├── user.repository.ts
├── product.repository.ts
├── vehicle.repository.ts
└── dealership.repository.ts
```

## Paso 3 - Crear Casos de Uso

```
src/application/usecases/
├── get-all-users.usecase.ts
├── get-all-products.usecase.ts
├── get-all-vehicles.usecase.ts
└── get-all-dealerships.usecase.ts
```

## Paso 4 - Crear Datasources

```
src/infrastructure/datasource/
├── user.datasource.ts
├── product.datasource.ts
├── vehicle.datasource.ts
└── dealership.datasource.ts
```

## Paso 5 - Crear Repositorios Implementadores

```
src/infrastructure/repositories/
├── user.repository.impl.ts
├── product.repository.impl.ts
├── vehicle.repository.impl.ts
└── dealership.repository.impl.ts
```

## Paso 6 - Implementar Web (Express – Framework Externo)

```
src/infrastructure/web/
├── config/
├── errors/
├── interfaces/
├── controllers/
├── routes/
└── server.ts
```

# Funcionamiento del Backend

## Ejecutar Backend
```
npm run start
```

## Urls Consumo
```
http://localhost:3000/api/docs
http://localhost:3000/api/users/{countUsers}
http://localhost:3000/api/products/{countProducts}
http://localhost:3000/api/vehicles/{countVehicles}
http://localhost:3000/api/dealerships/{countDealerships}
```