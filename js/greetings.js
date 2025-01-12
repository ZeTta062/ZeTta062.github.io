const loginForm = document.querySelector("#logInForm");
const loginInput = document.querySelector("#logInForm input");
const greeting = document.querySelector("#greeting");
const Hello = document.querySelector(".hello");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function paintGreetings(username){                               //user name 이라는 인자를 받고 있음
    greeting.classList.remove(HIDDEN_CLASSNAME);                 //h1에 텍스트 추가
    Hello.innerText =`Hello, ${username}`;                     //h1에서 클래스네임 hidden을 제거
}

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);                   //form 숨김
    const typedUsername = loginInput.value;                      //loginInput.value을 username 이라는 변수로 저장
    localStorage.setItem(USERNAME_KEY, typedUsername);           //username이라는 key와 함께 loginInput.value(입력값)을 local host에 저장
    paintGreetings(typedUsername);                               //paintGreetings 함수 실행
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){ //저장된 유저 이름이 없다면
    //폼을 보여줌
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    // 유저네임이 있다면 로컬 호스트에 유저네임이 있으면 greeting을 보여줌
    // (브라우져를 꺼도 로컬 호스트에 계속 유지되어 있음)
    paintGreetings(savedUsername);
}