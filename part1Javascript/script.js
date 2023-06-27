const nombre = 'Pablo' //permitir reasignar

const nombreMayuscula = nombre.toUpperCase()

// console.log(nombreMayuscula)

// 'string'
// true false
// undefined
// null

//Los tipos primitivos son inmutables
//Los objetos son murables

{
  //scope
  //el var se permite acceder dentro y fuera del scope, no usar var.
}

const list = []
const anotherlist = list.concat(18)

// console.log(anotherlist)

const persona = {
  nombre: 'Pablo',
  twitter: 'elrey',
  isDeveloper: true,
  links: ['https://', 'https; mi web']
}
const field = 'twitter'

console.log(persona.nombre)
console.log(persona[field])

const sumar = (ope1, ope2) => {
  console.log(ope1)
  console.log(ope2)
  return ope1 + ope2
}

const a = 8
const b = 2

console.log(sumar(a, b))
