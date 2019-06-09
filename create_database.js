db.getCollection('USER').insertMany([
    {"mail":"nowak@wp.pl", "password": "123", "name": "Jan", "surname": "Nowak", "address": "ul. Nowa 1 Wrocław", "phone": "123456789", "role": "worker", "grade": "5", "projectId": null},
    {"mail":"kowalski@wp.pl", "password": "123", "name": "Adam", "surname": "Kowalski", "address": "ul. Kwiatowa 12 Wrocław", "phone": "223546745", "role": "manager","grade": "5", "projectId": null},
    {"mail":"rys@wp.pl", "password": "123", "name": "Krzysztof", "surname": "Rys", "address": "ul. Stara 41 Wrocław", "phone": "768549393", "role": "worker", "grade": "5", "projectId": null}
])

db.getCollection('MEAL').insertMany([
    {"mealDescription": "frytki", "imgUrl":"https://roadtripbus.pl/wp-content/uploads/2019/01/frytki-belgijskie-przepis.jpg"}, 
    {"mealDescription": "ziemniaki", "imgUrl":"http://bi.gazeta.pl/im/1f/07/15/z22052639V,Ziemniaki.jpg"}
])

db.getCollection('ORDER').insertMany([
    {"date":"2019-06-06", "userId":"5cf94a34cebf6685455aef04","mealId":"5cf9489069e8244b80d64d50"},
    {"date":"2019-06-06", "userId":"5cf94a34cebf6685455aef05","mealId":"5cf9489069e8244b80d64d51"}
])

db.getCollection('PROJECT').insertMany([
    {"startDate":"2019-04-04", "endDate":"2019-08-08", "name":"Budowa Biedronki", "location":"ul. Morska 11 Wrocław", "status":"in progres", "managerId": null},
    {"startDate":"2019-06-04", "endDate":"2020-08-08", "name":"Budowa biurowca", "location":"ul. Wiślana 1 Wrocław", "status":"in progres", "managerId": null},
    {"startDate":"2018-04-04", "endDate":"2018-08-08", "name":"Budowa Lidla", "location":"ul. Szewska 11 Wrocław", "status":"done", "managerId": null}
])

db.getCollection('EQUIPMENT').insertMany([
    {"name":"Koparka czerwona", "projectId": null},
    {"name":"Koparka niebieska", "projectId": null},
    {"name":"Betoniarka 1", "projectId": null},
    {"name":"Walec czerwony", "projectId": null}
])