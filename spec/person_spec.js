let person = require("../src/person");
let ryan = new person("Ryan", 30, "male", [
  "being a hardarse",
  "agile",
  "ssd hard drives"
]);

describe("person ", function() {
  it("name", function() {
    expect(ryan.name).toBe("Ryan");
  });
  it("age", function() {
    expect(ryan.age).toBe(30);
  });

  it("gender", function() {
    expect(ryan.gender).toBe("male");
  });
  it("interests", function() {
    expect(ryan.interests[0]).toBe("being a hardarse");
  });
  it("hello function", function() {
    expect(ryan.hello()).toBe(
      "hello, my name is Ryan and i am 30 years old. My interest are being a hardarse, agile and ssd hard drives"
    );
  });
});
