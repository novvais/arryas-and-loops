const palavra = "alemanha"

for (let letra of palavra) {
   if (letra === "h") {
        console.log("Achei o", letra)
        break;
   } else if (letra !== "h"){
        console.log(letra)
   }
}