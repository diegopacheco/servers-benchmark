Instructions to install XK6 Dashboard (make sure you are inside the k6-benchmarks folder):
# Build
To build a k6 binary with this extension, first ensure you have the prerequisites:

Go toolchain

Git

### Then:

Download xk6:
> $ go install go.k6.io/xk6/cmd/xk6@latest

Build the binary:

> xk6 build --with github.com/grafana/xk6-dashboard@latest

Then run the script you want to execute, i.e 
>./run-gleam-mist-simulation.sh

While execution is running, the dashboard will be accessible on your browser for live metrics on the following URL: http://127.0.0.1:5665

After execution ends, HTML file with the metrics will be exported to a {simulation-name}.html file inside the results folder.
