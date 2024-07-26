const sortear = document.querySelector("#draw")

function sortearNumero(){
    const min = Math.floor(document.querySelector(".min-value").value)
    const max = Math.ceil(document.querySelector(".max-value").value)
    const result = document.getElementById("result")

    if(min <= max){
        result.innerHTML = Math.round(Math.random() * (max - min) + min)
    }else{
        alert("Primeiro numero deve ser menor que o segundo")
    }
}

sortear.addEventListener("click", sortearNumero)