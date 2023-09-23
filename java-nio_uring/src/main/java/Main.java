import sh.blake.niouring.IoUring;
import sh.blake.niouring.IoUringServerSocket;
import sh.blake.niouring.util.ByteBufferUtil;

import java.nio.ByteBuffer;
import java.util.UUID;

public class Main {
  public static void main(String[] args) {
    System.out.println("iouring server running on http://127.0.0.1:8080/");

    IoUringServerSocket serverSocket = new IoUringServerSocket(8080);
    serverSocket.onAccept((ring, socket) -> {
      ring.queueAccept(serverSocket);
      socket.onRead(in -> ring.queueWrite(socket, handle()));
      ring.queueRead(socket, ByteBuffer.allocateDirect(1024));
      socket.onWrite(out -> socket.close());
      socket.onException(ex -> {
        ex.printStackTrace();
        socket.close();
      });
    });

    new IoUring()
            .onException(Exception::printStackTrace)
            .queueAccept(serverSocket)
            .loop();
  }

  private static ByteBuffer handle(){
    String response = "HTTP/1.1 200 OK\r\n\r\n" + UUID.randomUUID().toString();
    ByteBuffer responseBuffer = ByteBufferUtil.wrapDirect(response);
    return responseBuffer.slice();
  }

}
