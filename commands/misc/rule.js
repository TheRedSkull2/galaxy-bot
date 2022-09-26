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
        if (args[1] === "1") {
            const RuleEmbed = new discord_js_1.MessageEmbed()
                .addField("Rule #1", "No misusing channels and stay on topic of the channels, \n Example: Using #memes or #bot-commands channel as a talking place.");
            message.reply({ embeds: [RuleEmbed] });
        }
        if (args[1] === "2") {
            const RuleEmbed = new discord_js_1.MessageEmbed()
                .addField("Rule #2", 'Dont impersonate staff members or pretend to be a mod ("mini modding")');
            message.reply({ embeds: [RuleEmbed] });
        }
        if (args[1] === "3") {
            const RuleEmbed = new discord_js_1.MessageEmbed()
                .addField("Rule #3", "No swearing and no racism , no talking about lgbtq or religion , no adult content or anything related to it , no spamming because it fills up chat and only speak english or arabic.");
            message.reply({ embeds: [RuleEmbed] });
        }
        if (args[1] === "4") {
            const RuleEmbed = new discord_js_1.MessageEmbed()
                .addField("Rule #4", "We want to keep this community nice and civil - help us do  that by respecting all the mods and admins and the owner and everyone you talk to , dont bypass the filter or say racial slurs.");
            message.reply({ embeds: [RuleEmbed] });
        }
        if (args[1] === "5") {
            const RuleEmbed = new discord_js_1.MessageEmbed()
                .addField("Rule #5", "No advertising via youtube , discord servers ,etc");
            message.reply({ embeds: [RuleEmbed] });
        }
        if (args[1] === "6") {
            const RuleEmbed = new discord_js_1.MessageEmbed()
                .addField("Rule #6", "No grabify links, viruses, links to viruses, or token grabbers. These will result in an automated ban.");
            message.reply({ embeds: [RuleEmbed] });
        }
        if (args[1] === "7") {
            const RuleEmbed = new discord_js_1.MessageEmbed()
                .addField("Rule #7", "No having usernames that arent normal like a different font/nsfw , it will be changed if that happens.");
            message.reply({ embeds: [RuleEmbed] });
        }
        if (args[1] === "8") {
            const RuleEmbed = new discord_js_1.MessageEmbed()
                .addField("Rule #8", "No Spam Pinging/Spam DMing Anyone \n No Spam pinging in #general or spam dming people for no reason , also Dont ping the owner alot or you will be muted , just dm and he will answer you.");
            message.reply({ embeds: [RuleEmbed] });
        }
        if (args[1] === "9") {
            const RuleEmbed = new discord_js_1.MessageEmbed()
                .addField("Rule #9", "no being part of lgbtq or supporting it \n Reason : we have IslamBot and #islam-area here and also the founder and co founder are muslims so its against our religion so we dont allow lgbtq members or supporters.");
            message.reply({ embeds: [RuleEmbed] });
        }
    }
};
