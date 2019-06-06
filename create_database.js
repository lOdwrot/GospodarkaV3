db.getCollection('USER').insertMany([{"mail":"nowak@wp.pl", "password": "123", "role": "worker"}, {"mail":"kowalski@wp.pl", "password": "123", "role": "manager"}, {"mail":"rys@wp.pl", "password": "123", "role": "worker"}])

db.getCollection('MEAL').insertMany([{"mealDescription": "frytki", "imgUrl":"www.google.pl"}, {"mealDescription": "ziemniaki", "imgUrl":"www.google.pl"}])

db.getCollection('ORDER').insertMany([{"date":"2019-06-06T20:41:41.645Z", "userId":"5cf94a34cebf6685455aef04","mealId":"5cf9489069e8244b80d64d50"},{"date":"2019-06-06T20:41:41.645Z", "userId":"5cf94a34cebf6685455aef05","mealId":"5cf9489069e8244b80d64d51"}])
