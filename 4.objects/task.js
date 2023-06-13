function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks !== undefined && marks.length !== 0){
    this.marks.push(...marks)
   }
}


Student.prototype.getAverage = function () {
  if(this.marks === undefined || this.marks.length === 0){
    return 0;
  } else {
    const mark = this.marks.reduce((acc, m) => acc + m, 0) / this.marks.length;
    return mark;
}
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
