import org.smartboot.http.server.HttpBootstrap;
import org.smartboot.http.server.HttpRequest;
import org.smartboot.http.server.HttpResponse;
import org.smartboot.http.server.HttpServerHandler;

import java.io.IOException;
import java.util.UUID;

public class Main{
  public static void main(String args[]){
    HttpBootstrap bootstrap = new HttpBootstrap();
        bootstrap.configuration().debug(false);
        bootstrap.configuration().threadNum(Runtime.getRuntime().availableProcessors());
        bootstrap.configuration().readBufferSize(48);

        bootstrap.httpHandler(new HttpServerHandler() {
            @Override
            public void handle(HttpRequest request, HttpResponse response) throws IOException {
                response.write(UUID.randomUUID().toString().getBytes());
            }
        }).setPort(8080).start();
  }
}
