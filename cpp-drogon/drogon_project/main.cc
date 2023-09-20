#include <drogon/drogon.h>
#include <drogon/HttpSimpleController.h>
#include <drogon/HttpRequest.h>
#include <drogon/utils/Utilities.h>
using namespace drogon;

int main() {
    std::cout << "Running drogon in http://127.0.0.1:5555/"; 

    drogon::app().addListener("0.0.0.0", 5555);
    drogon::app().registerHandler(
        "/",
        [](const HttpRequestPtr &,
           std::function<void(const HttpResponsePtr &)> &&callback) {
            auto resp = HttpResponse::newHttpResponse();
            std::string uuid = drogon::utils::getUuid();

            resp->setBody(uuid);
            callback(resp);
        },{Get}
    );
    drogon::app().run();
    return 0;
}
