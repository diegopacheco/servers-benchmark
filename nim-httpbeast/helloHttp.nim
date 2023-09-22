import options, asyncdispatch
import httpbeast
import uuid4

proc onRequest(req: Request): Future[void] =
  if req.httpMethod == some(HttpGet):
    case req.path.get()
    of "/":
      req.send(uuid4().`$`)
    else:
      req.send(Http404)

run(onRequest)