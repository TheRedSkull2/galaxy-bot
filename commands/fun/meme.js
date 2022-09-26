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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const node_fetch_1 = __importDefault(require("node-fetch"));
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
        const url = yield (0, node_fetch_1.default)("https://www.reddit.com/r/dankmemes/random/.json");
        if (!url)
            return;
        const random = yield url.json();
        if (!message.member)
            return;
        const embed = new discord_js_1.MessageEmbed()
            .setTitle(`${random[0].data.children[0].data.title}`)
            .setImage(random[0].data.children[0].data.url)
            .setFooter("Requested by: " + message.member.user.tag);
        message.reply({ embeds: [embed] });
    })
};
