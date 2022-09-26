"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_poll_1 = require("discord.js-poll");
exports.default = {
    category: 'Misc',
    description: 'Get the servers membercount',
    slash: false,
    testOnly: true,
    callback: ({ client, message, guild }) => {
        var _a;
        if (message.channel.id === "992517006345637890" && !((_a = message.member) === null || _a === void 0 ? void 0 : _a.permissions.has("MUTE_MEMBERS"))) {
            return "You can't use bot commands here!";
        }
        var args = message.content.substr(1).split(/ +/);
        if (!message.member)
            return;
        if (message.member.permissions.has("MUTE_MEMBERS")) {
            (0, discord_js_poll_1.poll)(message, args, "+", "DARK_BUT_NOT_BLACK");
        }
    }
};
