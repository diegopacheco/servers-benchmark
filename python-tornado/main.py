#!/usr/bin/env python3.11

import asyncio
import tornado
import uuid

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write(str(uuid.uuid4()))

def make_app():
    return tornado.web.Application([
        (r"/", MainHandler),
    ])

async def main():
    app = make_app()
    app.listen(8888)
    await asyncio.Event().wait()

if __name__ == "__main__":
    print("Tornado running on http://127.0.0.1:8888/")
    asyncio.run(main())