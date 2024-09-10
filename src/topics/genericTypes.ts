import { ICustomer } from "./imports_exports.ts/importExports"

const array =[1,4,5,6]
const array2 =['hola','dfd','dfdhmv','hghjk']

//const getFirstItem = (array:string[])=>{
//    return array[0]
//}
//
//const getFirstItemNumber = (array:number[])=>{
//    return array[0]
//}
//
const getFirstItem=<T>(array:T[])=>{
    return array[3]
}


console.log(getFirstItem(array))
console.log(getFirstItem(array2))


interface IRootObject<T=void> {
  id: string;
  message: string;
  data?: T;
  
  
}

const customer: ICustomer= {
    name: 'Dina',
    lastname:'Chola',
    email:'peru@123.com',
    address:{
        description:'Peru York',
        city:'DCcomic',
        country:'Monza'
    }
}

const responsiveObject:IRootObject<ICustomer>={id:'code123',message:'345',data:customer}


const responsiveObjectArray:IRootObject<ICustomer[]>={
    id:'12433',
    message:'MAÑANA SI HAY CLASES',
    data:[customer,customer]
}

const responsiveOther:IRootObject<boolean>={
    id:'6756',
    message:'NO HAY CLASES GAA',
    data:false
}

const responsive2:IRootObject={
    id:'code123',
    message:'345',
}

console.log('Responsive Object ',responsiveObject)
console.log('Responsive ObjectArray ',responsiveObjectArray)
console.log('Responsive Other ',responsiveOther)
console.log('responsive2 ',responsive2)