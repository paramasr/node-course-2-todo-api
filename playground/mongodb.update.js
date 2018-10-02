const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');
	
	//delete Many
	db.collection('Users').findOneAndUpdate({_id: new ObjectID('5bb3a7d6c2170f5c40e5f4b8')}, 
		{
			$set: { name: 'Jen' },
			$inc: { age: 1 }
	    }, { 
			returnOriginal: false
		}).then((result) => {
		console.log(result);
	});
	
	//client.close();
});
