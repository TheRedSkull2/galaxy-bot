import { ICommand } from "wokcommands";
import ms from "ms"



export default {
    category: 'Moderation',
    description: 'Sets the slowmode of a channel.',

    slash: false,
    testOnly: true,
    


    callback: ({message, channel, member}) => {


      
    if(message.channel.id === "992517006345637890" && !message.member?.permissions.has("MUTE_MEMBERS"))
    {
     
    
       return "You can't use bot commands here!";
    }


         if(!member.permissions.has("MANAGE_CHANNELS")) return;
        var args = message.content.substr(1).split(/ +/);

        if(args[1] == null)
        {
          return "You have to set a timer!";
        }
          
          channel.setRateLimitPerUser(ms(args[1]) / 1000);
          message.reply("Set the slowmode to ``" + args[1] + "``");
    }
} as ICommand

        

            
         