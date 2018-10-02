const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');
	
	//delete Many
	db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
		console.log(result);
	})
	// });

	//delete One
	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
		
	// });

	
	//find One and delete
	// db.collection('Users').findOneAndDelete({_id: new ObjectID('5bb3b629520b56277dcc87cc')}).then( (result) => {
	// 	console.log(result);
	// });
	//client.close();
});
