console.log("Demo Orienté objet en TS");

//! La programmation OO
//  Créer des "bloc" logique qui symbolise un concepte
//  Pour cela, on va créer des "classes" (Blue print) avec des props et méthodes
//  Pour les manipulers, il sera necessaire d'instancier les classes -> Objet

//! Encapsulation
//  Protéger les données dans nos objets
//  - Limiter l'acces via des méthodes (Getter / Setter)
//  - Changer la visibilité des propriétés

//! Heritage
//  Créer une nouvelle classe en se basant sur une classe existante
//  Celle-ci peut utilise toutes les props et toutes méthodes de la classe parent

class House {

    // Déclaration des propriétés de la classe "Maison"
    private _desc: string;
    private _nbRoom: number;
    private _hasGarden: boolean;

    // Méthode « Constructeur »
    //? ↓ Les signatures possibles de constructeur (Polymorphisme / Just for dev)
    constructor(nbRoom: number);
    constructor(nbRoom: number, desc: string);
    constructor(nbRoom: number, desc: string, hasGarden: boolean);
    constructor(nbRoom: number, desc?: string, hasGarden?: boolean);
    //? ↓ L'implémentation réel du constructeur
    constructor(nbRoom: number, desc?: string, hasGarden?: boolean) {
        // La logique pour initialiser les propriétés
        this._nbRoom = nbRoom;
        this._desc = desc ?? 'Aucune information';
        this._hasGarden = hasGarden ?? false;
    }

    // Méthode « Getter / Setter »
    //? Getter
    get nbRoom() : number {
        return this._nbRoom;
    }
    
    get desc() : string {
        return this._desc;
    }
    
    get hasGarden() : boolean {
        return this._hasGarden;
    }

    //? Setter
    set nbRoom(value: number) {
        if(value < 1) {
            // Erreur si la valeur est invalide
            throw new Error('Il doit avoir une piece mini !');
        }
        this._nbRoom = value;
    }
    set desc(value: string) {
        this._desc = value;
    }

    // Méthodes
    getInformation() : string {
        let result = `Une maison de ${this.nbRoom} pieces`;
        if(this.hasGarden) {
            result += ' et avec un jardin';
        }
        return result;
    }

}

class BuildingHouse extends House {

    // Les props
    private _nbFloor: number;
    private _hasLift: boolean;
    
    // Les constructeurs
    //? Surchage
    constructor(nbRoom: number, nbFloor: number);
    constructor(nbRoom: number, nbFloor: number, desc: string);
    constructor(nbRoom: number, nbFloor: number, desc: string, hasLift: boolean, hasGarden: boolean);
    //? Implementation
    constructor(nbRoom: number, nbFloor: number, desc?: string, hasLift?: boolean, hasGarden?: boolean) {
        super(nbRoom, desc, hasGarden)

        this._nbFloor = nbFloor;
        this._hasLift = hasLift ?? false;
    }

}

const h1 = new House(5);
console.log(h1.desc) 
h1.desc = "test";

const b1 = new BuildingHouse(9, 3);
console.log(JSON.stringify(b1));