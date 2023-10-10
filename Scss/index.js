const pokemon = require('pokemon')
// console.log(pokemon.all('ko'))

// // write로 html 파일 만들고 포케몬 이름 리스트로 제작해보기

// const fs = require('fs');
// fs.writeFile("class/Scss/pokemonList.html", pokemon, err =>{
//   if(err){
//     console.error(err);
//   }
//   // file written successfully
// })


var fs = require('fs')
let pokemonList = []
// console.log(pokemon.all('ko').length)
// console.log(pokemon.all('ko')[1])

for(i=0; i<pokemon.all('ko').length; i++){
pokemonList[i] = pokemon.all('ko')[i]
}


fs.writeFile("pokemonList.html",
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
 <div id="root">
 <ul></ul>
 </div>
 
 <script>
 const pokemon = require('pokemon')

 ul = document.getElementsByTagName("ul")
 for(i=0; i<pokemon.all('ko').length; i++){
 ul.appendChild(li)
 }

 li = document.getElementsByTagName("li")
 for(i=0; i<pokemon.all('ko').length; i++){
  li[i].textContent = ${pokemon.all('ko')[i]}
 }
 </script>
</body>
</html>`, 
function(err){
  if(err) throw err;
  console.log('saved')
})