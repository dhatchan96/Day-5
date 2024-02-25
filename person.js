class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  
    
    displayInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    }
  }
  
 
  const person1 = new Person("Alice", 30, "Female");
  const person2 = new Person("Bob", 25, "Male");
  
  person1.displayInfo(); 
  person2.displayInfo(); 