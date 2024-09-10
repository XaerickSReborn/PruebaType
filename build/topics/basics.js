"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//#region Numeros
console.log("Hola");
const age = 15;
let peso = 3.5;
peso = 40;
let peso2;
peso2 = 2;
console.log(age);
console.log(peso);
console.log(peso2);
console.log('----------');
const Agetext = '31';
console.log('parseInt -> ', parseInt(Agetext));
const pesotext = '31.560';
console.log('parseFloat -> ', parseFloat(pesotext));
console.log('Number -> ', Number(pesotext));
//#endregion
//#region String
console.log('-------------------------');
const name = 'pedro';
const lastname = 'castillo';
console.log('Nombre: ', name);
console.log('Apellido: ', lastname);
console.log(name + '' + lastname);
const fullname = `Template para concatenar => ${name} ${lastname}`;
console.log(fullname);
//#endregion
//#region boolean
console.log('-------------------------');
const useAngular = true;
const CompareExpression = 5 > 2;
const booleanText = '';
console.log('Usas Angular?: ', true);
console.log('5 ES mas mayor que 2? ', CompareExpression);
console.log('Comvertir texto a booleano usando la funcion boolean ', Boolean(booleanText));
console.log('Comvertir texto a booleano usando doble negacion ', !!booleanText);
//#endregion
//#region DATE
console.log('-------------------------');
console.log('-------------------------');
const DATEnow = new Date();
console.log('La fecha actual es: ', DATEnow);
console.log('La fecha actual es: ', DATEnow.getDay());
//#endregion
//#region ANY
console.log('-------------------------');
console.log('-------------------------');
let valueAny = 'Hola';
console.log('Valor Any: ', valueAny);
valueAny = 5;
console.log('Valor Any numero ', valueAny);
