console.warn("Les interfaces en TS");

//! Les interfaces
//  L'ensembles des contraintes (Getters, Setters, Méthodes)
//  qu'une classe va devoir respecté.
//  On peut voir l'interface comme un "contrat" que la classe passe.
//  Celle-ci contient les signatures des élément sans l'implémenté.

//? Attention : Après la transcompilation du TypeScript vers le JavaScript, 
//?             les interfaces n'existe plus !
//?             Il n'est donc pas possible de les utiliser pour tester le code (... instanceof ...).
//?             Elles ne sont là que pour vous aider durant le dev !

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
    attend(prof: IProf, course: string) : string;
}

interface IProf {
    // Propriétés
    officialName: string;
    // Méthodes
    teach(course: string) : string;
    evalStudent(student : IStudent, result: number) : void;
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

    attend(prof: IProf, course: string): string {
        let result = prof.teach(course);
        result += '\n';
        result += `${this.firstname} suit le course...`;

        return result;
    }

    override sleep(nbHour: number): string {
        const nbHourPlay = Math.round(nbHour / 3);

        let result = this.play('CS 1.6', nbHourPlay);
        result += '\n';
        result += super.sleep(nbHour - nbHourPlay);

        return result;
    }
}

class Prof extends Person implements IPerson, IProf {

    get officialName() : string {
        const name = `${this.firstname[0]} ${this.lastname}`;
        return name.toUpperCase();
    }

    teach(course: string): string {
        return `${this.fullname} donne cours de ${course}`;
    }
    evalStudent(student: IStudent, result: number): void {
        student.yearResult = result;
    }
}

class MachineAApprendre implements IProf {
    
    get officialName() : string {
        return 'La machine à apprendre';
    }
    
    teach(course: string): string {
        throw new Error('La machine donne cours...');
    }
    evalStudent(student: IStudent, result: number): void {
        student.yearResult = (Math.random() > 0.5) ? result : (result / 2);
    }

}

const p1 : IProf = new Prof('Della', 'Duck');
const p2 : IProf = new MachineAApprendre(); 

const p3 : IPerson = new Prof('Balthazar', 'Picsou');
const s1 : IStudent = new Student('Zaza', 'Vanderquack', 12);

console.log(p3.sleep(8));
console.log(s1.sleep(8));