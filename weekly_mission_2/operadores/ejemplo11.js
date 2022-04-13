// Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques
const ages = [24, 22, 19, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)
console.log("Ejemplo 11: Primera edad menor a 20 es: "+ age)
//el primer elemento que es menor a 20 es 19, si hubiera un 18 despues de 19 tomara el mismo 19 porque se cumple
//desde cuando encuentra el 19