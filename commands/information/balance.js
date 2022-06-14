const { SlashCommandBuilder, userMention } = require('@discordjs/builders');
const { Interaction, Permissions } = require('discord.js');
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('balance')
        .setDescription('Returns info based on a user\'s balance.')
        .addSubcommand(subcommand =>
            subcommand
                .setName("user")
                .setDescription("Gets information of a user mentioned")
                .addUserOption(option => option.setName("target").setDescription("The user mentioned"))),
    permissions: [Permissions.FLAGS.ADMINISTRATOR],
    async execute(interaction, client) {
        let user = (interaction.options.getUser("target") ? interaction.options.getUser("target") : interaction.user);
        const balanceProfile = await client.createBalance(user);
        await interaction.reply({ content: `${user.tag} has ${balanceProfile.amount} <:Gcoin:929477523308425297>`});
    },
};