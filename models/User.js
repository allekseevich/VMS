const mongoose = require('mongoose');

mongoose.Promise = global.Promise
mongoose.set('strictQuery', true);

const userSchema = mongoose.Schema({
	guildId: String,
	userId: String,
	private_voices: {
		voiceId: {type: String, default: null},
		lock: { type: Boolean, default: true }
	}
})

module.exports = mongoose.model('users', userSchema);