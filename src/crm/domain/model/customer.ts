export class Customer{

    private readonly _id: number;
    private readonly _name: string;
    private readonly _course:string;

    constructor(id:number,name:string,course:string) {
        this._id=id;
        this._name=name;
        this._course=course;
    }

    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }

    get course(){
        return this._course;
    }
}