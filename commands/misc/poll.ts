import { ICommand } from "wokcommands";
import { MessageEmbed } from "discord.js";
import { poll } from "discord.js-poll"


export default {
    category: 'Misc',
    description: 'Get the servers membercount',

    slash: false,
    testOnly: true,
    


    callback: ({client, message, guild}) => {


        if(message.channel.id === "992517006345637890" && !message.member?.permissions.has("MUTE_MEMBERS"))
        {
         
        
           return "You can't use bot commands here!";
        }
      

        var args = message.content.substr(1).split(/ +/);
        

        if(!message.member) return;
        
        if(message.member.permissions.has("MUTE_MEMBERS"))
        {
            poll(message, args, "+", "DARK_BUT_NOT_BLACK");
        }
      
    }
} as ICommand