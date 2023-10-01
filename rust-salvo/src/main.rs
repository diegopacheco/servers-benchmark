use salvo::prelude::*;
use uuid::Uuid;

#[handler]
async fn gen_uuid() -> String {
    let uuid = Uuid::new_v4();
    uuid.to_string()
}

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt().init();

    let router = Router::new().get(gen_uuid);
    let acceptor = TcpListener::new("127.0.0.1:8080").bind().await;
    Server::new(acceptor).serve(router).await;
}