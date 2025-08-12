const express = require('express')
const app = express()
const port = 3000

// parse the request body
app.use(express.json());

// API SECTION
app.post('/insert-user', (request, response) => {
    console.log(`request received is = ${JSON.stringify(request.body)}`)
    response.send('user inserted successfully')
})

// create an api below to send request body in response 
app.post('/insert-user-1', (request, response) => {
    console.log(`request received is = ${JSON.stringify(request.body)}`)
    response.send(`${JSON.stringify(request.body)}`)
})

app.post('/insert-user-2', (request, response) => {
    console.log(`request received is = ${JSON.stringify(request.body)}`)
    response.json(request.body)
})

/*
path = '/insert-person'
http method = post
request = {
    "personName": "ram",
    "address": {
        "homeAddress": "panipat",
        "officeAddress": "gurugram"
    }
}
response = person name is ram
*/
app.post('/insert-person', (request, response) => {

})

/*
path = '/insert-person-1'
http method = post
request = {
    "personName": "ram",
    "address": {
        "homeAddress": "panipat",
        "officeAddress": "gurugram"
    }
}
response = {
        "homeAddress": "panipat",
        "officeAddress": "gurugram"
    }
*/

app.listen(port, () => {
    console.log("my backend server is started at port " + port)
})