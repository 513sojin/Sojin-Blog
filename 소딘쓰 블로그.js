const div=document.querySelector(".clock");
const clock=div.querySelector("h2");
/*querySelector : 요소를 선택하게 해줌. 해당하는 첫번째 요소만 선택함. */

function GetTime(){//시간가져오기
    const date=new Date(); //Date 객체생성
    const hour=date.getHours();//시
    const minute=date.getMinutes();
    const second=date.getSeconds();

    clock.innerHTML=`${hour}시 ${minute}분 ${second}초`;
    //받아온 값을 HTML안에 넣어줌
    // ` 이거는 억음부호라고 한다.
}

function init(){
    GetTime();
    setInterval(GetTime,1000);
    //setInterval 함수 : 일정한 시간간격으로 작업을 수행하기 위한 함수. 1000ms=1s
}

init();