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
const quick_db_1 = require("quick.db");
const db = new quick_db_1.QuickDB();
exports.default = {
    category: 'Moderation',
    description: 'Get how many warnings a user has',
    slash: false,
    testOnly: true,
    callback: ({ message, channel, member }) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e;
        if (message.channel.id === "992517006345637890" && !((_a = message.member) === null || _a === void 0 ? void 0 : _a.permissions.has("MUTE_MEMBERS"))) {
            return "You can't use bot commands here!";
        }
        const user = (_b = message.mentions.members) === null || _b === void 0 ? void 0 : _b.first();
        var args = message.content.substr(1).split(/ +/);
        if (!user)
            return "You have to mention a user!";
        let warnings = yield db.get(`warnings_${(_c = message.guild) === null || _c === void 0 ? void 0 : _c.id}_${user === null || user === void 0 ? void 0 : user.id}`);
        if (warnings === null) {
            return;
        }
        message.channel.send(`**${(_e = (_d = message.mentions.members) === null || _d === void 0 ? void 0 : _d.first()) === null || _e === void 0 ? void 0 : _e.user.tag}** has **${warnings}** warnings`);
    })
};
