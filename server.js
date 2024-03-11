const express = require('express')
const db = require('./config/connection')
const routes = require('./routes')

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)

// Close the database connection when the server is shut down
process.on('SIGINT', () => {
  db.close(() => {
    console.log('Connection to database closed. Server shutting down.');
    process.exit(0);
  });
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for running on port ${PORT}!`)
  })
})