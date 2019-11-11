import Parser from "../../Lib/RscParser/parser.js";

const background = chrome.extension.getBackgroundPage();
const API = new background.API();

Parser.parse({ type: "i18n" });
Parser.parse({ type: "rsc" });

export default API;
