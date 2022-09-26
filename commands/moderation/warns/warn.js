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
const quick_db_1 = require("quick.db");
const db = new quick_db_1.QuickDB();
exports.default = {
    category: 'Moderation',
    description: 'Warns a member',
    slash: false,
    testOnly: true,
    callback: ({ message, channel, member }) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (message.channel.id === "992517006345637890" && !((_a = message.member) === null || _a === void 0 ? void 0 : _a.permissions.has("MUTE_MEMBERS"))) {
            return "You can't use bot commands here!";
        }
        const user = (_b = message.mentions.members) === null || _b === void 0 ? void 0 : _b.first();
        var args = message.content.substr(1).split(/ +/);
        if (!((_c = message.member) === null || _c === void 0 ? void 0 : _c.permissions.has("MUTE_MEMBERS"))) {
            return;
        }
        if (!user) {
            return "You need to mention a user";
        }
        if ((_d = message.mentions.users.first()) === null || _d === void 0 ? void 0 : _d.bot) {
            return "You can't warn bots!";
        }
        if (message.author.id === (user === null || user === void 0 ? void 0 : user.id)) {
            return "You can't warn yourself!";
        }
        if (user.permissions.has("MUTE_MEMBERS")) {
            return "You can't warn " + (user === null || user === void 0 ? void 0 : user.user.tag);
        }
        
        const reason = args.slice(2).join(" ");
        if (!reason) {
            return "Please provide a reason!";
        }
        let warnings = yield db.get(`warnings_${(_f = message.guild) === null || _f === void 0 ? void 0 : _f.id}_${user === null || user === void 0 ? void 0 : user.id}`);
        if (warnings === null) {
            yield db.set(`warnings_${(_g = message.guild) === null || _g === void 0 ? void 0 : _g.id}_${user === null || user === void 0 ? void 0 : user.id}`, 1);
            const WarnEmbed = new discord_js_1.MessageEmbed()
                .setTitle((user === null || user === void 0 ? void 0 : user.user.tag) + ` has been warned |` + '``' + (user === null || user === void 0 ? void 0 : user.user.id) + '``')
                .setColor("YELLOW");
            yield message.channel.send({ embeds: [WarnEmbed] });
        }
        else if (warnings !== null) {
            yield db.add(`warnings_${(_h = message.guild) === null || _h === void 0 ? void 0 : _h.id}_${user === null || user === void 0 ? void 0 : user.id}`, 1);
            const WarnEmbed = new discord_js_1.MessageEmbed()
                .setTitle((user === null || user === void 0 ? void 0 : user.user.tag) + ` has been warned |` + '``' + (user === null || user === void 0 ? void 0 : user.user.id) + '``')
                .setColor("YELLOW");
            yield message.channel.send({ embeds: [WarnEmbed] });
            if (!warnings)
                return;
            if (warnings >= 2 && warnings <= 7) {
                user === null || user === void 0 ? void 0 : user.timeout(7200000);
                const MuteEmbed = new discord_js_1.MessageEmbed()
                    .setTitle((user === null || user === void 0 ? void 0 : user.user.tag) + ` has been muted for 2 hours` + ' | ``' + (user === null || user === void 0 ? void 0 : user.user.id) + '``')
                    .setColor("ORANGE");
                yield message.channel.send({ embeds: [MuteEmbed] });
            }
            else if (warnings >= 6) {
                user === null || user === void 0 ? void 0 : user.timeout(25200000);
                const MuteEmbed = new discord_js_1.MessageEmbed()
                    .setTitle((user === null || user === void 0 ? void 0 : user.user.tag) + ` has been muted for 12 hours` + ' | ``' + (user === null || user === void 0 ? void 0 : user.user.id) + '``')
                    .setColor("ORANGE");
                yield message.channel.send({ embeds: [MuteEmbed] });
            }
        }
    })
};
