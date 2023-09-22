require 'socket'
require 'securerandom'

puts "TCP socket running on http://127.0.0.1:8080/"
socket = TCPServer.new(8080)

loop do
  client = socket.accept
  first_line = client.gets
  uuid = SecureRandom.uuid

  response = "HTTP/1.1 200\r\n\r\n#{uuid}"
  client.puts(response)

  client.close
end
socket.close