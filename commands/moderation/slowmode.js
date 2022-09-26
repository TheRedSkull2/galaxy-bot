"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ms_1 = __importDefault(require("ms"));
exports.default = {
    category: 'Moderation',
    description: 'Sets the slowmode of a channel.',
    slash: false,
    testOnly: true,
    callback: ({ message, channel, member }) => {
        var _a;
        if (message.channel.id === "992517006345637890" && !((_a = message.member) === null || _a === void 0 ? void 0 : _a.permissions.has("MUTE_MEMBERS"))) {
            return "You can't use bot commands here!";
        }
        if (!member.permissions.has("MANAGE_CHANNELS"))
            return;
        var args = message.content.substr(1).split(/ +/);
        if (args[1] == null) {
            return "You have to set a timer!";
        }
        channel.setRateLimitPerUser((0, ms_1.default)(args[1]) / 1000);
        message.reply("Set the slowmode to ``" + args[1] + "``");
    }
};
