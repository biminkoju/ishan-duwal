const {token} = require('../settiings/credentials.json');

module.exports = {

    ready : (bot) => {
        bot.login(token)
        bot.on('ready', () => {
            bot.user.setActivity('why are we still here just to suffer', {type: 'LISTENING'});
            bot.user.setStatus('dnd');
            console.log('I am ready to do stuff');
        });
            
    }
    
};
