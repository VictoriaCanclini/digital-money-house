# Usa una imagen base de Node.js
FROM node:18.17.0-alpine

# Crea y establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Construye el proyecto de Next.js
RUN npm run build

# Expone el puerto en el que Next.js corre por defecto
EXPOSE 3000

# Comando para iniciar la aplicación en modo de producción
CMD ["npm", "start"]
