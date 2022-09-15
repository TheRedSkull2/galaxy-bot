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

        
        const url = await fetchTXT("https://www.reddit.com/r/dankmemes/random/.json");
        if(!url) return;
        const random = await url.json() as any;
        

        if(!message.member) return;
  
       
        const embed = new MessageEmbed()
        .setTitle(`${random[0].data.children[0].data.title}`)
        .setImage(random[0].data.children[0].data.url)
        .setFooter("Requested by: " + message.member.user.tag)

         message.reply({embeds: [embed]}); 
      
    }
} as ICommand