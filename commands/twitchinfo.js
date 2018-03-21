exports.run = async (client, message, args, level) => {
  const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
.addField('About me', 'WIP', true)
.addField('Discord', '[here](https://discord.gg/5mQDZ5j)', true)
.addField('PC Specs', 'CPU: AMD Phenom II X4 955\nGraphic card: NVIDIA GeForce GTX 750 Ti\nMotherboard: ASUS M4A79XTD EVO\nKeyboard: Logitech MK550 wireless Keyboard\nmouse: Razer Deathadder\nRam: 6 gigs\nHard Drive: 1TB WDC WD1001FALS-00E3A0 ATA Device\n', true)
.addField('F.A.Q', 'WIP', true)
.addField('Donations', 'This [Patreon](https://www.patreon.com/thesqwidcave) was started to help fund staff and other ventures involved in making and advancing the Discord and other chats. We do things like stream games (which some of the funds could be allocated to) and help fund blossoming artists who help make art for us.', true)
.addField('Rules', '1. No spamming or flooding the chat with messages. Do not type in ALL CAPS.\n2. No bashing or heated arguments to other people in the chat.\n3. No advertising other sites/discord servers (Permission must be requested from Staff).\n4. No referral links.\n5. Do not cause a nuisance in the community, repeated complaints from several members will lead to administrative action', true)
.addField('Schedule','WIP', true)
.addField('Games', 'WIP', true)
.addField('Soical Media', '[here](https://twitter.com/lowlsqwid)', true)
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
  name: "twitchinfo",
  category: "twitch",
  description: "Lowlsqwid Twitch Info.",
  usage: "twitchinfo"
};
