"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    category: 'Misc',
    description: 'Shows information about your current server.',
    slash: false,
    testOnly: true,
    callback: ({ client, message, guild }) => {
        var _a;
        if (message.channel.id === "992517006345637890" && !((_a = message.member) === null || _a === void 0 ? void 0 : _a.permissions.has("MUTE_MEMBERS"))) {
            return "You can't use bot commands here!";
        }
        if (!message.guild)
            return;
        const ServerLogo = message.guild.iconURL();
        if (!ServerLogo)
            return;
        const ServerInfoEmbed = new discord_js_1.MessageEmbed()
            .setTitle("Server Info :ringed_planet: ")
            .setImage(ServerLogo)
            .setDescription(`About **${message.guild}**`)
            .addField("**Date Created**", `Server Created on **${message.guild.createdAt.toLocaleString()}**`)
            .addField("**Member Count**", "This Server Has ` " + `${message.guild.memberCount}` + " ` **Members**")
            .addField("**Emoji Count**", "This Server Has ` " + `${message.guild.emojis.cache.size}` + " ` **Emojis**")
            .addField("**Roles Count**", "This Server Has ` " + `${message.guild.roles.cache.size}` + " ` **Roles**")
            .addField("**Channels Count**", "This Server Has ` " + `${message.guild.channels.cache.size}` + " ` **Channels**")
            .addField("**Server Logo**", "The server icon.")
            .setURL(ServerLogo);
        message.reply({ embeds: [ServerInfoEmbed] });
    }
};
