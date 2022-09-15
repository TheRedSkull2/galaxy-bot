
import { ICommand } from "wokcommands";
import { MessageEmbed, Util } from "discord.js";


export default {
    category: 'Misc',
    description: 'Steals an emoji hehe',

    slash: false,
    testOnly: true,
    


    callback: ({client, message, guild}) => {


        if(message.channel.id === "992517006345637890" && !message.member?.permissions.has("MUTE_MEMBERS"))
        {
         
        
           return "You can't use bot commands here!";
        }
       
        var args = message.content.substr(1).split(/ +/);
        
        
        if(!args.length) return "LOL! You didn't even mention an emoji?";

        for(const rawEmoji of args)
        {
           const parsedEmoji = Util.parseEmoji(rawEmoji);

           if(!parsedEmoji) return message.delete;
           if(!message.guild) return;
        
        
           if(parsedEmoji.id) {
               const extension = parsedEmoji.animated ? ".gif" : ".png";
               const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extension}`;
               message.guild.emojis
                .create(url, parsedEmoji.name)
                .then((emoji) => message.channel.send(`Added: \`${emoji.url}\``));
               
           }
        }
      
    }
} as ICommand