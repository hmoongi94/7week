// console.log(pokemon.all('ko'))

// // write로 html 파일 만들고 포케몬 이름 리스트로 제작해보기

// const fs = require('fs');
// fs.writeFile("class/Scss/pokemonList.html", pokemon, err =>{
  //   if(err){
    //     console.error(err);
    //   }
    //   // file written successfully
    // })
    
const pokemon = require('pokemon')

var fs = require('fs')
let pokemonLi = []
for(i=0; i<pokemon.all('ko').length; i++){
  pokemonLi[i] = `<li>${pokemon.all('ko')[i]}</li>`
}
console.log(pokemonLi)

let content = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  ${pokemonLi}
</body>
</html>`


fs.writeFile("pokemonList.html", content, function(err){
  if(err) throw err;
  console.log("saved!")
})
