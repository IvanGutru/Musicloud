FROM ubuntu:20.04
RUN apt-get update
RUN apt-get install -y ruby \
    bundler \ 
    ri \
    ruby-dev
RUN gem install thrift
COPY ./Reproduccion ./Reproduccion
COPY ./Canciones ./Canciones
WORKDIR /Reproduccion
CMD ruby Servidor.rb
EXPOSE 8000