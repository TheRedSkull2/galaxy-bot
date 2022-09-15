import { ICommand } from "wokcommands";


export default {
    category: 'Testing',
    description: 'Replies with the ping.',

    slash: false,
    testOnly: true,
    


    callback: ({client, message}) => {

     
    if(message.channel.id === "992517006345637890" && !message.member?.permissions.has("MUTE_MEMBERS"))
    {
     
    
       return "You can't use bot commands here!";
    }

        return "🏓 Pong! " + `(Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms)`
    }
} as ICommand