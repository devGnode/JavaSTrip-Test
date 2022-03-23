import {flombok} from "lib-utils-ts/src/flombok";
import {getNumberFunc, getStringFunc, setNumberFunc} from "lib-utils-ts/src/decorator/Lombok";

export class Developer{

    @flombok.SETTER<string>()
    @flombok.GETTER<string>()
    name:string;

    @flombok.SETTER<string>()
    @flombok.GETTER<string>()
    salary:number;

    @flombok.SETTER<string>()
    @flombok.GETTER<string>()
    age:number

    constructor(a:string, b:number, c:number) {
        this.name   = a;
        this.salary = b;
        this.age    = c;
    }

    public getName:getStringFunc;
    public setName:getStringFunc;
    public getSalary:getNumberFunc;
    public setSalary:setNumberFunc;
    public getAge:getNumberFunc;
    public setAge:setNumberFunc;

    public toString():string{
        return `Developer{ name = ${this.name}, salary = ${this.salary}, age = ${this.age} }`;
    }
}

