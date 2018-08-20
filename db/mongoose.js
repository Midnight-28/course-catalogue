const mongoose = require('mongoose');
const { mongoURI } = require('../config/keys_dev');

mongoose.Promise = global.Promise;

mongoose
	.connect(mongoURI)
	.then(() => {
		console.log('MongoDB Connected');
	})
	.catch(err => console.log(err));

module.exports = { mongoose };