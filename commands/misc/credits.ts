import { ICommand } from "wokcommands";
import { MessageEmbed } from "discord.js";


export default {
    category: 'Misc',
    description: 'Shows who made the bot.',

    slash: false,
    testOnly: true,
    


    callback: ({client, message, guild}) => {


     
    if(message.channel.id === "992517006345637890" && !message.member?.permissions.has("MUTE_MEMBERS"))
    {
     
    
       return "You can't use bot commands here!";
    }
        
        
        const credits = new MessageEmbed() 
        .setTitle("Credits")
        .setDescription("This bot is a moderation and fun bot developed for Halal World discord server.")
      
        .addField("AzE (https://azedeveloper.github.io/)", "- Main developer")
        .addField("Yaso (https://discord.gg/ndWYwGQHFk)", "- Art & Ideas")
        .addField("Programs used:", "``Discord.JS v13.9.0``")
  
       
        message.reply({embeds: [credits]})
      
    }
} as ICommand