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


class Person {
    
    //Can also be access within the class
     id:number


    // only the class that is extended from Person can access "Protected"
    // protected id:number
    name:string
    constructor(mid:number , mname :string){
        this.id=mid
        this.name=mname
        
    }
    register(){
        return `${this.name} has been registered`
    }
}

const p1= new Person(2, "shaukat")

console.log(p1.register())