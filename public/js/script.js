"use strict";
console.log("Demo Orienté objet en TS");
class House {
    _desc;
    _nbRoom;
    _hasGarden;
    constructor(nbRoom, desc, hasGarden) {
        this._nbRoom = nbRoom ?? 0;
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
    set hasGarden(value) {
        this._hasGarden = value;
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
    _placeGarage;
    constructor(nbRoom, nbFloor, desc, placeGarage, hasLift, hasGarden) {
        super(nbRoom, desc, hasGarden);
        this._nbFloor = nbFloor;
        this._hasLift = hasLift ?? false;
        this._placeGarage = placeGarage ?? 0;
    }
    get nbFloor() {
        return this._nbFloor;
    }
    get hasLift() {
        return this._hasLift;
    }
    get placeGarage() {
        return this._placeGarage;
    }
    get hasGarage() {
        return this._placeGarage > 0;
    }
    set nbFloor(value) {
        this._nbFloor = value;
    }
    set hasLift(value) {
        this._hasLift = value;
    }
    set placeGarage(value) {
        if (value < 0) {
            throw new Error('Impossible d\'avoir des garages négatifs :o');
        }
        this._placeGarage = value;
    }
    transformGardenToGarage() {
        this.placeGarage = 2;
        this.hasGarden = false;
    }
}
const h1 = new House(5);
console.log(h1.desc);
h1.desc = "test";
const b1 = new BuildingHouse(9, 3, 'DigitalCity');
console.log(JSON.stringify(b1));
if (b1 instanceof BuildingHouse) {
    console.log('Garage pour b1', b1.hasGarage);
    console.log('Travaux...');
    b1.transformGardenToGarage();
    console.log('Garage pour b1', b1.hasGarage);
}
