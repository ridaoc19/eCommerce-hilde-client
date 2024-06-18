<center><img src='./public/logo.svg' width=100 alt='logo'/></center>

# Tienda en Línea Hilde

## Descripción

El objetivo principal de este proyecto es aplicar y practicar mis conocimientos en desarrollo web, con las tecnologías que menciono a continuación.

## ⚠️ **Importante**

> **Documentación e Historias (Storybook):**
>
> Este es el repositorio del FrontEnd, puede visitar el del BackEnd en https://github.com/ridaoc19/eCommerce-hilde-server y el servidor de archivos en https://github.com/ridaoc19/eCommerce-hilde-files

## Stack

```json
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.23.1"
  }
  "devDependencies": {
    "sass": "^1.77.5",
    "eslint": "^8.57.0",
    "prettier": "^3.3.2",
    "storybook": "^8.1.10",
    "typescript": "^5.2.2",
    "@storybook/test": "^8.1.10",
    "@storybook/test-runner": "^0.18.2",
    "eslint-config-prettier": "^9.1.0",
    "eslint-config-airbnb-typescript": "^18.0.0",
  },
```

### Requisitos Previos

- Node.js (versión 18 o superior)
- npm (versión 10 o superior)

### Clonar el Repositorio

```bash
git clone https://github.com/ridaoc19/eCommerce-hilde-client
```

### Instalación de Dependencias

```bash
npm install
```

### Modo Development

```bash
npm run dev
```

### Modo Production

```bash
npm run build
```

### Ejecutar Tests y documentación

Para iniciar Storybook, utiliza el comando `npm run storybook`. Para verificar la integridad y el funcionamiento de las historias, así como para garantizar que las pruebas estén en orden, ejecuta `npm run test-storybook`. Es importante destacar que este último comando solo funcionará si ya has iniciado Storybook con el comando anterior.

```bash
npm run storybook
npm run test-storybook
```

### Pruebas, Validación y herramientas

- **ESlint**: Configurado con `eslint-config-airbnb-typescript` para mantener el código limpio y sin errores.

```bash
npm run lint
```

- **Prettier**: Para mantener un código limpio y consistente, se ha integrado [Prettier](https://prettier.io/) en este proyecto.

```bash
npm run format
```

Este proyecto fue desarrollado por **Ricardo David Ocampo**.

- **LinkedIn:** [https://www.linkedin.com/in/ridaoc19](https://www.linkedin.com/in/ridaoc19)
- **GitHub:** [https://github.com/ridaoc19](https://github.com/ridaoc19)
