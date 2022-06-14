module.exports = {
    data: {
        name: 'primary-button'
    },
    async execute (interaction, client) {
        await interaction.reply({ content: 'Color Primary: #5865F2'});
    }
}