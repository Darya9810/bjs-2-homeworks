function Student(name, gender, age) {
    this.name = name ;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
};
Student.prototype.addMark = function (mark) {
    if (this.marks === undefined) {
        this.marks = [mark];
    } else {
        this.marks.push(mark);
    }
};

Student.prototype.addMarks = function (...other) {
    if (this.marks === undefined) {
        this.marks = [...other];
    } else {
        this.marks.push(...other);
    }
};

Student.prototype.getAverage = function () {
    if (this.marks.length === 0) {
        return 0;
    }
    let summ = 0;
    for (let i = 0; i < this.marks.length; i++) {
        summ += this.marks[i];
    }
    return summ / this.marks.length;
};

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
};