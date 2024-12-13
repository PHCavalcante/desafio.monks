function openMenu(){
    const menu = document.getElementById("menu");
    const isMenuOpen = menu.style.display === "block";
    const main = document.getElementById("main");
    const body = document.getElementById("body");
    menu.style.display = isMenuOpen ? "none" : "block";
    if (!isMenuOpen) {
        main.style = "filter: blur(5px);"
        body.style = "overflow-y: hidden;"
    }else{
        main.style = "filter: none;"
        body.style = "overflow-y: auto;"
    }
}
const randomNumber1 = document.getElementById("securityCheck1");
const randomNumber2 = document.getElementById("securityCheck2");

function generateRandomNumber(){
    return Math.floor(Math.random() * 1000);
}

const securityCheck1NewNumber = generateRandomNumber();
const securityCheck2NewNumber = generateRandomNumber();
const expectedResult = securityCheck1NewNumber + securityCheck2NewNumber

randomNumber1.textContent = securityCheck1NewNumber;
randomNumber2.textContent = securityCheck2NewNumber;
console.log(expectedResult);

function checkResult(){
    const userResponse = document.getElementById("resultado").value;
    const input = document.getElementById("resultado");
    const resultado = document.getElementById("resultadoLabel")
    if (userResponse == ""){
        alert("Por favor Preencha o campo com o resultado da soma!");
        return
    }
    if (parseInt(userResponse) == expectedResult){
        input.style.border = "2px solid #00ff00";
        resultado.innerText = "Acertou!"
        return
    }        
    input.style.border = "2px solid #ff0000";
    resultado.innerText = "Número errado, Tente Novamente!"
}