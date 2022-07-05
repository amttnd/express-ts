FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE ${PORT}

CMD [ "node", "dist/server.js" ]
