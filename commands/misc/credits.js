"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    category: 'Misc',
    description: 'Shows who made the bot.',
    slash: false,
    testOnly: true,
    callback: ({ client, message, guild }) => {
        var _a;
        if (message.channel.id === "992517006345637890" && !((_a = message.member) === null || _a === void 0 ? void 0 : _a.permissions.has("MUTE_MEMBERS"))) {
            return "You can't use bot commands here!";
        }
        const credits = new discord_js_1.MessageEmbed()
            .setTitle("Credits")
            .setDescription("This bot is a moderation and fun bot developed for Halal World discord server.")
            .addField("AzE (https://azedeveloper.github.io/)", "- Main developer")
            .addField("Yaso (https://discord.gg/ndWYwGQHFk)", "- Art & Ideas")
            .addField("Programs used:", "``Discord.JS v13.9.0``");
        message.reply({ embeds: [credits] });
    }
};
