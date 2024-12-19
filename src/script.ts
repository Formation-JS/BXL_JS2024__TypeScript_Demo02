console.log("Demo Orienté objet en TS");

//! La programmation OO
//  Créer des "bloc" logique qui symbolise un concepte
//  Pour cela, on va créer des "classes" (Blue print) avec des props et méthodes
//  Pour les manipulers, il sera necessaire d'instancier les classes -> Objet

class House {

    // Déclaration des propriétés de la classe "Maison"
    desc: string;
    nbRoom: number;
    hasGarden: boolean;

    // Méthode « Constructeur »
    //? ↓ Les signatures possibles de constructeur (Polymorphisme / Just for dev)
    constructor(nbRoom: number);
    constructor(nbRoom: number, desc: string);
    constructor(nbRoom: number, desc: string, hasGarden: boolean);
    //? ↓ L'implémentation réel du constructeur
    constructor(nbRoom: number, desc?: string, hasGarden?: boolean) {
        // La logique pour initialiser les propriétés
        this.nbRoom = nbRoom;
        this.desc = desc ?? 'Aucune information';
        this.hasGarden = hasGarden ?? false;
    }
}
