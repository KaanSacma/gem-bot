const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with a Pong.'),
    async execute(interaction) {
        interaction.reply("Pong!");
    },
};