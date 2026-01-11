FROM node:24-alpine as node_build

WORKDIR /home/cesar/pronto-food-api

COPY package.json ./
RUN npm install

COPY ./src/core/prisma ./src/core/prisma 
COPY ./prisma.config.ts ./
RUN npx prisma generate

COPY . .

CMD ["npm", "run", "dev"]