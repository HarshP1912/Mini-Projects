const colorCode = document.querySelector("#color-code");
const body = document.querySelector("body");

const getColor = () => {
    const randNum = Math.ceil(Math.random()*10000000);
    // console.log(randNum);
    const randCode = "#" + randNum.toString(16);
    colorCode.innerText = randCode;
    body.style.backgroundColor = randCode;

    navigator.clipboard.writeText(randCode);
}

document.querySelector('#btn').addEventListener("click",getColor);

getColor();
