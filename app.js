const express = require('express');
const morgan = require('morgan');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// app.use((req, res) => {
//     console.log(req.body);
//     console.log(res.body);
// });

const loanRouter = require('./routes/loansRoute');
app.use('/loan', loanRouter);

const customerRouter = require('./routes/customerRoute');
app.use('/customers', customerRouter);

const ledgerRouter = require('./routes/loanLedgerRoute');
app.use('/ledger', ledgerRouter);

module.exports = app;