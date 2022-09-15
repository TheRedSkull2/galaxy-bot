import { ICommand } from "wokcommands";
import { MessageEmbed } from "discord.js";
import ms from "ms";
import { QuickDB } from 'quick.db';
const db = new QuickDB();



export default {
    category: 'Moderation',
    description: 'Warns a member',

    slash: false,
    testOnly: true,
    


    callback: async ({message, channel, member}) => {


        
    if(message.channel.id === "992517006345637890" && !message.member?.permissions.has("MUTE_MEMBERS"))
    {
     
    
       return "You can't use bot commands here!";
    }

        const user = message.mentions.members?.first();
        var args = message.content.substr(1).split(/ +/);

        if(!message.member?.permissions.has("MUTE_MEMBERS"))
        {
           return;
        }

        let warnings = await db.get(`warnings_${message.guild?.id}_${user?.id}`)  

        if(!warnings) {
                    return "That user doesn't have any warnings!";
        }

        await db.delete(`warnings_${message.guild?.id}_${user?.id}`)
        await message.reply("Cleared all warnings from **" + user?.user.tag + "**")


        
       
    }
} as ICommand

        

            
         