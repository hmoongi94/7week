function sosa() {
  setTimeout(function() {
    sosa();
    console.log("ㅎㅇ")
  }, 1000);
};

sosa()

setInterval(function(){},1000);
setInterval(function(){
  console.log("ㅂ2")
},1000)