FROM node:18.12-alpine

WORKDIR /usr/src/app

COPY dist/apps/server-api .

RUN npm install

EXPOSE 3000
CMD [ "node", "main.js" ]
