from twisted.web import server, resource
from twisted.internet import reactor, endpoints
import uuid


class UUIDResource(resource.Resource):
    isLeaf = True
    numberRequests = 0

    def render_GET(self, request):
        self.numberRequests += 1
        request.setHeader(b"content-type", b"text/plain")
        myuuid = uuid.uuid4()
        content = str(myuuid) + u"{}\n".format(self.numberRequests)
        return content.encode("ascii")

print("Running twisted on http://127.0.0.1/")
endpoints.serverFromString(reactor, "tcp:8080").listen(server.Site(UUIDResource()))
reactor.run()