require('dotenv').config()
const server = require('./src/app.js')
const { conn } = require('./src/db.js')

const connectPort = process.env.PORT || 3001

conn.sync().then(() => {
  console.log('Database has been synced')
  server.listen(connectPort, () => {
    console.log(`server listening at ${connectPort} port`)
  })
})
