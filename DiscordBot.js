const Discord = require('discord.js');

const client = new Discord.Client();

client.on{'ready', () => {
  console.log('I am ready!');
}
);

client.on('message', message => {
  if (message.content === "ping") {
    message.channel.send("pong");
  }
});

client.login("MTE4MjU4NTQ2Njc1NTc2NDIzNQ.G5JaM6.Mb7S57tB3HdYgSlLfrxaoVIt5J1SvlpjZaDCXw");
