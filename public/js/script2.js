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
