use axum::{
    routing::get,
    Router,
};
use std::net::SocketAddr;
use uuid::Uuid;

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/", get(uuid));

    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    println!("Axum running on http://127.0.0.1:3000/");
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}

async fn uuid() -> String {
    let uuid = Uuid::new_v4();
    return uuid.to_owned().to_string();
}
