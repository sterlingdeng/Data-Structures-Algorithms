const chai = require("chai");
const expect = chai.expect;
const { Dictionary } = require("../dictionary");

describe("dictionary data structure", () => {
  it("should test keys()", () => {
    const dic = new Dictionary();
    dic.set("Gandalf", "gandalf@gmail.com");
    dic.set("John", "johnsnow@gmail.com");
    dic.set("Tyrion", "tyrion@gmail.com");

    expect(dic.hasKey("Gandalf")).to.equal(true);
    expect(dic.hasKey("Tyrion")).to.equal(true);
    expect(dic.hasKey("tyrion")).to.equal(false);
    expect(dic.hasKey("drWho")).to.equal(false);
  });
  it("should test size()", () => {
    const dic = new Dictionary();
    dic.set("Gandalf", "gandalf@gmail.com");
    dic.set("John", "johnsnow@gmail.com");
    dic.set("Tyrion", "tyrion@gmail.com");

    expect(dic.size()).to.equal(3);
  });

  it("should test keys()", () => {
    const dic = new Dictionary();
    dic.set("Gandalf", "gandalf@gmail.com");
    dic.set("John", "johnsnow@gmail.com");
    dic.set("Tyrion", "tyrion@gmail.com");

    expect(dic.keys()).to.deep.equal(["Gandalf", "John", "Tyrion"]);
  });
  it("should test values()", () => {
    const dic = new Dictionary();
    dic.set("Gandalf", "gandalf@gmail.com");
    dic.set("John", "johnsnow@gmail.com");
    dic.set("Tyrion", "tyrion@gmail.com");

    expect(dic.values()).to.deep.equal([
      "gandalf@gmail.com",
      "johnsnow@gmail.com",
      "tyrion@gmail.com"
    ]);
  });

  it("should test remove()", () => {
    const dic = new Dictionary();
    dic.set("Gandalf", "gandalf@gmail.com");
    dic.set("John", "johnsnow@gmail.com");
    dic.set("Tyrion", "tyrion@gmail.com");
    dic.remove("John");

    expect(dic.size()).to.equal(2);
    expect(dic.keys()).to.deep.equal(["Gandalf", "Tyrion"]);
  });
});
