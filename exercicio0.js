const paises = [
    "BRASIL", "COLOMBIA", "CANADA", "PERU", "SURINAME"
]
paises.push("COSTA RICA")
console.log(paises)

paises.pop()
console.log(paises)

paises.unshift("BOLIVIA")
console.log(paises)

paises.shift()
console.log(paises)

let ultimo = paises[paises.length - 1]
console.log(ultimo)
console.log(paises[1])
console.log(paises[2])