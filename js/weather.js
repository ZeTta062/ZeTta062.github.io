const API_KEY="a7369208e28e707d908b16fc156c1f19";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:nth-child(2)")
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
    });

}
function onGeoBad(){
    alert("위치를 찾을 수 없어, 날씨정보 제공이 불가능합니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoBad)