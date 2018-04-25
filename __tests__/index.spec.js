const lolChamps = require("../dist/index");
const fixture = require("./fixtures/index");

function determineLangCode(lang) {
  const champs = require(`../data/${lang.toLowerCase()}.json`);
  return champs.data;
}

describe("Check support languages", () => {
  const supportedLangs = fixture.tags;

  it("should return false, does not support Bulgarian", () => {
    expect(lolChamps.languages.has('bg')).toBeFalsy();
  });

  for (let i = 0; i < supportedLangs.length; i++) {
    it("should return true", () => {
      expect(lolChamps.languages.has(supportedLangs[i])).toBeTruthy();
    });
  }
});

describe("Get a list of entire champion names", () => {
  it("should return names in Czech", () => {
    const names = lolChamps.all("cs");
    expect(fixture.champions.cs).toEqual(names);
  });

  it("should return names in Dutch", () => {
    const names = lolChamps.all("de");
    expect(fixture.champions.de).toEqual(names);
  });

  it("should return names in Greek", () => {
    const names = lolChamps.all("el");
    expect(fixture.champions.el).toEqual(names);
  });

  it("should return names in French", () => {
    const names = lolChamps.all("fr");
    expect(fixture.champions.fr).toEqual(names);
  });

  it("should return names in Hungalian", () => {
    const names = lolChamps.all("hu");
    expect(fixture.champions.hu).toEqual(names);
  });

  it("should return names in English", () => {
    const names = lolChamps.all();
    expect(fixture.champions.en).toEqual(names);
  });

  it("should return names in Italian", () => {
    const names = lolChamps.all("it");
    expect(fixture.champions.en).toEqual(names);
  });

  it("should return names in Japanese", () => {
    const names = lolChamps.all("ja");
    expect(fixture.champions.ja).toEqual(names);
  });

  it("should return names in Korean", () => {
    const names = lolChamps.all("KO");
    expect(fixture.champions.ko).toEqual(names);
  });

  it("should return names in Polish", () => {
    const names = lolChamps.all("pl");
    expect(fixture.champions.pl).toEqual(names);
  });

  it("should return names in Portuguese", () => {
    const names = lolChamps.all("pt");
    expect(fixture.champions.pt).toEqual(names);
  });

  it("should return names in Russian", () => {
    const names = lolChamps.all("ru");
    expect(fixture.champions.ru).toEqual(names);
  });

  it("should return names in Turkish", () => {
    const names = lolChamps.all("tr");
    expect(fixture.champions.en).toEqual(names);
  });

  it("should return names in Vietnamese", () => {
    const names = lolChamps.all("vn");
    expect(fixture.champions.vn).toEqual(names);
  });

  it("should return names in Simplified Chinese", () => {
    const names = lolChamps.all("zh-hans");
    expect(fixture.champions.zhHans).toEqual(names);
  });

  it("should return names in Traditional Chinese", () => {
    const names = lolChamps.all("zh-hant");
    expect(fixture.champions.zhHants).toEqual(names);
  });
});

describe("Get champion name by id", () => {
  it("should return Nasus", () => {
    const name = lolChamps.getName(75);
    expect(name).toBe("Nasus");
  });

  it("should return 이블린", () => {
    const name = lolChamps.getName(28, "ko");
    expect(name).toBe("이블린");
  });

  it("should return 诺克萨斯之手", () => {
    const name = lolChamps.getName(122, "zh-hans");
    expect(name).toBe("诺克萨斯之手");
  });
});

describe("Get champion id by name", () => {
  it("should return 35", () => {
    const id = lolChamps.getId("Shaco");
    expect(id).toBe(35);
  });

  it("should return 223", () => {
    const id = lolChamps.getId("TahmKench");
    expect(id).toBe(223);
  });

  it("should return 5", () => {
    const id = lolChamps.getId("xinzhao");
    expect(id).toBe(5);
  });

  it("should return 5", () => {
    const id = lolChamps.getId("xin zhao");
    expect(id).toBe(5);
  });

  it("should return 81", () => {
    const id = lolChamps.getId("エズリアル", "ja");
    expect(id).toBe(81);
  });

  it("should return 202", () => {
    const id = lolChamps.getId("Джин", "ru");
    expect(id).toBe(202);
  });
});

describe("Throws an error when the champion name does not exists", () => {
  it("should throw an error message if a champion name does not exist", () => {
    expect(() => {
      lolChamps.getId("teeeemo");
    }).toThrowError("teeeemo does not exists. Please double check the name.");
  });

  it("should throw an error message if an id does not exist", () => {
    expect(() => {
      lolChamps.getName(999);
    }).toThrowError("999 does not exists. Please double check the id.");
  });
});

describe("Champion data", () => {
  it("should return object type of a champion TahmKench data", () => {
    const mock = determineLangCode("en");
    const champData = lolChamps.getChampion("tahmkench");
    expect(champData).toBeObject();
    expect(champData).toBe(mock.TahmKench);
  });

  it("should return object type of a champion Fiddlesticks data", () => {
    const mock = determineLangCode("ko");
    const champData = lolChamps.getChampion("피들스틱", "ko");
    expect(champData).toBeObject();
    expect(champData).toBe(mock.Fiddlesticks);
  });

  it("should return object type of a champion Blitzcrank data", () => {
    const mock = determineLangCode("ZH-HANS");
    const champData = lolChamps.getChampion("蒸汽机器人", "zh-hans");
    expect(champData).toBeObject();
    expect(champData).toBe(mock.Blitzcrank);
  });

  it("should return object type of a champion LeeSin data", () => {
    const mock = determineLangCode("ru");
    const champData = lolChamps.getChampion("Ли Син", "ru");
    expect(champData).toBeObject();
    expect(champData).toBe(mock.LeeSin);
  });
});

describe("Random champion names", () => {
  it("should return string type of random name", () => {
    const champName = lolChamps.random("JA");
    expect(champName).toBeString();
  });
});
