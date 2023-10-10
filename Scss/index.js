const pokemon = require('pokemon')
console.log(pokemon.all('ko'))

// write로 html 파일 만들고 포케몬 이름 리스트로 제작해보기

const fs = require('fs');
fs.writeFile("class/Scss/pokemonList.html", pokemon, err =>{
  if(err){
    console.error(err);
  }
  // file written successfully
})