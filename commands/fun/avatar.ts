import { ICommand } from "wokcommands";
import { MessageEmbed } from "discord.js";



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

    var args = message.content.substr(1).split(/ +/);



       

    const user = message.mentions.members?.first();
  
    if(!user) return;
 
    const pfp = new MessageEmbed()
    .setTitle(user.user.tag)
     .setImage(user.displayAvatarURL({size: 1024, dynamic: true}))
     .setFooter("Requested by " + message.member?.user.tag)
 
    message.reply({embeds: [pfp]});
      
    }
} as ICommand