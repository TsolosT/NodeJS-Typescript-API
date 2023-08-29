FROM node:18.16.0-alpine as base

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","dev"]