import { MongoClient } from 'mongodb'

var db

export const connect = ({DB_USER, DB_PASSWORD, DB_PORT, DB_NAME}) => {
  const address = `mongodb://${DB_USER ? `${DB_USER}:${DB_PASSWORD}@` : ''}localhost:${DB_PORT}`
  console.log('Connecting to database...')
  
  return new Promise((resolve, reject) => {
    MongoClient.connect(address, (err, database) => {
      if (err) return console.log(err)
        db = database.db(DB_NAME)

        // HERE CREATE ALL COLLECTIONS
        db.createCollection('USER', (err, collection) => {})
        db.createCollection('USER', (err, collection) => {})
        resolve(db)
        console.log('Database conected')
    })
  })
}

export const getCollectionUser = () => db.collection('USER')
export default db