#
# Autogenerated by Thrift Compiler (0.13.0)
#
# DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
#

require 'thrift'

class AudioCancion; end

class AudioCancion
  include ::Thrift::Struct, ::Thrift::Struct_Union
  NOMBRECANCION = 1
  AUDIO = 2

  FIELDS = {
    NOMBRECANCION => {:type => ::Thrift::Types::STRING, :name => 'nombreCancion'},
    AUDIO => {:type => ::Thrift::Types::STRING, :name => 'audio', :binary => true}
  }

  def struct_fields; FIELDS; end

  def validate
  end

  ::Thrift::Struct.generate_accessors self
end
