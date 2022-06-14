const Balance = require('../schemas/balance');

module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
        const balanceProfile = await client.createBalance(message.member);
        var amount = 0;
        const msg = message.content.length;
        try {
        if (msg == 1) {
            amount = 0.01;
        } else {
            amount = message.content.length / 100;
        }
        balanceProfile.amount = Math.round((balanceProfile.amount += amount) * 100) / 100;
        await Balance.findOneAndUpdate({ _id: balanceProfile._id }, { amount: balanceProfile.amount });
        } catch (error) {
            console.log(error);
        }
    },
};