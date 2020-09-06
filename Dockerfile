FROM node:12.15.0-alpine3.11

WORKDIR /app
COPY package.json package.lock*.json ./
RUN npm install && npm cache clean --force
COPY . .
CMD [ "start:debug" ]