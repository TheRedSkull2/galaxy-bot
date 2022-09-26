"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    category: 'Misc',
    description: 'Steals an emoji hehe',
    slash: false,
    testOnly: true,
    callback: ({ client, message, guild }) => {
        var _a;
        if (message.channel.id === "992517006345637890" && !((_a = message.member) === null || _a === void 0 ? void 0 : _a.permissions.has("MUTE_MEMBERS"))) {
            return "You can't use bot commands here!";
        }
        var args = message.content.substr(1).split(/ +/);
        if (!args.length)
            return "LOL! You didn't even mention an emoji?";
        for (const rawEmoji of args) {
            const parsedEmoji = discord_js_1.Util.parseEmoji(rawEmoji);
            if (!parsedEmoji)
                return message.delete;
            if (!message.guild)
                return;
            if (parsedEmoji.id) {
                const extension = parsedEmoji.animated ? ".gif" : ".png";
                const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extension}`;
                message.guild.emojis
                    .create(url, parsedEmoji.name)
                    .then((emoji) => message.channel.send(`Added: \`${emoji.url}\``));
            }
        }
    }
};
