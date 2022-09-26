"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    category: 'Misc',
    description: 'Get the servers membercount',
    slash: false,
    testOnly: true,
    callback: ({ message }) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c;
        if (message.channel.id === "992517006345637890" && !((_a = message.member) === null || _a === void 0 ? void 0 : _a.permissions.has("MUTE_MEMBERS"))) {
            return "You can't use bot commands here!";
        }
        var args = message.content.substr(1).split(/ +/);
        const user = (_b = message.mentions.members) === null || _b === void 0 ? void 0 : _b.first();
        if (!user)
            return;
        const pfp = new discord_js_1.MessageEmbed()
            .setTitle(user.user.tag)
            .setImage(user.displayAvatarURL({ size: 1024, dynamic: true }))
            .setFooter("Requested by " + ((_c = message.member) === null || _c === void 0 ? void 0 : _c.user.tag));
        message.reply({ embeds: [pfp] });
    })
};
