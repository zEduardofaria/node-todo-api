const { MongoClient, ObjectID } = require('mongodb')

var obj = new ObjectID()
console.log('obj: ', obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('Unable to connect to MongoDB service.')
  }
  console.log('Connected to MongoDB server')
  const db = client.db('TodoApp')

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b4fc052969f3a14945e356e')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result)
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b4fc10033d30b15c86232cc')
  }, {
      $set: {
        name: 'Eduardo'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result)
    })

  client.close()
})