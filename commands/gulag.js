exports.run = async (client, message, args, level) => {
  let user = message.mentions.users.first();
        if(!user)
          return message.reply("Please mention a valid member of this server");

          message.channel.send(`${user} was deported to the gulags for being an enemy to the revolution.`);
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "gulag",
  category: "Fun",
  description: "Gulag whoever you like.",
  usage: "gulag"
};
