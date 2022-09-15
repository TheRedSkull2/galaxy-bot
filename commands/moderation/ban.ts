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
         

          if(user == null) return "You need to mention a user!";
          


          if(user.permissions.has("BAN_MEMBERS")) return "That user can't be banned!";
          



          const BanEmbed = new MessageEmbed() 
            .setTitle(user.user.tag + ` has been banned |` + '``' + user.user.id + '``')
            .setColor("RED");


          message.channel.send({embeds: [BanEmbed]})


          try {

    
	          let reason = args.slice(2).join(" ");

            const BannEmbed = new MessageEmbed() 
            .setTitle("You have been banned" + "Reason: " + "``" + reason + "``")
            .setColor("RED");

            user.send({embeds: [BannEmbed]});
          }

          catch {
            console.log("Can't DM user!");
          }



          user.ban();

            


          
          
        }
 
    }
} as ICommand

        

            
         