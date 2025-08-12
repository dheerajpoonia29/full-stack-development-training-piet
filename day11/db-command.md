Mongodb Account Creation

1. Create account on Create an account https://cloud.mongodb.com
2. Create cluster/server and add public ip address
3. Create user and save password
4. Download mongosh and connect cluster with shell

Database Creation Command

1. use todo-db
2. db.createCollection('myTodoCollection')
3. db.myTodoCollection.insertOne({todoTitle: "my todo", id: 21})
4. db.myTodoCollection.find()
5. db.myTodoCollection.updateOne({id: 21}, {$set: {todoTitle: 'my todo 1'}})
6. db.myTodoCollection.deletOne({id: 21})
