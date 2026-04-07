# Mutant Detector

Un proyecto Angular 17 para detectar si un humano es mutante basándose en su secuencia de ADN.

## Características

- **Algoritmo eficiente**: Implementación optimizada para detectar secuencias de 4 letras idénticas en horizontal, vertical y diagonal
- **Interfaz moderna**: Diseño creativo con TailwindCSS y animaciones
- **Validación robusta**: Verificación de entrada y manejo de errores
- **Pruebas unitarias**: Cobertura completa del algoritmo
- **Responsive**: Adaptable a diferentes tamaños de pantalla

## ¿Cómo funciona?

El sistema analiza una matriz de ADN (NxN) que contiene las bases nitrogenadas A, T, C, G. 
Se considera mutante si se encuentran más de una secuencia de 4 letras idénticas consecutivamente en:
- Horizontal
- Vertical  
- Diagonal (ambas direcciones)

## Ejemplo de ADN Mutante

```
ATGCGA
CAGTGC
TTATGT
AGAAGG
CCCCTA
TCACTG
```

## Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

## Uso

1. Ingresa la secuencia de ADN en el campo de texto (separada por comas)
2. Visualiza la matriz de ADN en tiempo real
3. Haz clic en "Analizar ADN" para determinar si es mutante
4. Usa los botones de ejemplo para probar casos predefinidos

## Estructura del Proyecto

```
src/
  app/
    services/
      mutant.service.ts      # Lógica de detección de mutantes
    home/
      home.component.ts       # Componente principal
      home.component.html    # Interfaz de usuario
      home.component.scss    # Estilos
    app.config.ts            # Configuración de la app
    app.routes.ts            # Rutas
    app.component.ts         # Componente raíz
```

## Algoritmo

El servicio `MutantService` implementa un algoritmo O(n²) que:
1. Valida la matriz de ADN (cuadrada, caracteres válidos)
2. Busca secuencias horizontales
3. Busca secuencias verticales
4. Busca secuencias diagonales (ambas direcciones)
5. Retorna true si encuentra más de una secuencia

## Pruebas

```bash
# Ejecutar pruebas unitarias
npm test
```

## Tecnologías

- **Angular 17**: Framework frontend
- **TypeScript**: Lenguaje tipado
- **TailwindCSS**: Framework de CSS
- **SCSS**: Preprocesador de CSS
- **Jasmine**: Framework de pruebas
