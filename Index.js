var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '$') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
         }
         args = args.splice(1);
         switch(cmd) {
             // !ding
             case 'ding':
                 bot.sendMessage({
                     to: channelID,
                     message: 'Dong!'
                 });
             break;
          }
          args = args.splice(1);
          switch(cmd) {
              // !badtameez
              case 'badtameez':
                  bot.sendMessage({
                      to: channelID,
                      message: 'No You.'
                  });
              break;
           }
           args = args.splice(1);
           switch(cmd) {
               // !shutup
               case 'shutup':
                   bot.sendMessage({
                       to: channelID,
                       message: 'You ShutUp.'
                   });
               break;
            }
            args = args.splice(1);
            switch(cmd) {
                // !kese ho
                case 'kese-ho':
                    bot.sendMessage({
                        to: channelID,
                        message: 'Mein Theek Ap Sunao.'
                    });
                break;
             }
             args = args.splice(1);
             switch(cmd) {
                 // !ping
                 case 'ap-ko-kis-ne-bnaya':
                     bot.sendMessage({
                         to: channelID,
                         message: 'Mere Daddy Rayan Ne.'
                     });
                 break;
              }
     }
});