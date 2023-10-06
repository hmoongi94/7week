setTimeout(function(){
  console.log("첫번째 소사")

  setTimeout(function(){
    console.log("두번째 뭉기")

    setTimeout(function(){
      console.log("세번째 밍구")
    },1000)
  },2000)
},3000)

// 머리를 하나만 써도 읽기 가능한 방식