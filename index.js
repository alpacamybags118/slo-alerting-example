const express = require('express');
const app = express();
const port = 3000
const promMid = require('express-prometheus-middleware');

app.use(promMid({
  metricsPath: '/metrics',
  collectDefaultMetrics: true,
  requestDurationBuckets: [0.1, 0.5, 1, 1.5]
}
))

app.get('/health', function (req, res) {
  const failure = Math.random() + parseFloat(process.env.FAILURE_RATE);

  if(failure >= 1) {
    res.statusCode = 500
    res.send('fail');
  } else {
    res.send('hello world')
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});