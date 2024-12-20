console.warn("Les interfaces en TS");

//! Les interfaces
//  L'ensembles des contraintes (Getters, Setters, Méthodes)
//  qu'une classe va devoir respecté.
//  On peut voir l'interface comme un "contrat" que la classe passe.
//  Celle-ci contient les signatures des élément sans l'implémenté.

interface IPerson {
    // Propriétés
    firstname: string;
    lastname: string;
    fullname: string;
    // Méthodes
    sleep(nbHour: number) : string;
    eat(meal: string) : string;
}

interface IStudent extends IPerson {
    // Propriétés
    yearResult: number;
    // Méthodes
    play(game: string, nbHour?: number) : string;
}


class Person implements IPerson {

    // Props
    private _lastname: string;
    private _firstname: string;

    // Ctor
    constructor(firstname: string, lastname: string) {
        this._firstname = firstname;
        this._lastname = lastname;
    }

    // Encapsulation    
    public get firstname(): string {
        return this._firstname;
    }
    public set firstname(value: string) {
        this._firstname = value;
    }

    public get lastname(): string {
        return this._lastname;
    }
    public set lastname(value: string) {
        this._lastname = value;
    }

    public get fullname() : string {
        return `${this.firstname} ${this.lastname}`;
    }

    // Méthodes
    sleep(nbHour: number): string {
        return `${this.fullname} dort ${nbHour} heures`;
    }

    eat(meal: string): string {
        if(Math.random() > 0.9) {
            return `${this.fullname} refuse de manger !`;
        }

        return `${this.fullname} mange ${meal}`;
    }

}

class Student extends Person implements IStudent {
    
    private _yearResult: number;

    constructor(firstname: string, lastname: string, yearResult: number) {
        super(firstname, lastname);
        this._yearResult = yearResult;
    }

    public get yearResult(): number {
        return this._yearResult;
    }
    public set yearResult(value: number) {
        this._yearResult = value;
    }

    play(game: string, nbHour?: number): string {
        return `${this.fullname} joue à ${game} durant ${nbHour} heures !`;
    }

}