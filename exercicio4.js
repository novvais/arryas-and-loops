const palavra = "alemanha"

let contador = 0

for (let letra of palavra) {
   if (letra === "a") {
        console.log(letra)
        contador++
   } else if (letra !== "a"){
        console.log(letra)
   }
}
console.log("Tem", contador, "letras A na palavra")

