const { MongoClient, ObjectID } = require('mongodb')

var obj = new ObjectID()
console.log('obj: ', obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('Unable to connect to MongoDB service.')
  }
  console.log('Connected to MongoDB server')
  const db = client.db('TodoApp')

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err)
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  // Insert new doc into Users (name, age, location)

  // db.collection('Users').insertOne({
  //   name: 'Eduardo Faria Silva',
  //   age: '22',
  //   location: 'Betim MG'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err)
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  client.close()
})