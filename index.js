const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "!";



bot.on("message", (message)=>{
if(!message.content.startsWith(prefix)) return;

if(message.content.startsWith(prefix + "help")){
  message.channel.send("Commands : !hello, !stats, !ping, !getcreator and more to come");


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
  if(message.content.startsWith(prefix + "getcreator")){

    message.channel.send(
      message.author + "*** Discord : RareScripting#3391 || Roblox : RareScripting ***")
 
   
   
   }
}
)







bot.login('NDU1ODM0MDg3MjI4NDQwNTc3.DgMVBA._zz_lWYZTwQNBGaBfacbyQojCm0');
