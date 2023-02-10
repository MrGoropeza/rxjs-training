# RxJS Training

Repo para practicar RxJS

# Arquitectura

src/
└── app/
    ├── feature1/
    │   ├── data-access
    │   ├── feature/
    │   │   └── feature1-shell
    │   ├── ui
    │   └── utils
    ├── feature2/
    │   ├── data-access
    │   ├── feature/
    │   │   └── feature2-shell
    │   ├── ui
    │   └── utils
    ├── shared/
    │   ├── data-access
    │   └── ui
    └── home/
        ├── data-access
        └── feature/
            ├── home.html
            ├── home.scss
            ├── home.ts
            ├── home.module.ts
            └── home-routing.module.ts

- "feature-name": carpeta para colocar todo el codigo relacionado a una funcionalidad de la aplicacion

  - data-access: carpeta para poner codigo el cual se comunica con data externa (generalmente servicios o stores)
  - feature: carpeta para poner "Smart Components"
    - "feature-name"-shell: carpeta para manejar el routing de la feature actual.
  - ui: carpeta para poner "Dumb Components"
  - utils: carpeta para colocar cualquier utilidad para la feature actual

- shared: carpeta para poner codigo que varias features comparten

  - ui: carpeta para poner componentes, directivas, pipes, etc.

- home: carpeta para poner codigo del componente inicial de la app

Todos los componentes, directivas, pipes, etc, deben utilizar el patron SCAM (Single Component Angular Module). A partir de Angular v15+, se reemplazarian los SCAMs con Standalone Components.

En el app.routing hacemos lazy loading con los Shells Modules.
