console.log("Demo Orienté objet en TS");

//! La programmation OO
//  Créer des "bloc" logique qui symbolise un concepte
//  Pour cela, on va créer des "classes" (Blue print) avec des props et méthodes
//  Pour les manipulers, il sera necessaire d'instancier les classes -> Objet

//! Encapsulation
//  Protéger les données dans nos objets
//  - Limiter l'acces via des méthodes (Getter / Setter)
//  - Changer la visibilité des propriétés
//     • public    -> Tout le monde y a acces
//     • private   -> Uniquement la classe qui a défini l'élément
//     • protected -> La classe qui défini l'élément et toutes les classes enfants (Héritage)

//! Heritage
//  Créer une nouvelle classe en se basant sur une classe existante
//  Celle-ci peut utilise toutes les props et toutes méthodes de la classe parent

//! Polymorphisme de type
// Une instance d'objet peut posseder plusieurs types
// Elle est utilisable a traverse des variables de types compatibles
/* Exemple : 

   classe Vehicule { ... }
   classe Voiture extends Vehicule { ... }
   classe Bateau extends Vehicule { ... }

   const v1 : Voiture = new Voiture(...);       //? OK
   const v2 : Vehicule = new Voiture(...);      //? OK

   const v3 : Voiture = new Bateau(...);        //! KO -> Type incompatible
*/


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
        this._nbRoom = nbRoom ?? 0;
        this._desc = desc ?? 'Aucune information';
        this._hasGarden = hasGarden ?? false;
    }

    // Méthode « Getter / Setter »
    //? Getter
    get nbRoom(): number {
        return this._nbRoom;
    }

    get desc(): string {
        return this._desc;
    }

    get hasGarden(): boolean {
        return this._hasGarden;
    }

    //? Setter
    set nbRoom(value: number) {
        if (value < 1) {
            // Erreur si la valeur est invalide
            throw new Error('Il doit avoir une piece mini !');
        }
        this._nbRoom = value;
    }
    set desc(value: string) {
        this._desc = value;
    }
    protected set hasGarden(value: boolean) {
        this._hasGarden = value;
    }

    // Méthodes
    getInformation(): string {
        let result = `Une maison de ${this.nbRoom} pieces`;
        if (this.hasGarden) {
            result += ' et avec un jardin';
        }
        return result;
    }

}

class BuildingHouse extends House {

    // Les props
    private _nbFloor: number;
    private _hasLift: boolean;
    private _placeGarage: number;

    // Les constructeurs
    //? Surchage
    constructor(nbRoom: number, nbFloor: number);
    constructor(nbRoom: number, nbFloor: number, desc: string);
    constructor(nbRoom: number, nbFloor: number, desc: string, placeGarage: number, hasLift: boolean, hasGarden: boolean)
    //? Implementation
    constructor(nbRoom: number, nbFloor: number, desc?: string, placeGarage?: number, hasLift?: boolean, hasGarden?: boolean) {
        super(nbRoom, desc, hasGarden);

        this._nbFloor = nbFloor;
        this._hasLift = hasLift ?? false;
        this._placeGarage = placeGarage ?? 0;
    }

    // Getters / Setters
    //? Getters
    get nbFloor() : number {
        return this._nbFloor;
    }
    get hasLift() : boolean {
        return this._hasLift;
    }
    get placeGarage() : number {
        return this._placeGarage;
    }
    get hasGarage() : boolean {
        return this._placeGarage > 0;
    }

    //? Setters
    set nbFloor(value:number) {
        this._nbFloor = value;
    }
    set hasLift(value: boolean) {
        this._hasLift = value;
    }
    private set placeGarage(value: number) {
        if(value < 0) {
            throw new Error('Impossible d\'avoir des garages négatifs :o')
        }
        this._placeGarage = value;
    }

    // Méthodes
    transformGardenToGarage() {
        this.placeGarage = 2;
        this.hasGarden = false;
    }
}

const h1 = new House(5);
console.log(h1.desc)
h1.desc = "test";

const b1 : House = new BuildingHouse(9, 3, 'DigitalCity');
console.log(JSON.stringify(b1));

if(b1 instanceof BuildingHouse) {
    console.log('Garage pour b1', b1.hasGarage);
    console.log('Travaux...');
    b1.transformGardenToGarage();
    console.log('Garage pour b1', b1.hasGarage);
}