exports.run = async (client, message, args, level) => {
const Discord = require("discord.js");
const embed = new Discord.RichEmbed()
      .setThumbnail(client.user.displayAvatarURL)
      .setFooter(`requested by: ${message.author.tag}`)
      .setColor('RANDOM')
      .addField('Sqwidcavebot bot', 'Made by <@246514239601115136> and <@288703114473635841>')
      .addField('__Prefix__', 'ls!')
      .addField('Bot Version: ', '1.9.4');
        message.channel.send({embed})
       .catch(e => logger.error(e));
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "info",
  category: "System",
  description: "Shows info of the bot.",
  usage: "info"
};
