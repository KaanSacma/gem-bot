const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment, Permissions } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Returns info based on input')
        .addSubcommand(subcommand =>
            subcommand
                .setName("user")
                .setDescription("Gets information of a member mentioned")
                .addUserOption(option => option.setName("target").setDescription("The user mentioned")))
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription("Info about the server")),
    permissions: [Permissions.FLAGS.ADMINISTRATOR],
    async execute(interaction, client) {
        if (interaction.options.getSubcommand() === "user") {
            const user = interaction.options.getUser("target");
            if (user) {
                const balanceProfile = await client.createBalance(user);
                const file = new MessageAttachment("images/gemSMP.png");
                const userEmbed = new MessageEmbed()
                    .setTitle(`${user.username}'s Information:`)
                    .setDescription("There is user's description")
                    .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
                    .setAuthor('Gem Bot', client.user.displayAvatarURL(),"https://www.youtube.com/watch?v=dQw4w9WgXcQ")
                    .setThumbnail(user.displayAvatarURL())
                    .addFields(
                        {name: `Username:`, value: `${user.username}`, inline: true},
                        {name: `\u200B`, value: `\u200B`, inline: true},
                        {name: `Tag:`, value: `#${user.discriminator}`, inline: true},
                        {name: 'GCoin:', value: `${balanceProfile.amount}`, inline: true}
                    )
                    .setImage("attachment://gemSMP.png")
                    .setTimestamp()
                    .setColor("BLUE")
                    .setFooter(client.user.tag, client.user.displayAvatarURL());

                await interaction.reply({ embeds: [userEmbed], files: [file] });
            } else {
                await interaction.reply(`Username: ${interaction.user.username}\nYour ID: ${interaction.user.id}`);
            }
        } else if (interaction.options.getSubcommand() === "server") {
            await interaction.reply(`Server Name: ${interaction.guild.name}\nTotal Members: ${interaction.guild.memberCount}`);
        } else {
            await interaction.reply("No sub command was used.");
        }
    },
};