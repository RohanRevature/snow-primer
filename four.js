class student{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    getname(){
        return this.name="Rohan";
    }
}

let s1=new student();
console.log(s1.getname());

let s2=new student("ramu")
console.log(s2.name);
