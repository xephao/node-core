const express = require('express')
const app = express()
const port = 3000
app.get('/', (request, response) => {
response.send('Hello from Express!')
})
app.listen(port, (err) => {
        if (err) {
            return console.log('something bad happened',
            err
        )
    }
    console.log('server is listening on ${port}')
})

var app = require('./app');
var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});