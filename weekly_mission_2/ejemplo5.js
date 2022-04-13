// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
    name: "Woopa",
    sayHelloToMyPet: function(yourPet){    //aqui la yourpet es un valor de la funcion que despues oocupas
      console.log(`${this.name} say's hello to ${yourPet}`)   //this name reemplaza a name y llamas a yourpet
    }
  }
  
  console.log("Ejemplo 5: Objeto con método que recibe parámetros")
  myPet.sayHelloToMyPet("Tulio")    //llamas el objeto mypet con la funcion  , la parte de tulio esta en string 
                                      //porque es el valor que le das a yourpet