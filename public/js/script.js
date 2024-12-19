"use strict";
console.log("Demo Orienté objet en TS");
class House {
    _desc;
    _nbRoom;
    _hasGarden;
    constructor(nbRoom, desc, hasGarden) {
        this._nbRoom = nbRoom;
        this._desc = desc ?? 'Aucune information';
        this._hasGarden = hasGarden ?? false;
    }
    get nbRoom() {
        return this._nbRoom;
    }
    get desc() {
        return this._desc;
    }
    get hasGarden() {
        return this._hasGarden;
    }
    set nbRoom(value) {
        if (value < 1) {
            throw new Error('Il doit avoir une piece mini !');
        }
        this._nbRoom = value;
    }
    set desc(value) {
        this._desc = value;
    }
    getInformation() {
        let result = `Une maison de ${this.nbRoom} pieces`;
        if (this.hasGarden) {
            result += ' et avec un jardin';
        }
        return result;
    }
}
class BuildingHouse extends House {
    _nbFloor;
    _hasLift;
    constructor(nbRoom, nbFloor, desc, hasLift, hasGarden) {
        super(nbRoom, desc, hasGarden);
        this._nbFloor = nbFloor;
        this._hasLift = hasLift ?? false;
    }
}
const h1 = new House(5);
console.log(h1.desc);
h1.desc = "test";
const b1 = new BuildingHouse(9, 3);
console.log(JSON.stringify(b1));
