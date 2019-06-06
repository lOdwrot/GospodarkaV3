import { MongoClient } from 'mongodb'

var db
const IS_INIT = false

const initUsers = (collection) => {
  collection.insertMany([
    {"mail":"nowak@wp.pl", "password": "123", "role": "worker"}, 
    {"mail":"kowalski@wp.pl", "password": "123", "role": "manager"}, 
    {"mail":"rys@wp.pl", "password": "123", "role": "worker"}
  ])
}

const initMeals = (collection) => {
  collection.insertMany([
    {"mealDescription": "frytki", "imgUrl":"http://www.kwestiasmaku.com/sites/kwestiasmaku.com/files/styles/kafelki/public/schab_w_sosie_koperkowym_00.jpg?itok=7RuU5Cp8"}, 
    {"mealDescription": "ziemniaki", "imgUrl":"http://www.kwestiasmaku.com/sites/kwestiasmaku.com/files/styles/kafelki/public/schab_w_sosie_koperkowym_00.jpg?itok=7RuU5Cp8"}
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
          if(IS_INIT) initUsers(collection)
        })
        db.createCollection('MEAL', (err, collection) => {
          if(IS_INIT) initMeals(collection)
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