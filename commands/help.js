"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const prefix = ">";
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
        if (args[1] === "mod") {
            const HelpModEmbed = new discord_js_1.MessageEmbed()
                .setTitle("🛡️Moderation Commands")
                .addField(prefix + "mute", "Mutes a user. Usage: ``" + prefix + "mute @user time (s/m/h/d/w)``")
                .addField(prefix + "unmute", "Unmutes a user. Usage: ``" + prefix + "unmute @user``")
                .addField(prefix + "sm", "Sets the channel slowmode. Usage: ``" + prefix + "sm time (s/m/h)``")
                .addField(prefix + "mod", "Moderates a users nickname. Usage: ``" + prefix + "mod @user``")
                .addField(prefix + "unmod", "Unmoderates a users nickname. Usage: ``" + prefix + "unmod @user``")
                .addField(prefix + "purge", "Deletes messages in general. Usage: ``" + prefix + "purge (how many messages)``")
                .addField(prefix + "ban", "Bans a user. Usage: ``" + prefix + "ban @user``")
                .addField(prefix + "unban", "Unbans a user. Usage: ``" + prefix + "unban (userID)``")
                .addField(prefix + "kick", "Kicks a user. Usage: ``" + prefix + "kick @user``")
                .addField(prefix + "warn", "Warns a user. Usage: ``" + prefix + "warn @user reason``")
                .addField(prefix + "clearwarn", "Clears a users warnings. Usage: ``" + prefix + "clearwarn @user``");
            message.reply({ embeds: [HelpModEmbed] });
        }
        else if (args[1] === "fun") {
            const HelpFunEmbed = new discord_js_1.MessageEmbed()
                .setTitle("🐸Fun Commands")
                .addField(prefix + "meme", "Sends a meme. Usage: ``" + prefix + "meme``")
                .addField(prefix + "8ball", "An 8ball. Usage: ``" + prefix + "8ball (question)``")
                .addField(prefix + "joke", "Sends a joke. Usage: ``" + prefix + "joke``")
                .addField(prefix + "avatar", "Get someones avatar. Usage: ``" + prefix + "avatar @user``")
                .addField(prefix + "omak", "OMAK SUS! Usage: ``" + prefix + "omak``");
            message.reply({ embeds: [HelpFunEmbed] });
        }
        else if (args[1] === "misc") {
            const HelpMiscEmbed = new discord_js_1.MessageEmbed()
                .setTitle("📚Misc Commands")
                .addField(prefix + "credits", "See who made the bot. Usage: ``" + prefix + "credits``")
                .addField(prefix + "stealemoji", "Steals an emoji from another server. Usage: ``" + prefix + "stealemoji (emoji)``")
                .addField(prefix + "poll", "Creates a poll. Usage: ``" + prefix + "poll (question) + Answer1 + Answer2 + Answer3... (max 10)``")
                .addField(prefix + "serverinfo", "Info about the server. Usage: ``" + prefix + "serverinfo``")
                .addField(prefix + "ping", "Checks the bot ping. Usage: ``" + prefix + "ping``")
                .addField(prefix + "warnings", "Check users warnings. Usage: ``" + prefix + "warnings @user``");
            message.reply({ embeds: [HelpMiscEmbed] });
        }
        else {
            const HelpEmbed = new discord_js_1.MessageEmbed()
                .setTitle("❓Help")
                .addField("🛡️Moderation Commands", "To see all of the moderation commands run: ``" + prefix + "help mod`` \n\n")
                .addField("🐸Fun Commands", "To see all of the fun commands run: ``" + prefix + "help fun`` \n\n")
                .addField("📚Misc Commands", "To see all of the misc commands run: ``" + prefix + "help misc`` \n\n")
                .addField("Join Halal World 🕋 : **https://discord.gg/EsNCYMDdeV**", "Join now gamers / aze");
            message.reply({ embeds: [HelpEmbed] });
        }
    }
};
