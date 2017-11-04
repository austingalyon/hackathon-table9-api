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
    return agent
        .post(accountsEndpoint)
        .send({})
}

app.use(function(req, res, next) {
  res.header("access-control-allow-origin", "*");
    console.log('mayyybbee')
  next();
});

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/accounts', (req, res) =>
    getAccounts()
        .then((response) => {
            console.log('response', response)
            res.header['access-control-allow-origin'] = '*'
            res.header['access-control-allow-methods'] =  "*"
            return res.send(response)
        }))

app.listen(5000, () => console.log('Example app listening on port 5000!'))
