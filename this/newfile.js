function student(name, number){
  this.name = name
  this.number = number
}

// let test = new student("홍문기","17")
// console.log(test)
/////////////////////////////////////////


let list = ["홍문기", "김현"]
let studentArr = [];

for(let i=0; i<list.length; i++){
  studentArr[i] = new student(list[i],i+1)
}

console.log(studentArr)