const uniqueRandomArray = require('unique-random-array');
const randomNameGenerator = new Map();
const forceLowerCase = (str: string) => str.toLowerCase();
export const languages = new Set([
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
  "zh-hans",
  "zh-hant"
]);

function capitalizeName(champsName: string) {
  const regexp = /([A-Za-z\u00C0-\u1FFF\u2800-\uFFFD]+)/gi;
  return champsName.replace(regexp, match => match.charAt(0).toUpperCase() + match.substring(1));
}

function determineLangCode(lang: string = "en") : any {
  const champs = require(`../data/${lang.toLowerCase()}.json`);
  return champs.data;
}

function assembleNameList(champs: any) : Array<string> {
  return Object.keys(champs).map((key: any) => {
    return champs[key].name;
  });
}

export function getName(champId: number, lang: string = "en") : string {
  const champs = determineLangCode(lang);
  const matched = Object.keys(champs).filter((key) => {
    return champs[key].id === champId
  }).toString();

  if (matched === "")
    throw new Error(`${champId} does not exists. Please double check the id.`);

  return champs[matched].name;
}

export function getChampion(name: string, lang: string = "en") : object {
  const champs = determineLangCode(lang);
  let champName = name;
  if (champName.match(' ')) champName = capitalizeName(name);

  const data = Object.keys(champs).filter((key) => {
    return champs[key].name === champName || key === champName || forceLowerCase(key) === champName
  }).toString();

  if (data === "")
    throw new Error(`${champName} does not exists. Please double check the name.`);

  return champs[data];
}

export function getId(name: string, lang: string = "en") : number {
  const champs = determineLangCode(lang);
  let champName = name;
  if (champName.match(' ')) champName = capitalizeName(name);

  const matched = Object.keys(champs).filter((key) => {
    return champs[key].name === champName || key === champName || forceLowerCase(key) === champName
  }).toString();

  if (matched === "")
    throw new Error(`${champName} does not exists. Please double check the name.`);

  return champs[matched].id;
}

export function all(lang: string = "en") : Array<string> {
  const champs = determineLangCode(lang);
  const langCode = forceLowerCase(lang);

  if (!langCode || langCode === 'en') {
    return assembleNameList(champs);
  }

  if (!languages.has(langCode)) {
    throw new Error(`Localized list for language code '${langCode}' does not exist.`);
  }
  return assembleNameList(champs);
}

export function random(lang: string = "en") : string {
  const langCode = forceLowerCase(lang);

  if (randomNameGenerator.has(langCode))
    return randomNameGenerator.get(langCode)();

  const champs = determineLangCode(lang);
  const random = uniqueRandomArray(assembleNameList(champs));
  randomNameGenerator.set(langCode, random);

  return random();
}
