
import { ICommand } from "wokcommands";
import { MessageEmbed } from "discord.js";


export default {
    category: 'Misc',
    description: 'Shows information about your current server.',

    slash: false,
    testOnly: true,
    


    callback: ({client, message, guild}) => {


        if(message.channel.id === "992517006345637890" && !message.member?.permissions.has("MUTE_MEMBERS"))
        {
         
        
           return "You can't use bot commands here!";
        }
        
        
        if(!message.guild) return;
        
        const ServerLogo = message.guild.iconURL();
        if(!ServerLogo) return
const ServerInfoEmbed = new MessageEmbed()
    .setTitle("Server Info :ringed_planet: ")
    .setImage(ServerLogo)
    .setDescription(`About **${message.guild}**`)
    .addField("**Date Created**", `Server Created on **${message.guild.createdAt.toLocaleString()}**`)
    .addField("**Member Count**", "This Server Has ` " + `${message.guild.memberCount}` + " ` **Members**")
    .addField("**Emoji Count**", "This Server Has ` " + `${message.guild.emojis.cache.size}` + " ` **Emojis**")
    .addField("**Roles Count**", "This Server Has ` " + `${message.guild.roles.cache.size}` + " ` **Roles**")
    .addField("**Channels Count**", "This Server Has ` " + `${message.guild.channels.cache.size}` + " ` **Channels**")
    .addField("**Server Logo**", "The server icon.")
    .setURL(ServerLogo)
message.reply({embeds: [ServerInfoEmbed]}); 
      
    }
} as ICommand