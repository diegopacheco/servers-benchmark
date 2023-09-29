use uuid::Uuid;

use gotham::state::State;

pub fn display_uuid(state: State) -> (State, String) {
    let uuid = Uuid::new_v4();
    (state, uuid.to_string())
}

pub fn main() {
    let _ = gotham::start("127.0.0.1:8080", || Ok(display_uuid));
}
