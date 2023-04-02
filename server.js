const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

const port = process.env.port || PORT;


app.listen(port, () => {
    console.log(`App listening on port${port}`);
});

//connect to database using mongoose
const mongoose = require('mongoose');

const database = process.env.DATABASE;

//connection string below

mongoose.connect(database, {useNewUrlParser: true})
    .then(() => console.log(`Connected to the database ${database}...`))
    .catch((err) => console.log(err));

