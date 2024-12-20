"use strict";
console.warn("Le générique en TS");
function tabFilterNumber(tab, callbackFilter) {
    const result = [];
    for (const val of tab) {
        if (callbackFilter(val)) {
            result.push(val);
        }
    }
    return result;
}
function tabFilterString(tab, callbackFilter) {
    const result = [];
    for (const val of tab) {
        if (callbackFilter(val)) {
            result.push(val);
        }
    }
    return result;
}
function tabFilter(tab, callbackFilter) {
    const result = [];
    for (const val of tab) {
        if (callbackFilter(val)) {
            result.push(val);
        }
    }
    return result;
}
const t1 = ['Riri', 'Fifi', 'Loulou'];
const r1 = tabFilter(t1, (name) => name.includes('i'));
const t2 = [52, 10, 9, 16, 11, 42];
const r2 = tabFilter(t2, (nb) => nb % 2 === 0);
