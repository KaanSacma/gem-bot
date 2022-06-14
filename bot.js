const { Client, Collection } = require('discord.js');
const client = new Client({ intents: [32767] });
const fs = require('fs');
require('dotenv').config();

module.exports = client;

client.commands = new Collection();
client.buttons = new Collection();

const functions = fs.readdirSync("./functions").filter(file => file.endsWith('.js'));
const commandFolders = fs.readdirSync("./commands");
const eventFiles = fs.readdirSync("./events").filter(file => file.endsWith('.js'));

(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./events");
    client.handleCommands(commandFolders, "./commands");
    client.handleButtons();
    client.login(process.env.TOKEN);
    client.dbLogin();
})();