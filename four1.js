class student{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    getname(){
        return this.name="Rohan";
    }
}

let s1=new student("Rohan",20);


let s2=new student("Ramu",25)


let s3=new student("naveen",30)


let s4=new student("Rajesh",35)


let s5=new student("varun",40)


var arr=[s1.age,s2.age,s3.age,s4.age,s5.age];
var greatherthan=arr.filter(num,index,arr)=>{
    return num>=20
}
console.log(greaterthan);
