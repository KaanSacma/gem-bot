const { SlashCommandBuilder } = require('@discordjs/builders');
const { Interaction } = require('discord.js');
const discordTogether = require('../../client/DiscordTogether');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('together')
        .setDescription('Watch videos or play a game with friends!\nPS: click the blue link')
        .addSubcommand(subcommand =>
            subcommand
                .setName("youtube")
                .setDescription("Watch Youtube with friends."))
        .addSubcommand(subcommand =>
            subcommand
                .setName("poker")
                .setDescription("Play poker with friends."))
        .addSubcommand(subcommand =>
            subcommand
                .setName("chess")
                .setDescription("Play chess with friends."))
        .addSubcommand(subcommand =>
            subcommand
                .setName("checkers")
                .setDescription("Play checkers with friends."))
        .addSubcommand(subcommand =>
            subcommand
                .setName("betrayal")
                .setDescription("Play betrayal with friends."))
        .addSubcommand(subcommand =>
            subcommand
                .setName("fishing")
                .setDescription("Play fishington with friends."))
        .addSubcommand(subcommand =>
            subcommand
                .setName("lettertile")
                .setDescription("Play lettertile with friends."))
        .addSubcommand(subcommand =>
            subcommand
                .setName("wordsnack")
                .setDescription("Play wordsnack with friends."))
        .addSubcommand(subcommand =>
            subcommand
                .setName("doodlecrew")
                .setDescription("Play doodlecrew with friends."))
        .addSubcommand(subcommand =>
            subcommand
                .setName("spellcast")
                .setDescription("Play spellcast with friends."))
        .addSubcommand(subcommand =>
            subcommand
                .setName("awkword")
                .setDescription("Play awkword with friends.")),
    async execute(interaction, client) {
        if (interaction.options.getSubcommand() == "youtube") {
            discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'youtube').then(async invite => {
            return interaction.channel.send(`${invite.code}`)});
        } else if (interaction.options.getSubcommand() == "poker") {
            discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'poker').then(async invite => {
            return interaction.channel.send(`${invite.code}`)});
        } else if (interaction.options.getSubcommand() == "chess") {
            discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'chess').then(async invite => {
            return interaction.channel.send(`${invite.code}`)});
        } else if (interaction.options.getSubcommand() == "checkers") {
            discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'checkers').then(async invite => {
            return interaction.channel.send(`${invite.code}`)});
        } else if (interaction.options.getSubcommand() == "betrayal") {
            discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'betrayal').then(async invite => {
            return interaction.channel.send(`${invite.code}`)});
        } else if (interaction.options.getSubcommand() == "fishing") {
            discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'fishing').then(async invite => {
            return interaction.channel.send(`${invite.code}`)});
        } else if (interaction.options.getSubcommand() == "lettertile") {
            discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'lettertile').then(async invite => {
            return interaction.channel.send(`${invite.code}`)});
        } else if (interaction.options.getSubcommand() == "wordsnack") {
            discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'wordsnack' ).then(async invite => {
            return interaction.channel.send(`${invite.code}`)});
        } else if (interaction.options.getSubcommand() == "doodlecrew") {
            discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'doodlecrew').then(async invite => {
            return interaction.channel.send(`${invite.code}`)});
        } else if (interaction.options.getSubcommand() == "spellcast") {
            discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'spellcast').then(async invite => {
            return interaction.channel.send(`${invite.code}`)});
        } else if (interaction.options.getSubcommand() == "awkword") {
            discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'awkword').then(async invite => {
            return interaction.channel.send(`${invite.code}`)});
        }
    }
};