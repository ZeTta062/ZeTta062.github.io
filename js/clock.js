const clock = document.getElementById("clock");

function getClock(){
    /* clock.innerText = new Date().toLocaleTimeString(); */

    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`; 
}
getClock();
setInterval(getClock, 1000);


/* function sayHello(){
    clock.innerText = new Date().toLocaleTimeString();
    }
    sayHello()
    setInterval(sayHello, 1000); */
/* toLocaleTimeString() 메서드에 옵션 추가하시면 24시간 형식도 됩니다.
clock.innerText = new Date().toLocaleTimeString("en-US", { hour12: false }); */