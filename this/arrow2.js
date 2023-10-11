// function outerOne(a){

//   function innerOne(b){
//     console.log(b);
//   }
//   innerOne(a)

// }

// console.log(outerOne("hello"))

//////////////////////////////////////////////////
function outerOne(a){
  const innerOne = b => console.log(b)
  innerOne(a);
}

console.log(outerOne("hello"))

///////////////////////////////////////////////////
// FileSystem.readFile("./html", data, (error)=>{

// })