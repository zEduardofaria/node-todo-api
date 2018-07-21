const { MongoClient, ObjectID } = require('mongodb')

var obj = new ObjectID()
console.log('obj: ', obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('Unable to connect to MongoDB service.')
  }
  console.log('Connected to MongoDB server')
  const db = client.db('TodoApp')

  // deteleMany
  // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
  //   console.log(result)
  // })
  // deleteOne
  // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
  //   console.log(result)
  // })
  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({ cmopleted: false }).then((result) => {
  //   console.log(result)
  // })

  // db.collection('Users').deleteMany({name: 'Andrew'})

  // db.collection('Users').findOneAndDelete({
  //   _id: new ObjectID('5b4fc10033d30b15c86232cc')
  // }).then((results) => {
  //   console.log(JSON.stringify(results, undefined, 2))
  // })

  client.close()
})