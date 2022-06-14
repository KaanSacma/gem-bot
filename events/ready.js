module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`${client.user.tag} has logged into Discord.`);

        client.user.setPresence({ activities: [{ name: 'with your mum :)', type: 'PLAYING' }], status: 'dnd' });
    },
};