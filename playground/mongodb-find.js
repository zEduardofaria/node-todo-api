const { MongoClient, ObjectID } = require('mongodb')

var obj = new ObjectID()
console.log('obj: ', obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('Unable to connect to MongoDB service.')
  }
  console.log('Connected to MongoDB server')
  const db = client.db('TodoApp')

  db.collection('Todos').find({ completed: false }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
    
  }, (err) => {
    console.log('Unable to fetch Todos ', err)
  })

  db.collection('Users').find({ name: 'Eduardo' }).toArray().then((count) => {
    console.log(`Users count: ${count}`)
  }, (err) => {
    console.log(`Unable to fetch users `, err)
  })

  client.close()
})