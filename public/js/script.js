"use strict";
console.log("Demo Orienté objet en TS");
class House {
    desc;
    nbRoom;
    hasGarden;
    constructor(nbRoom, desc, hasGarden) {
        this.nbRoom = nbRoom;
        this.desc = desc ?? 'Aucune information';
        this.hasGarden = hasGarden ?? false;
    }
}
