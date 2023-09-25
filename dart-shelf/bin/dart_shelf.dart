import 'dart:io';
import 'package:shelf/shelf.dart';
import 'package:shelf/shelf_io.dart';
import 'package:uuid/uuid.dart';

Response handler(Request request) {
  final uuid = Uuid().v4(); // Generate a random UUID
  return Response.ok(uuid, headers: {'Content-Type': 'text/plain'});
}

void main() async {
  final server = await serve(handler, 'localhost', 8080);

  print('Serving at http://${server.address.host}:${server.port}');
}

