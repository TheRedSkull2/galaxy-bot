import { ICommand } from "wokcommands";
import { MessageEmbed } from "discord.js";
import { QuickDB } from 'quick.db';
const db = new QuickDB();



export default {
    category: 'Moderation',
    description: 'Get how many warnings a user has',

    slash: false,
    testOnly: true,
    


    callback: async ({message, channel, member}) => {

        
    if(message.channel.id === "992517006345637890" && !message.member?.permissions.has("MUTE_MEMBERS"))
    {
     
    
       return "You can't use bot commands here!";
    }


        const user = message.mentions.members?.first();
        var args = message.content.substr(1).split(/ +/);

        if(!user) return "You have to mention a user!";
        let warnings = await db.get(`warnings_${message.guild?.id}_${user?.id}`)  




        if(warnings === null) { return }


        message.channel.send(`**${message.mentions.members?.first()?.user.tag}** has **${warnings}** warnings`)

       
       
    }
} as ICommand

        

            
         