FROM node:20-alpine3.17

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password

RUN mkdir -p /home/app

COPY . /homr/app

CMD [ "node","index.js" ]