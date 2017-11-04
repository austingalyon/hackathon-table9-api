// accounts api layer
const agent = require('superagent')
const express = require('express')
const app = express()

const accountsEndpoint = 'https://3hkaob4gkc.execute-api.us-east-1.amazonaws.com/prod/au-hackathon/accounts'

const headers = {
    "access-control-allow-origin": "*",
    "access-control-allow-credentials": true,
    "access-control-allow-methods": "*"
}


function getAccounts() {
    return agent.post(accountsEndpoint)
        .send({})
}

function getAccount(id) {
    console.log('id', id)
    return agent.post(accountsEndpoint)
        .send({'account_id': parseInt(id)})
}

app.use(function(req, res, next) {
    res.header("access-control-allow-origin", "*");
    next();
});

app.get('/', (req, res) => res.send('Hello World!'))

// accounts
app.get('/accounts', (req, res) =>
    getAccounts()
        .then((response) => {
            return res.send(response.body)
        }))

app.get('/accounts/:id', (req, res) =>
    getAccount(req.params.id)
        .then((response) => {
            return res.send(response.body)
        }))


app.listen(5000, () => console.log('Example app listening on port 5000!'))
