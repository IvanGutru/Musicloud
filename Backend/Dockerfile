FROM ubuntu:20.04
RUN apt-get update
RUN apt-get install -y nodejs \
    npm 
COPY ./Imagenes ./Imagenes
COPY ./node_modules ./node_modules
COPY ./src ./src
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

WORKDIR /src
CMD npm run dev
EXPOSE 5000