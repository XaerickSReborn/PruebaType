interface IPerson{
    name:string
    lastname:string
    age:number
}

interface Istudent extends IPerson{
    carreer: string
    university:string
}

const pedro: IPerson={
    name:'string',
    lastname:'string',
    age:24
}

const studentPedro: Istudent={
    name:'Pedro',
    lastname:'Castillo',
    age:20,
    carreer:'Software Ing.',
    university:'upc'
}

console.log('Datos de Pedro: ',studentPedro)
console.log('Datos de Pedro: ',studentPedro.carreer)
//objects






export {};