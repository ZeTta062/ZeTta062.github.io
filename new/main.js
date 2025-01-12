const main = document.getElementById('main');
const maxValue = document.getElementById('maxValue');
const myValue = document.getElementById('myValue')
const result = document.getElementById('result')
const winner = document.getElementById('winner')

main.addEventListener("submit", (e) => {
    e.preventDefault();

    const myNumber = parseInt(myValue.value, 10);
    console.log(myNumber)

    const randomValue = Math.ceil(Math.random() * maxValue.value);
    const randomNumber = parseInt(randomValue, 10);
    console.log(randomNumber);

    if(myNumber === randomNumber) {
        result.innerText = `You chose: ${myNumber}, the machine chose: ${randomNumber}.`
        winner.innerText = `You won!`
    } else if (myNumber !== randomNumber) {
        result.innerText = `You chose:  ${myNumber}, the machine chose: ${randomNumber}.`
        winner.innerText = `You lost!`
    }
})



