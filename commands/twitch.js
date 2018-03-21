exports.run = async (client, message, args, level) => {
  const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
.addField('Lowlsqwid Twitch', '[here](https://www.twitch.tv/lowlsqwid)')
.addField('Schedule', 'To Be determined')
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
  name: "twitch",
  category: "twitch",
  description: "Lowlsqwid Twitch link.",
  usage: "twitch"
};
