function outerOne(){
// console.log("outer")
return "hello"
}

const outerTwo = function(){
// console.log("outerTwo")
return "bye"
}

const outerThree = () => "wow"

console.log(outerOne())
console.log(outerTwo())
console.log(outerThree)
console.log(outerThree())

const outerFour = a => a
console.log(outerFour("ㅎㅇ"))
const outerFive = (a,b) => a*b
console.log(outerFive("ㅎㅇ","ㅂㅇ"))
// 함수는 1급시민이기 때문에 램을 생각하면 outerTwo가 램용량 측면에서는 더 좋음. 반응은 outer가 더 빠르게 반응할거임.
// arrowfunction(화살표함수)는 outerTwo 개념이고 작성하기가 간편하여 자바스크립트 유저들은 자주 사용한다.