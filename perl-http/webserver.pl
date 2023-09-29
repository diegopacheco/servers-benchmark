#!/usr/bin/perl

use HTTP::Daemon;
use HTTP::Status;
use Data::UUID;
use HTTP::Daemon;
use Socket 'AF_INET';


sub uuid {
    $ug = Data::UUID->new;
    return $ug->to_string($ug->create());
}

my $d = HTTP::Daemon->new(LocalPort => 8080, Family => AF_INET) || die;
print "Listening at: <URL:", $d->url, ">\n";
while (my $c = $d->accept) {
    while (my $r = $c->get_request) {
        if ($r->method eq 'GET' and $r->uri->path eq "/uuid") {
            $c->send_header("Content-Type", "text/plain");
            $c->send_crlf();
            $c->send_response(uuid());
        }
        else {
            $c->send_error(RC_FORBIDDEN)
        }
    }
    $c->close;
    undef($c);
}


