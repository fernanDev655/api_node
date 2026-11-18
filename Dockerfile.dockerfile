# Imagen base oficial de Node.js con soporte vigente
FROM node:22-slim

# Directorio de trabajo
WORKDIR /app

# Copia el proyecto al contenedor
COPY . .

# Instala las dependencias
# Imagen base oficial de Node.js con soporte vigente
FROM node:22-slim

# Directorio de trabajo
WORKDIR /app

# Copia el proyecto al contenedor
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto 3000
EXPOSE 3000

# Arranca la aplicación
CMD ["npm", "start"]