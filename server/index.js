const colors = require('colors');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
require('dotenv').config();
const port = process.env.PORT || 3001;
const connectDb = require('./config/db');

const app = express();

// connect to database
connectDb();

// prettier-ignore
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development',
}));

app.listen(port, console.log(`Listening on port ${port}`));
