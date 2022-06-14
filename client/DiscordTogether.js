const { DiscordTogether } = require('discord-together');
const client = require('../bot');

const discordTogether = new DiscordTogether(client);

module.exports = discordTogether;