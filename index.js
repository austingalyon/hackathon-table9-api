// accounts api layer
const agent = require('superagent')
const express = require('express')
const app = express()

const accountsEndpoint = 'https://3hkaob4gkc.execute-api.us-east-1.amazonaws.com/prod/au-hackathon/accounts'

function getAccounts() {
    return agent
        .post(accountsEndpoint)
        .send({})
}


app.get('/', (req, res) => res.send('Hello World!'))
app.get('/accounts', (req, res) =>
    getAccounts()
        .then((response) => {
            console.log('response', response)
            return res.send(response)
        }))

app.listen(5000, () => console.log('Example app listening on port 5000!'))
