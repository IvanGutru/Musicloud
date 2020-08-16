FROM ubuntu:20.04
RUN mkdir -p /Backend/Reproduccion

RUN apt-get update
RUN apt-get install -y ruby \
    bundler \ 
    ri \
    ruby-dev
RUN gem install thrift
COPY ./Canciones /Backend/Reproduccion/Canciones
COPY ./gen-rb /Backend/Reproduccion/gen-rb
COPY ./gen-netstd /Backend/Reproduccion/gen-netstd
COPY ServicioReproduccion.thrift /Backend/Reproduccion/
COPY Servidor.rb /Backend/Reproduccion/
WORKDIR /Backend/Reproduccion
CMD ruby Servidor.rb
EXPOSE 8000