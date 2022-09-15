import { ICommand } from "wokcommands";
import ms from "ms"
import { MessageEmbed } from "discord.js";



export default {
    category: 'Moderation',
    description: 'Mutes a member.',

    slash: false,
    testOnly: true,
    


    callback: ({message, channel, member}) => {

      
    if(message.channel.id === "992517006345637890" && !message.member?.permissions.has("MUTE_MEMBERS"))
    {
     
    
       return "You can't use bot commands here!";
    }


         if(!member.permissions.has("MUTE_MEMBERS")) return;
         var args = message.content.substr(1).split(/ +/);

       

      
         const user = message.mentions.members?.first();
         if (user == null) return;


         

        
        if(user.permissions.has("ADMINISTRATOR")) return;

        
        user.timeout(ms(args[2]));


        const MuteEmbed = new MessageEmbed() 
        .setTitle(user.user.tag + ` has been muted for ` + args[2] + ' | ``' + user.user.id + '``')
        .setColor("ORANGE");

         
         

      message.channel.send({embeds: [MuteEmbed]});
 
    }
} as ICommand

        

            
         