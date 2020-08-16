FROM node:12

#Crar directorio
COPY ./src /backend/src/
WORKDIR /backend/src
COPY package*.json /backend/

RUN npm install

COPY ./Imagenes /backend/Imagenes/
EXPOSE 5000
RUN ls
CMD [ "node", "index.js" ]
