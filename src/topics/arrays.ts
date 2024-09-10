interface IPerson{
    name:string
    lastname:string
    age:number
    isFemale: boolean
    vaccaciones: string[]
}


const element =[2,'hola',false,{name:'Pedro'}]

console.log('Los elementos: ',element)


const mensaje: string[]=['Hola ', 'Amigos']
console.log('Los mensaje: ',mensaje)

//array de objectos
const Carlo: IPerson={
    name:'Carlos',
    lastname:'Sainz',
    age:28,
    isFemale: true,
    vaccaciones: ['Ferrari','caballo']
}

const Max: IPerson={
    name:'Maxe',
    lastname:'Versp',
    age:26,
    isFemale: true,
    vaccaciones: ['Redbull','Toro']
}

const Lel: IPerson={
    name:'Lel',
    lastname:'Char',
    age:26,
    isFemale: true,
    vaccaciones: ['Toro']
}

const personas: IPerson[] =[Carlo,Max,Lel]


//console.log(personas)


const persones=personas.filter((person)=>{
    return person.vaccaciones.length===1
})

console.log(persones)













export{}