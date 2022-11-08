let rand = Math.random()
let rand_100 = rand * 100
let rand_100_floor = Math.floor(rand_100)
// prompt (rand_100_floor)

// document.getElementById("div1").style.setProperty("background-color", "red")

function random() {
    let numero = parseInt(document.getElementById("sorteio").value)

    if (numero > rand_100_floor){
        document.getElementById("random").style.setProperty("background-color", "red");
        document.getElementById("random").innerHTML = "Numero Grande"
    }

    else if (numero < rand_100_floor){
        document.getElementById("random").style.setProperty("background-color", "purple");
        document.getElementById("random").innerHTML = "Numero Pequeno"

    }

    else if (numero === rand_100_floor){
        document.getElementById("random").style.setProperty("background-color", "blue")
        document.getElementById("random").innerHTML = "Acertou"
    }


}