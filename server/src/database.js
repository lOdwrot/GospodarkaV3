import { MongoClient } from 'mongodb'

var db
const IS_INIT = false

const initUsers = (collection) => {
  collection.insertMany([
    {"mail":"nowak@wp.pl", "password": "123", "name": "Jan", "surname": "Nowak", "address": "ul. Nowa 1 Wrocław", "phone": "123456789", "role": "worker", "grade": "5", "projectId": null},
    {"mail":"kowalski@wp.pl", "password": "123", "name": "Adam", "surname": "Kowalski", "address": "ul. Kwiatowa 12 Wrocław", "phone": "223546745", "role": "manager","grade": "5", "projectId": null},
    {"mail":"rys@wp.pl", "password": "123", "name": "Krzysztof", "surname": "Rys", "address": "ul. Stara 41 Wrocław", "phone": "768549393", "role": "worker", "grade": "5", "projectId": null}
  ])
}

const initMeals = (collection) => {
  collection.insertMany([
    {"mealDescription": "frytki", "imgUrl":"https://roadtripbus.pl/wp-content/uploads/2019/01/frytki-belgijskie-przepis.jpg"}, 
    {"mealDescription": "ziemniaki", "imgUrl":"http://bi.gazeta.pl/im/1f/07/15/z22052639V,Ziemniaki.jpg"}
  ])
}

const initProjects = (collection) => {
  collection.insertMany([
    {"startDate":"2019-04-04", "endDate":"2019-08-08", "name":"Budowa Biedronki", "location":"ul. Morska 11 Wrocław", "status":"in progres"},
    {"startDate":"2019-06-04", "endDate":"2020-08-08", "name":"Budowa biurowca", "location":"ul. Wiślana 1 Wrocław", "status":"in progres"},
    {"startDate":"2018-04-04", "endDate":"2018-08-08", "name":"Budowa Lidla", "location":"ul. Szewska 11 Wrocław", "status":"done"}
  ])
}

const initEquipments = (collection) => {
  collection.insertMany([
    {"name":"Koparka czerwona", "projectId": null},
    {"name":"Koparka niebieska", "projectId": null},
    {"name":"Betoniarka 1", "projectId": null},
    {"name":"Walec czerwony", "projectId": null}
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
        db.createCollection('ORDER', (err, collection) => {
        })
        db.createCollection('PROJECT', (err, collection) => {
          if(IS_INIT) initProjects(collection)
        })
        db.createCollection('EQUIPMENT', (err, collection) => {
          if(IS_INIT) initEquipments(collection)
        })
        db.createCollection('DOCUMENT', (err, collection) => {
          
        })
        db.createCollection('USERDOC', (err, collection) => {
          
        })

        resolve(db)
        console.log('Database conected')
    })
  })
}

export const getCollectionUser = () => db.collection('USER')
export const getCollectionMeals = () => db.collection('MEAL')
export const getCollectionOrders = () => db.collection('ORDER')
export const getCollectionProject = () => db.collection('PROJECT')
export const getCollectionEquipment = () => db.collection('EQUIPMENT')
export const getCollectionDocument = () => db.collection('DOCUMENT')
export const getCollectionUserDoc = () => db.collection('USERDOC')
export default db