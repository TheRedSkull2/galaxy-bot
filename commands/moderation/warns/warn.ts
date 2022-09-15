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

    


        if(!user)
        {
           return "You need to mention a user"
        }

        if(message.mentions.users.first()?.bot) {
          return "You can't warn bots!";
        }

        if(message.author.id === user?.id) {
          return "You can't warn yourself!";
        
        }
        if(user.permissions.has("MUTE_MEMBERS")) {
          return "You can't warn " + user?.user.tag;
        }

        if(message.author.id === message.guild?.ownerId) {
          return "You can't warn the server owner lmao";
         
        }


        const reason = args.slice(2).join(" ")

        if(!reason) {
          return "Please provide a reason!";
        }

        let warnings = await db.get(`warnings_${message.guild?.id}_${user?.id}`)  

   

        if(warnings === null) {
           await db.set(`warnings_${message.guild?.id}_${user?.id}`, 1)
           const WarnEmbed = new MessageEmbed() 
           .setTitle(user?.user.tag + ` has been warned |` + '``' + user?.user.id + '``')
           .setColor("YELLOW");

           await message.channel.send({embeds: [WarnEmbed]})
        } else if(warnings !== null) {
           await db.add(`warnings_${message.guild?.id}_${user?.id}`, 1)
           const WarnEmbed = new MessageEmbed() 
           .setTitle(user?.user.tag + ` has been warned |` + '``' + user?.user.id + '``')
           .setColor("YELLOW");


          await message.channel.send({embeds: [WarnEmbed]})

          if(!warnings) return;
          if(warnings >= 2 && warnings <= 7) {
            user?.timeout(7200000)

            const MuteEmbed = new MessageEmbed() 
            .setTitle(user?.user.tag + ` has been muted for 2 hours` + ' | ``' + user?.user.id + '``')
            .setColor("ORANGE");

            await message.channel.send({embeds: [MuteEmbed]})
          }
          else if(warnings >= 6) {
            user?.timeout(25200000)

            const MuteEmbed = new MessageEmbed() 
            .setTitle(user?.user.tag + ` has been muted for 12 hours` + ' | ``' + user?.user.id + '``')
            .setColor("ORANGE");

            await message.channel.send({embeds: [MuteEmbed]})
          }

        }
       
    }
} as ICommand

        

            
         