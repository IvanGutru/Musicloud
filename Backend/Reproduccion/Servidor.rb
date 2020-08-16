
$:.push('gen-rb')
require 'thrift'
require 'servicio_reproduccion'


class Reproductor
    def ObtenerCancion(nombreArchivo)
        audio = ''
        File.open "../Reproduccion/Canciones/#{nombreArchivo}.mp3", "r" do |source_file|
            until source_file.eof?
                chunk = source_file.read 100000 
                audio += chunk
            end
        end
        archivo_audio = AudioCancion.new(audio: audio)
        return archivo_audio
    end

    def SubirAudio(audioCancion)
        begin
            File.open "../Reproduccion/Canciones/#{audioCancion.nombreCancion}.mp3", "wb" do |destin_file|
                destin_file.write audioCancion.audio
            end
            return true
        rescue
            return false
        end
    end
end

handler = Reproductor.new()
processor = ServicioReproduccion::Processor.new(handler)
transport = Thrift::ServerSocket.new(8000)
transportFactory = Thrift::BufferedTransportFactory.new()
server = Thrift::SimpleServer.new(processor, transport, transportFactory)
puts "Servicio de reproducción en 8000"
server.serve()
