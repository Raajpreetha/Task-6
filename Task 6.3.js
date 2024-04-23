class Person {
    constructor(firstName, lastName, age, gender, occupation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.occupation = occupation;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge() {
        return this.age;
    }

    getGender() {
        return this.gender;
    }

    getOccupation() {
        return this.occupation;
    }

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    setAge(age) {
        this.age = age;
    }

    setGender(gender) {
        this.gender = gender;
    }

    setOccupation(occupation) {
        this.occupation = occupation;
    }

}

let person1 = new Person("Raajalakshme", "TM", 28, "Female", "Developer");
console.log(person1.getFullName());
console.log(person1.getAge());
console.log(person1.getGender()); 
console.log(person1.getOccupation()); 
person1.setAge(29);
console.log(person1.getAge()); 
person1.setOccupation("fullsatck Developer");
console.log(person1.getOccupation());