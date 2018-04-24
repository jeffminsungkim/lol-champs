"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.languages = new Set([
    "cs",
    "de",
    "el",
    "en",
    "fr",
    "hu",
    "it",
    "ja",
    "ko",
    "pl",
    "pt",
    "ru",
    "tr",
    "vn",
    "zh-Hans",
    "zh-Hant"
]);
function capitalizeName(champsName) {
    var regexp = /([A-Za-z\u00C0-\u1FFF\u2800-\uFFFD]+)/gi;
    return champsName.replace(regexp, function (match) { return match.charAt(0).toUpperCase() + match.substring(1); });
}
function determineLangCode(lang) {
    if (lang === void 0) { lang = "en"; }
    var champs = require("../data/" + lang + ".json");
    return champs.data;
}
function assembleNameList(champs) {
    return Object.keys(champs).map(function (key) {
        return champs[key].name;
    });
}
function getName(champId, lang) {
    if (lang === void 0) { lang = "en"; }
    var champs = determineLangCode(lang);
    var matched = Object.keys(champs).filter(function (key) {
        return champs[key].id === champId;
    }).toString();
    return champs[matched].name;
}
exports.getName = getName;
function getId(name, lang) {
    if (lang === void 0) { lang = "en"; }
    var champs = determineLangCode(lang);
    var champName = name;
    if (champName.match(' '))
        champName = capitalizeName(name);
    var matched = Object.keys(champs).filter(function (key) {
        return champs[key].name === champName || key === champName || key.toLowerCase() === champName;
    }).toString();
    if (matched === "")
        throw new Error(champName + " does not exists. Please double check the name.");
    return champs[matched].id;
}
exports.getId = getId;
function all(lang) {
    if (lang === void 0) { lang = "en"; }
    var champs = determineLangCode(lang);
    if (!lang || lang === 'en') {
        return assembleNameList(champs);
    }
    if (!exports.languages.has(lang)) {
        throw new Error("Localized list for language code '" + lang + "' does not exist.");
    }
    return assembleNameList(champs);
}
exports.all = all;
