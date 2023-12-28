//complete this code
class Person {
	 constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(age) {
    this._age = age;
  }
}

class Student extends Person {
	constructor(name, age) {
    super(name, age);
  }

  study() {
    console.log(`${this.name} is studying.`);
  }
}

class Teacher extends Person {
	constructor(name, age) {
    super(name, age);
  }

  teach() {
    console.log(`${this.name} is teaching.`);
  }
}
const person = new Person("John Doe", 25);
console.log(person.name); // Output: John Doe
person.age = 26; // Using the setter

// Creating a Student
const student = new Student("Alice Smith", 20);
console.log(student.name); // Output: Alice Smith
student.study(); // Output: Alice Smith is studying.

// Creating a Teacher
const teacher = new Teacher("Professor Johnson", 40);
console.log(teacher.name); // Output: Professor Johnson
teacher.teach(); // Output: Professor Johnson is teaching.
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
