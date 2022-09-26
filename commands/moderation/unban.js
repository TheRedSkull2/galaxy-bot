"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    category: 'Moderation',
    description: 'Unmutes a member.',
    slash: false,
    testOnly: true,
    callback: ({ message, channel, member }) => {
        var _a, _b, _c, _d;
        if (message.channel.id === "992517006345637890" && !((_a = message.member) === null || _a === void 0 ? void 0 : _a.permissions.has("MUTE_MEMBERS"))) {
            return "You can't use bot commands here!";
        }
        const user = (_b = message.mentions.members) === null || _b === void 0 ? void 0 : _b.first();
        var args = message.content.substr(1).split(/ +/);
        if ((_c = message.member) === null || _c === void 0 ? void 0 : _c.permissions.has("BAN_MEMBERS")) {
            if (args[1].length != 18)
                return message.reply("Please enter a valid user id!");
            const id = args[1];
            const BanEmbed = new discord_js_1.MessageEmbed()
                .setTitle("``" + id + "``" + ` has been unbanned`)
                .setColor("RED");
            message.channel.send({ embeds: [BanEmbed] });
            (_d = message.guild) === null || _d === void 0 ? void 0 : _d.members.unban(id);
        }
    }
};
