var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

mongoose.model('Laptop',
		new Schema({
			screenSize: String,
			ram: String,
			hardDrive: String,
			total: Number
		}), 'Laptops');