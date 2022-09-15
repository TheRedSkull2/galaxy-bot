import DiscordJS, { Intents, MessageEmbed, TextChannel } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from "dotenv";

dotenv.config();










const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,   
    ]
})

const activities = [
    ">help",
    ">purge",
    ">meme",
    ">joke",
    ">omak",
    "your messages",
    "Moderation",
    "Chicken Invaders",
  ];



client.on('ready', () => {
    console.log("Yaso's Discord Bot Has Started")

    setInterval(() => {
        // generate random number between 1 and list length.
        const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
        const newActivity = activities[randomIndex];
  
  
        if(newActivity != "your messages")
        {
          client.user?.setActivity(newActivity, {type: "PLAYING"});
        }
        else {
          client.user?.setActivity(newActivity, {type: "WATCHING"});
        }
  
      
      }, 10000);

    new WOKCommands(client, {
        commandDir: path.join(__dirname, 'commands'),
        typeScript: true,
        testServers: ['1014516829064003594', '992517005389353021'],
        
    })
})

client.on("message", async message => {
    const bannedWords = [
        "retard",
        "r e t a r d",
        "nigger",
        "nigga",
        "nigeria",
        "niger",
        "n i g g e r",
        "n i g g a",
        "n i g e r i a",
        "n i g e r",
        "sex",
        "boobs",
        "cum",
        "sperm",
        "dick",
        "pussy",
        "xxx",
        "sexy",
        "boob",
        "boobies",
        "b o o b",
  
      ]
      try {
          if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
              if (message.member?.permissions.has("ADMINISTRATOR")) return;
              await message.delete();
              await message.channel.send(`You are not allowed to send that here.`);
          }
      } catch (e) {
          console.log(e);
      }
})



client.login("MTAxNDUxNjk4MjY0Njg0NTUxMg.G-5JS0.CrPp4QEJVdCly3SDBBNnYImoH3wPcW4yMStDBg")
