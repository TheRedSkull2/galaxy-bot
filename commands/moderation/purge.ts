import { ICommand } from "wokcommands";
import ms from "ms"



export default {
    category: 'Moderation',
    description: 'Deletes a set amount of messages',

    slash: false,
    testOnly: true,
    


    callback: ({message, channel, member}) => {

        
    if(message.channel.id === "992517006345637890" && !message.member?.permissions.has("MUTE_MEMBERS"))
    {
     
    
       return "You can't use bot commands here!";
    }


       
       if(!member.permissions.has("MUTE_MEMBERS")) return;


      


          let arg = message.content.split(" ")
          message.delete() 
          var clear = parseInt(arg[1]);
        
          if(!clear) return message.channel.send(`:x: | \`Incorrect usage of command you need to provide an amount of messages to Clear.\` 
          **Example:** \`>purge 50\` `)
         if(isNaN(clear)) return message.channel.send(":x: | ``Please Put a Valid Number to Clear messages.``")
         if(clear > 100) return message.channel.send(":x: | ``I can't Clear more than 100 messages.``")
         if(clear < 1) return message.channel.send(":x: | ``You cannot Clear less than 1 message.``")
         channel.bulkDelete(clear)
         channel.send(`:white_check_mark: | \`Succesfully cleared ${clear} messages! \` `)
          .then(message => 
           setTimeout(()=> message.delete(), 2000))
        
    }
} as ICommand

        

            
         