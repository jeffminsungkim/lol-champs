import * as lolChamps from "../dist/index";
const fixture = require("./fixtures/index");

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
