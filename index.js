// let id :number =1;
// let my_nama: string ="shaukat"
// let names: number []= [1,434,23];
//cannot push string to numbers
// names.push("hello");
// Tuple 
// let person:  [number, string , boolean]=[4,'sd', true]
// Tuple Array
// let emp:[number , string][];
// emp.push(121,"shaukat")
// emp=[
//     [1,"sda"],
//     [2,"something"]
// ]
// enum sdad{
//     id='asdsad',
//     som='ddd',
// }
// console.log(sdad)
// interface UI{
//    readonly id:number,

//     name:string,
//     age:number
// }
// const user1:UI={
//     id:2,
//     name:"sadasd",
//     age:1
// }
// console.log(user1)
// // user1.id=2
// interface Mathf{
//     (x:number, y:number) :number
// }
// const add :Mathf =(x:number, y:number ):number => x + y
var Person = /** @class */ (function () {
    function Person(mid, mname) {
        this.id = mid;
        this.name = mname;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " has been registered");
    };
    return Person;
}());
var p1 = new Person(2, "shaukat");
console.log(p1.register());
