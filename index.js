"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const discord_js_1 = __importStar(require("discord.js"));
const wokcommands_1 = __importDefault(require("wokcommands"));
const path_1 = __importDefault(require("path"));
const client = new discord_js_1.default.Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES,
    ]
});
const activities = [
    ">help",
    "your messages",
    "Chicken Invaders",
];
client.on('ready', () => {
    console.log("Yaso's Discord Bot Has Started");
    setInterval(() => {
        var _a, _b;
        // generate random number between 1 and list length.
        const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
        const newActivity = activities[randomIndex];
        if (newActivity != "your messages") {
            (_a = client.user) === null || _a === void 0 ? void 0 : _a.setActivity(newActivity, { type: "PLAYING" });
        }
        else {
            (_b = client.user) === null || _b === void 0 ? void 0 : _b.setActivity(newActivity, { type: "WATCHING" });
        }
    }, 12000);
    new wokcommands_1.default(client, {
        commandDir: path_1.default.join(__dirname, 'commands'),
        typeScript: false,
        testServers: ['1014516829064003594', '992517005389353021'],
    });
});
client.on("message", (message) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const bannedWords = [
        "retard",
        "r e t a r d",
        "nigger",
        "nigga",
        "nigeria",
        "niger",
        "n i g g e r",
        "n i g g a",
        "n i g e r i a",
        "n i g e r",
        "sex",
        "boobs",
        "cum",
        "sperm",
        "dick",
        "pussy",
        "xxx",
        "sexy",
        "boob",
        "b o o b i e s",
        "boobies",
        "b o o b",
        "penis",
        "p e n i s",
        "vagina",
        "v a g i n a",
        "porn",
        "p o r n",
        "whore",
        
    ];
    try {
        if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
            if ((_a = message.member) === null || _a === void 0 ? void 0 : _a.permissions.has("ADMINISTRATOR"))
                return;
            yield message.delete();
            yield message.channel.send(`You are not allowed to send that here.`);
        }
    }
    catch (e) {
        console.log(e);
    }
}));
client.login("MTAxNDUxNjk4MjY0Njg0NTUxMg.GlwhgF.NeD0BdSIVnvD987DTMRybEMzE-_4Lwoj0gWAKI");
