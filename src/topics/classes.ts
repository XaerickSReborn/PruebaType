import { IAction } from "./imports_exports.ts/actions_interface"

export class Person{
    name:string
    public lastname:string
    private _age:number
    protected _fullName:string

    constructor(name:string,lastname:string,age:number,){
        this.name=name
        this.lastname=lastname
        this._age=age
        this._fullName = `${this.name} ${this.lastname}`
    }

    walk():void{
        console.log(`${this.name} esta caminando`)

    }

    talk():void{
        console.log(`${this.name} esta hablando: 
        "Naci en el año ${this._yearBirth()}"`)  
    }

    private _yearBirth(){
        const currentDate = new Date()
        
        const yearBirth = currentDate.getFullYear() - this._age
        return yearBirth
    }


}

export class Astronauta extends Person implements IAction {
    numberMastersDegrees:number

    constructor(name:string,lastname:string,age:number,numberMastersDegrees:number){
        super(name,lastname,age)
        this.numberMastersDegrees = numberMastersDegrees
        
    }

    pilotShip() {
        console.log(`${this._fullName} Si puede pilotear`)
    }

    getFullName(){
        return this._fullName
    }
}


