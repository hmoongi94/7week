function Student(name, number){
  this.name = name
  this.number = number
}

// let test = new student("홍문기","17")
// console.log(test)
/////////////////////////////////////////



let list = ["홍문기", "김현"]
let studentArr = [];

for(let i=0; i<list.length; i++){
  studentArr[i] = new Student(list[i],i+1)
}

console.log(studentArr)

// 생성자 함수(거푸집)은 첫글자를 대문자로 쓰는 관습이있다.