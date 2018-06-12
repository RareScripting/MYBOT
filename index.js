const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "!";

bot.on('guildMemberAdd', member => {

  const channel = member.guild.channels.find('name', 'member-log');
 
  channel.send(`Welcome to the server, ${member}`);
});

bot.on("message", (message)=>{
if(!message.content.startsWith(prefix)) return;

if(message.content.startsWith(prefix + "help")){
  message.channel.send("Commands : !hello, !stats, !ping, and more to come");


}
if(message.content.startsWith(prefix + "hello")){
    message.channel.send("Hello! " + message.author);
  
  
  }
  if(message.content.startsWith(prefix + "ping")){

   message.channel.send(message.author + " Pong :D")

  
  
  }
  if(message.content.startsWith(prefix + "stats")){

    message.channel.send(
      message.author + "*** Bot is up and ready to go! ***")
 
   
   
   }
   if(message.channel.startTyping(prefix + "idk")){
 
  }
}
)







bot.login('NDU1ODM0MDg3MjI4NDQwNTc3.DgCGhw.qilENLMOSxIUTpkjp06uuM4e6sk');
