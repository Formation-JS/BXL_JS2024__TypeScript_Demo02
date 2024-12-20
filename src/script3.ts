console.warn("Le générique en TS");


function tabFilterNumber(tab: number[], callbackFilter : (nb: number) => boolean) : number[] {

    const result : number[] = [];

    for(const val of tab) {

        if(callbackFilter(val)) {
            result.push(val);
        }
    }

    return result;
}

function tabFilterString(tab: string[], callbackFilter : (nb: string) => boolean) : string[] {

    const result : string[] = [];

    for(const val of tab) {

        if(callbackFilter(val)) {
            result.push(val);
        }
    }

    return result;
}


//! Generique 
//  Permet de créer un "parametre" pour définir un type de donnée à utiliser
//  Ce type doit être passer entre crochet oblique <...>
//  Il est possible de rendre des fonctions, des classes et des interfaces génériques

function tabFilter<TElement>(tab: TElement[], callbackFilter : (nb: TElement) => boolean) : TElement[] {

    const result : TElement[] = [];

    for(const val of tab) {

        if(callbackFilter(val)) {
            result.push(val);
        }
    }

    return result;
}


const t1 = ['Riri', 'Fifi', 'Loulou']
const r1 = tabFilter<string>(t1, (name) => name.includes('i'));

const t2 = [52, 10, 9, 16, 11, 42];
const r2 = tabFilter(t2, (nb) => nb % 2 === 0);

