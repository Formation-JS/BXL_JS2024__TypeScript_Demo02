"use strict";
console.warn("Les interfaces en TS");
class Person {
    _lastname;
    _firstname;
    constructor(firstname, lastname) {
        this._firstname = firstname;
        this._lastname = lastname;
    }
    get firstname() {
        return this._firstname;
    }
    set firstname(value) {
        this._firstname = value;
    }
    get lastname() {
        return this._lastname;
    }
    set lastname(value) {
        this._lastname = value;
    }
    get fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
    sleep(nbHour) {
        return `${this.fullname} dort ${nbHour} heures`;
    }
    eat(meal) {
        if (Math.random() > 0.9) {
            return `${this.fullname} refuse de manger !`;
        }
        return `${this.fullname} mange ${meal}`;
    }
}
class Student extends Person {
    _yearResult;
    constructor(firstname, lastname, yearResult) {
        super(firstname, lastname);
        this._yearResult = yearResult;
    }
    get yearResult() {
        return this._yearResult;
    }
    set yearResult(value) {
        this._yearResult = value;
    }
    play(game, nbHour) {
        return `${this.fullname} joue à ${game} durant ${nbHour} heures !`;
    }
    attend(prof, course) {
        let result = prof.teach(course);
        result += '\n';
        result += `${this.firstname} suit le course...`;
        return result;
    }
}
class Prof extends Person {
    get officialName() {
        const name = `${this.firstname[0]} ${this.lastname}`;
        return name.toUpperCase();
    }
    teach(course) {
        return `${this.fullname} donne cours de ${course}`;
    }
    evalStudent(student, result) {
        student.yearResult = result;
    }
}
class MachineAApprendre {
    get officialName() {
        return 'La machine à apprendre';
    }
    teach(course) {
        throw new Error('La machine donne cours...');
    }
    evalStudent(student, result) {
        student.yearResult = (Math.random() > 0.5) ? result : (result / 2);
    }
}
const p1 = new Prof('Della', 'Duck');
const p2 = new MachineAApprendre();
