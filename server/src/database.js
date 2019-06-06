import { MongoClient } from 'mongodb'

var db

const initUsers = (collection) => {
  collection.insertMany([
    {"mail":"nowak@wp.pl", "password": "123", "role": "worker"}, 
    {"mail":"kowalski@wp.pl", "password": "123", "role": "manager"}, 
    {"mail":"rys@wp.pl", "password": "123", "role": "worker"}
  ])
}

const initMeals = (collection) => {
  collection.insertMany([
    {"mealDescription": "frytki", "imgUrl":"www.google.pl"}, 
    {"mealDescription": "ziemniaki", "imgUrl":"www.google.pl"}
  ])
}

export const connect = ({DB_USER, DB_PASSWORD, DB_PORT, DB_NAME}) => {
  const address = `mongodb://${DB_USER ? `${DB_USER}:${DB_PASSWORD}@` : ''}localhost:${DB_PORT}`
  console.log('Connecting to database...')
  
  return new Promise((resolve, reject) => {
    MongoClient.connect(address, (err, database) => {
      if (err) return console.log(err)
        db = database.db(DB_NAME)

        // HERE CREATE ALL COLLECTIONS
        db.createCollection('USER', (err, collection) => {
        })
        db.createCollection('MEAL', (err, collection) => {
        })
        db.createCollection('ORDERS', (err, collection) => {
        })

        resolve(db)
        console.log('Database conected')
    })
  })
}

export const getCollectionUser = () => db.collection('USER')
export const getCollectionMeals = () => db.collection('MEAL')
export const getCollectionOrders = () => db.collection('ORDER')
export default db