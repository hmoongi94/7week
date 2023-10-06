// 타이머
let timer;

// '시작' 버튼을 누르면 실행된다.
function startClock() {
  
  // 1초마다 실행될 함수 (현재 시간을 출력한다)
  function clock() {
    const div = document.getElementById('result');
    div.innerText = new Date();
  }
  
  // 1초마다 clock() 함수를 실행시킨다.
  timer = setInterval(clock, 1000);
  
}

// '종료' 버튼을 누르면 실행된다.
function stopClock() {
  // timer의 반복실행을 종료한다.
  clearInterval(timer);
}