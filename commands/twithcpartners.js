exports.run = async (client, message, args, level) => {
  const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
.addField('Someone','Link here')
.setFooter(`requested by: ${message.author.tag}`)
.setColor('RANDOM');
message.channel.send({embed})
.catch(e => logger.error(e))
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "twithcpartners",
  category: "twitch",
  description: "Lowlsqwid Twitch Partners.",
  usage: "twithcpartners"
};
