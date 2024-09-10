"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const element = [2, 'hola', false, { name: 'Pedro' }];
console.log('Los elementos: ', element);
const mensaje = ['Hola ', 'Amigos'];
console.log('Los mensaje: ', mensaje);
//array de objectos
const Carlo = {
    name: 'Carlos',
    lastname: 'Sainz',
    age: 28,
    isFemale: true,
    vaccaciones: ['Ferrari', 'caballo']
};
const Max = {
    name: 'Maxe',
    lastname: 'Versp',
    age: 26,
    isFemale: true,
    vaccaciones: ['Redbull', 'Toro']
};
const Lel = {
    name: 'Lel',
    lastname: 'Char',
    age: 26,
    isFemale: true,
    vaccaciones: ['Toro']
};
const personas = [Carlo, Max, Lel];
//console.log(personas)
const persones = personas.filter((person) => {
    return person.vaccaciones.length === 1;
});
console.log(persones);
