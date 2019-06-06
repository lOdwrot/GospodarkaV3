db.getCollection('USER').insertMany([{"mail":"nowak@wp.pl", "password": "123", "role": "worker"}, {"mail":"kowalski@wp.pl", "password": "123", "role": "manager"}, {"mail":"rys@wp.pl", "password": "123", "role": "worker"}])

db.getCollection('MEAL').insertMany([{"mealDescription": "frytki", "imgUrl":"www.google.pl"}, {"mealDescription": "ziemniaki", "imgUrl":"www.google.pl"}])

db.getCollection('ORDER').insertMany([{"date":"2015-03-25T12:00:00Z", "mail":"nowak@wp.pl","meal":"ziemniaki"},{"date":"2015-03-25T13:00:00Z", "mail":"kowalski@wp.pl","meal":"frytki"}])
