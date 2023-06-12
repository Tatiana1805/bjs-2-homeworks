function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student1 = new Student();
let Student2 = new Student();

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks === undefined){
    this.marks = [marks];
  } else {
    //Object.keys(marks).forEach((key) => console.log(key, marks[key]))
   return this.marks.push(...marks);  

  }
  }


Student.prototype.getAverage = function () {
  if(this.marks === undefined){
    return 0;
  } else {
    this.marks.reduce((acc, m) => acc + m, 0) / this.marks.length;
}
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
