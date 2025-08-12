const express = require('express')
const app = express();
const port = 3000


/*
--------- API 1 ---------
http method = get
url = '/api-1'
request = {}
response = "this is my first api"
*/
app.get('/api-1', (request, response) => {
    response.send('this is my first api')
})

app.get('/test-api', (request, response) => {
    response.send("my test api is working")
})

// API 3
/*
url = /test-api-3
response = "my test api 3 is working fine"
*/
app.get('/test-api-3', (request, response) => {
    response.send("my test api 3 is working fine")
})


// API 4
/*
url = /homepage-admin
response = "this is website homepage"
*/
app.get('/homepage-admin', (request, response) => {
    response.send("this is website homepage ")
})


// API 5
/*
http method = post
url = /insert-user
request = {"user": "dheeraj", "age": 26}
response = 'user inserted successfull'
*/

// Middleware to parse JSON bodies
app.use(express.json());

app.post('/insert-user', (request, response) => {
    console.log(`content of request = ${JSON.stringify(request.body)}`)
    response.send("user inserted successfull")
})

app.listen(port, () => {
    console.log("my start is started at port " + port);
})