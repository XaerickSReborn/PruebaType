export interface ICustomer{
    name: string
    lastname:string
    email:string
    address:{
        description:string
        city:string
        country:string
    }
}

export const showCustomerData = (customer: ICustomer) => {
    console.log('DATOS DEL CLIENTE')

    const{
        name,
        lastname,
        email,
        address:{
            description,city,country
        }
    } = customer


    console.log('Nombre: ',name)
    console.log('Apellido: ',lastname)
    console.log('Email: ',email)

    console.log('---DIRECCION---')

    console.log('Direccion: ',description)
    console.log('Ciudad: ',city)
    console.log('Pais: ',country)
}
