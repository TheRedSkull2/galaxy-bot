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
        var _a;
        if (message.channel.id === "992517006345637890" && !((_a = message.member) === null || _a === void 0 ? void 0 : _a.permissions.has("MUTE_MEMBERS"))) {
            return "You can't use bot commands here!";
        }
        var args = message.content.substr(1).split(/ +/);
        if (!args[2])
            return message.reply("Please ask a full question!");
        const replies = ["Yes.", "No.", "I don't know.", "Ask again later.", "Definitely.", "Maybe.", "Maybe not.", "Never."];
        const result = Math.floor((Math.random() * replies.length));
        const question = args.slice(1).join(" ");
        const ballembed = new discord_js_1.MessageEmbed()
            .setTitle(">8Ball")
            .addField("Question", question)
            .addField("Answer", replies[result]);
        message.channel.send({ embeds: [ballembed] });
    })
};
