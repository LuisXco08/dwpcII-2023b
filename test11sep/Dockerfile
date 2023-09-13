# Usamos la imagen oficial de Node.js
FROM node:14

# Establecemos el directorio de trabajo en /app
WORKDIR /app

# Copiamos los archivos de configuración
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el código fuente al contenedor
COPY src/ ./src/

# Exponemos el puerto 3000
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]