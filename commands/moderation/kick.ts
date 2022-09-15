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

     

        if(message.member?.permissions.has("KICK_MEMBERS"))
        {
         

          if(user == null) return "You need to mention a user!";

          if(user.permissions.has("BAN_MEMBERS")) return "That user can't be kicked!";
          


          const BanEmbed = new MessageEmbed() 
            .setTitle(user.user.tag + ` has been kicked |` + '``' + user.user.id + '``')
            .setColor("RED")


            message.channel.send({embeds: [BanEmbed]})
          

            user.kick();

            


          
        }
 
    }
} as ICommand

        

            
         