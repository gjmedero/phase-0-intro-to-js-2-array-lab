// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const copyCat = [...cats, name];
    return copyCat;
}

function prependCat(name) {
    const copyCat = [name, ...cats];
    return copyCat;
}

function removeLastCat() {
    const copyCats = cats.slice(0, -1);
    return copyCats;
}

function removeFirstCat() {
    const copyCat = cats.slice(1,);
    return copyCat;
}