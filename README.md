# SLO Alerting Example Using Prometheus

Sample of configuring SLO alerting using Prometheus.

## Prometheus

All configs can be found in [the conf folder](./conf). These are rules with various SLO alerting strategies configured.

To start the prometheus server, run the following:

`docker run -p 9090:9090 -v /path/to/code/conf:/etc/prometheus prom/prometheus`

You can then use the graph interface by navigating to [`http://localhost:9090/graph`](http://localhost:9090/graph)

## Sample Application

The sample node application can be started by using `npm run start`. It is preconfigured to send metrics to

Set an `FAILURE_RATE` environment variable between 0 and 1 to inject failure at the given rate.

To send traffic to the service, run the script `generate-load` in `bin` e.g. `./bin/generate-load`