

import { ICommand } from "wokcommands";

import { MessageEmbed } from "discord.js";



export default {
    category: 'Moderation',
    description: 'Unmutes a member.',

    slash: false,
    testOnly: true,
    


    callback: ({message, channel, member}) => {


      
    if(message.channel.id === "992517006345637890" && !message.member?.permissions.has("MUTE_MEMBERS"))
    {
     
    
       return "You can't use bot commands here!";
    }


        const user = message.mentions.members?.first();
        var args = message.content.substr(1).split(/ +/);
        if(message.member?.permissions.has("BAN_MEMBERS"))
        {
          if(args[1].length != 18) return message.reply("Please enter a valid user id!");
        
          const id = args[1];
        
          const BanEmbed = new MessageEmbed() 
          .setTitle("``" + id + "``" + ` has been unbanned`)
          .setColor("RED");
        
        
        message.channel.send({embeds: [BanEmbed]})
          
        
          message.guild?.members.unban(id);
        }
 
    }
} as ICommand

        

            
         