import { ICommand } from "wokcommands";
import { MessageEmbed } from "discord.js";
import fetchTXT from "node-fetch"


export default {
    category: 'Misc',
    description: 'Get the servers membercount',

    slash: false,
    testOnly: true,


    


   callback: async (  { message} )  => {

   
    if(message.channel.id === "992517006345637890" && !message.member?.permissions.has("MUTE_MEMBERS"))
    {
       
    
       return "You can't use bot commands here!";
    }


    await message.reply("**OMAK SUS** https://www.youtube.com/watch?v=TG4FeBXZ-io").then((msg) => {
        msg.suppressEmbeds(true);
     })
      
    }
} as ICommand