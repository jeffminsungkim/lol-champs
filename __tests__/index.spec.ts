import * as lolChamps from "../dist/index";
const fixture = require("./fixtures/index");

function determineLangCode(lang: string = "en") : any {
  const champs = require(`../data/${lang}.json`);
  return champs.data;
}

describe("Get a list of entire champion names", () => {
  it("should return names in English", () => {
    const names = lolChamps.all();
    expect(fixture.champions.en).toEqual(names);
  });
});

describe("Get champion name by id", () => {
  it("should return Pantheon", () => {
    const name = lolChamps.getName(80);
    expect(name).toBe("Pantheon");
  });
});

describe("Get champion id by name", () => {
  it("should return 117", () => {
    const id = lolChamps.getId("Lulu");
    expect(id).toBe(117);
  });

  it("should return 223", () => {
    const id = lolChamps.getId("tahmkench");
    expect(id).toBe(223);
  });
});

describe("Check support languages", () => {
  it("should return true, does support Russian", () => {
    expect(lolChamps.languages.has("ru")).toBeTruthy();
  });
  it("should return false, does not support Danish", () => {
    expect(lolChamps.languages.has("da")).toBeFalsy();
  });
});

describe("Throws an error when the champion name does not exists", () => {
  it("should throw an error message", () => {
    expect(() => {
      lolChamps.getId("tamkench");
    }).toThrowError("tamkench does not exists. Please double check the name.");
  });
});

describe("Champion data", () => {
  it("should return a champion TahmKench data", () => {
    const mock = determineLangCode("en");
    const champData = lolChamps.getChampion("tahmkench");
    expect(champData).toBe(mock.TahmKench);
  });

  it("should return a champion Fiddlesticks data", () => {
    const mock = determineLangCode("ko");
    const champData = lolChamps.getChampion("피들스틱", "ko");
    expect(champData).toBe(mock.Fiddlesticks);
  });

  it("should return a champion Blitzcrank data", () => {
    const mock = determineLangCode("zh-Hans");
    const champData = lolChamps.getChampion("蒸汽机器人", "zh-Hans");
    expect(champData).toBe(mock.Blitzcrank);
  });

  it("should return a champion LeeSin data", () => {
    const mock = determineLangCode("ru");
    const champData = lolChamps.getChampion("Ли Син", "ru");
    expect(champData).toBe(mock.LeeSin);
  });
});
