# Use a imagem oficial do Node.js
FROM node:18

# Configura o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o package.json e package-lock.json
COPY package*.json ./

# Instala as dependências da aplicação
RUN npm install

# Copia todos os arquivos do projeto para o contêiner
COPY . .

# Compila o projeto TypeScript para JavaScript
RUN npm run build

# Expõe a porta que o NestJS utiliza
EXPOSE 8080

# Comando para iniciar o servidor em modo de produção
CMD ["npm", "run", "start:prod"]
