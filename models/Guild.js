const mongoose = require('mongoose');

mongoose.set('strictQuery', true)
const guildSchema = mongoose.Schema({
	guildId: String,
	private_voices: {
		mode: { type: Boolean, default: false },
		categoryId: String,
		channelId: String,
		textId: String,
	}
});

module.exports = mongoose.model('GuildConfigs', guildSchema);