"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    category: 'Moderation',
    description: 'Unmutes a member.',
    slash: false,
    testOnly: true,
    callback: ({ message, channel, member }) => {
        var _a, _b;
        if (message.channel.id === "992517006345637890" && !((_a = message.member) === null || _a === void 0 ? void 0 : _a.permissions.has("MUTE_MEMBERS"))) {
            return "You can't use bot commands here!";
        }
        if (!member.permissions.has("MUTE_MEMBERS"))
            return;
        var args = message.content.substr(1).split(/ +/);
        const user = (_b = message.mentions.members) === null || _b === void 0 ? void 0 : _b.first();
        if (user == null)
            return;
        if (user.permissions.has("ADMINISTRATOR"))
            return;
        user.timeout(0);
        const MuteEmbed = new discord_js_1.MessageEmbed()
            .setTitle(user.user.tag + ` has been unmuted`)
            .setColor("ORANGE");
        message.channel.send({ embeds: [MuteEmbed] });
    }
};
