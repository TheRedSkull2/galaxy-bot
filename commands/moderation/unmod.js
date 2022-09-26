"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    category: 'Misc',
    description: 'Shows who made the bot.',
    slash: false,
    testOnly: true,
    callback: ({ client, message, guild }) => {
        var _a, _b, _c;
        if (message.channel.id === "992517006345637890" && !((_a = message.member) === null || _a === void 0 ? void 0 : _a.permissions.has("MUTE_MEMBERS"))) {
            return "You can't use bot commands here!";
        }
        if ((_b = message.member) === null || _b === void 0 ? void 0 : _b.permissions.has("KICK_MEMBERS")) {
            const member = (_c = message.mentions.members) === null || _c === void 0 ? void 0 : _c.first();
            if (member != null) {
                if (member.permissions.has("KICK_MEMBERS")) {
                    const NoBanEmbed = new discord_js_1.MessageEmbed()
                        .setTitle('You cant unmod ' + member.user.tag + '!🤦');
                    message.channel.send({ embeds: [NoBanEmbed] });
                    message.delete();
                }
                else {
                    member.setNickname("");
                    const mod = new discord_js_1.MessageEmbed()
                        .setTitle(member.user.tag + "'s nickname has been unmoderated.")
                        .setColor("DARK_AQUA");
                    message.delete();
                    message.channel.send({ embeds: [mod] });
                }
            }
            else {
                const NoBanEmbed = new discord_js_1.MessageEmbed()
                    .setTitle('You need to mention a user! ' + '🤦');
                message.channel.send({ embeds: [NoBanEmbed] });
                message.delete();
            }
        }
    }
};
