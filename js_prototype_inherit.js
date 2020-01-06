function person(name) {
  this.name = name;
}

person.prototype.greeting = function (sentence = '') {
  return `Hello! ${sentence} ${this.name}`;
}

function teacher(name, subject) {
  person.call(this, name);
  this.subject = subject;
}

teacher.prototype =  Object.create(person.prototype);

teacher.prototype.mySubject = function() {
  this.greeting();
  console.log(this.subject);
}

var b = new person('Ernesto')
var a = new teacher('Pep');

function mathTeacher(name) {
  teacher.call(this, name, 'math');
}

mathTeacher.prototype = Object.create(teacher.prototype);

mathTeacher.prototype.doMatchTeacherThings = function() {
  console.log(`${this.greeting('mio')} teacher do ${this.subject}`)
}

var m = new mathTeacher('rodrigo');

console.log(m);
m.doMatchTeacherThings();
