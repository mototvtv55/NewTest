FROM node:13-alpine

WORKDIR /home/app

COPY home/app/package*.json ./
RUN npm set timeout=60000 && npm install

COPY home/app ./

ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=secret@123

CMD ["node", "app.js"]