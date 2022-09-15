import { ICommand } from "wokcommands";
import { MessageEmbed } from "discord.js";


export default {
    category: 'Misc',
    description: 'Shows who made the bot.',

    slash: false,
    testOnly: true,
    


    callback: ({client, message, guild}) => {


      
    if(message.channel.id === "992517006345637890" && !message.member?.permissions.has("MUTE_MEMBERS"))
    {
     
    
       return "You can't use bot commands here!";
    }
        
        
        if(message.member?.permissions.has("KICK_MEMBERS"))
        {
             const user = message.mentions.members?.first();
          
            if(user != null)
            {
              
              if(user.permissions.has("KICK_MEMBERS"))
              {
                
                
                
                const NoBanEmbed= new MessageEmbed() 
            .setTitle('You cant mod ' + user.user.tag + '!🤦')
            
    
           message.channel.send({embeds: [NoBanEmbed]});
                message.delete();
              
              }
              else {
                   
                
                  
          
                
                    const random = (length: number) => Math.floor(Math.random() * Math.pow(10, length));
    
                   user.setNickname("Moderated Nickname " + random(7));
          
          
                 const mod = new MessageEmbed()
                    .setTitle(user.user.tag + "'s nickname has been moderated.")
                    .setColor("DARK_AQUA")
             
                  message.delete();
          
                   message.channel.send({embeds: [mod]});
              }
               
             
        
     
               
            }
            else {
                const NoBanEmbed= new MessageEmbed() 
           .setTitle('You need to mention a user! ' + '🤦')
            
    
          message.channel.send({embeds: [NoBanEmbed]});
                message.delete();
            }
        }
      
    }
} as ICommand