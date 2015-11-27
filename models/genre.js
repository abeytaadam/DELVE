var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		GenreSchema = new Schema({
			description: String,
			genreName: String,
			artistNames: [String],
			urls: Object
		});