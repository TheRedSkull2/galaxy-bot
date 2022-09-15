import { ICommand } from "wokcommands";
import { Message, MessageEmbed } from "discord.js";


export default {
    category: 'Misc',
    description: 'Get the servers membercount',

    slash: false,
    testOnly: true,
    


    callback: ({client, message}) => {


        if(message.channel.id === "992517006345637890" && !message.member?.permissions.has("MUTE_MEMBERS"))
        {
         
        
           return "You can't use bot commands here!";
        }
        
        
        const totalCount = message.guild?.memberCount;
		const botCount = message.guild?.members.cache.filter(member => member.user.bot).size;

        if(!botCount) return;

		
        const memberCount = message.guild?.memberCount - botCount - 1;
		
  
		const MembercountEmbed = new MessageEmbed()
		.setTitle('Membercount:' + '\n\n 👤Total: ' +  totalCount + '\n\n🧍Humans: ' + memberCount + '\n\n 🤖Bots: ' + (botCount + 1));
		

		message.reply({embeds:[MembercountEmbed]})
      
    }
} as ICommand