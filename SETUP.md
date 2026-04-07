# Mutant Detector

Un proyecto Angular 17 para detectar si un humano es mutante basándose en su secuencia de ADN.

## Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

## Archivos de Configuración Agregados

He agregado los archivos de configuración necesarios para que Angular CLI reconozca el proyecto:

- `angular.json` - Configuración principal del proyecto Angular
- `tsconfig.app.json` - Configuración TypeScript para la aplicación
- `tsconfig.spec.json` - Configuración TypeScript para pruebas
- `jest.config.js` - Configuración de Jest para pruebas
- `src/test-setup.ts` - Configuración inicial de pruebas

## Estructura del Proyecto

```
mutant-detector/
├── src/
│   ├── app/
│   │   ├── services/
│   │   │   └── mutant.service.ts      # Algoritmo de detección
│   │   ├── home/
│   │   │   ├── home.component.ts       # Componente principal
│   │   │   ├── home.component.html    # Interfaz de usuario
│   │   │   └── home.component.scss    # Estilos
│   │   ├── app.config.ts              # Configuración de app
│   │   ├── app.routes.ts               # Rutas
│   │   └── app.component.ts            # Componente raíz
│   ├── index.html
│   ├── main.ts
│   ├── styles.scss
│   └── test-setup.ts
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
└── README.md
```

## Características

- ✅ **Algoritmo eficiente** O(n²) para detección de mutantes
- ✅ **Interfaz moderna** con TailwindCSS y animaciones
- ✅ **Validación robusta** de entrada de ADN
- ✅ **Visualización en tiempo real** de la matriz de ADN
- ✅ **Pruebas unitarias** completas
- ✅ **Configuración completa** de Angular 17

Ahora el proyecto debería ser reconocido correctamente por Angular CLI y puedes ejecutar `npm start` para iniciarlo.
