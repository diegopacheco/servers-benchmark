extern crate may_minihttp;

use std::io::{self};
use may_minihttp::{HttpServer, HttpService, Request, Response, BodyWriter};
use uuid::Uuid;
use yarte::Serialize;

#[derive(Clone,Serialize)]
struct Result;

impl HttpService for Result {
    fn call(&mut self, _req: Request, res: &mut Response) -> io::Result<()> {
        let w = BodyWriter(res.body_mut());
        serde_json::to_writer(w, &serde_json::json!({"result": uuid()}))?;
        Ok(())
    }
}

fn uuid() -> String {
    let uuid = Uuid::new_v4().to_owned().to_string();
    uuid
}

fn main() {
    println!("may_minihttp running in http://127.0.0.1:8080/");
    let server = HttpServer(Result).start("0.0.0.0:8080").unwrap();
    server.join().unwrap();
}