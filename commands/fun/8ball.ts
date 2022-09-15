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

    var args = message.content.substr(1).split(/ +/);
       

    if(!args[2]) return message.reply("Please ask a full question!");
    const replies = ["Yes.", "No.", "I don't know.", "Ask again later.", "Definitely.", "Maybe.", "Maybe not.", "Never."];
    
    const result = Math.floor((Math.random() * replies.length));
    const question = args.slice(1).join(" ");
    
    const ballembed = new MessageEmbed()
    .setTitle(">8Ball")
    .addField("Question", question)
    .addField("Answer", replies[result])
    
    message.channel.send({embeds: [ballembed]});
      
    }
} as ICommand