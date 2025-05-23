// class
function Student(name, dob, grade) {
    this.name = name;
    this.grade = grade;
    this.dob = new Date(dob);
    
    // prototype method
    this.getFullName = function () {
        return this.name;
    }
    this.getBirthYear = function () {
        return this.dob.getFullYear();
    }
}

// Instantiate object
const student1 = new Student("John Doe", "12-06-2004", 9);
const student2 = new Student("Jane Smith", "13-06-2038", 10);

console.log(student1.dob, student2.dob.getFullYear());
console.log(student1.getFullName());