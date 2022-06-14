module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (interaction.isCommand()) {
            const command = client.commands.get(interaction.commandName);

            if (!command) return;

            try {

                if (command.permissions && command.permissions.length > 0) {
                    if (!interaction.member.permissions.has(command.permissions)) return await interaction.reply({ content: `Ỳou don't have the right to use this command!`});
                }

                await command.execute(interaction, client);
            } catch (error) {
                console.error(error);
                await interaction.reply({
                    content: 'There was an error while executing this command!',
                    epheneral: true
                });
            }
        } else if (interaction.isSelectMenu()) {
            if (interaction.customId == "color-select") {
                let colors = "";
                await interaction.values.forEach(async value => {
                    colors += `${value} `
                });
                await interaction.reply({ content: `Wow your fav color are: ${colors}` });
            }
        } else if (interaction.isButton()) {
            if (interaction.customId.includes('-button')) {
                const button = client.buttons.get(interaction.customId);
                if (!button) return await interaction.reply({ cotent: "There was no button code found for this button." });

                try {
                    await button.execute(interaction, client);
                } catch (error) {
                    console.error(error);
                    await interaction.reply({
                        content: 'There was an error while executing this button!',
                        epheneral: true
                    })
                }
            }
        }
    },
};