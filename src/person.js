class Person {

    constructor(name, age, gender, interests) {
        this.age = age
        this.name = name
        this.gender = gender
        this.interests = interests
    }

    hello(){
          return "hello my name is, " + this.name + "and i am " + this.age + "years old. " +this.interests 
    }
}
 

let person = new Person("Ryan", 30, "male", [
                        "being a hardarse",
                        "agile",
                        "ssd hard drives"])

let greeting = person.hello()
 
module.exports = 
    Person
