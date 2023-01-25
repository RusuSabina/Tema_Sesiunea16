//1. Creați un obiect care să descrie o masina. Obiectul va avea următoarele proprietăți: brand , model, year, price, km bord.

const car = {
 brand: "Volkswagen",
 model: "Golf 7",
 year: 2014,
 price: 11800,
 kmBoard: 199000
}

console.log("EXERCITIUL 1")

// 1.1 Modificați numărul de km cu o valoare mai mica

car.kmBoard = 165000
console.log("The car has", car.kmBoard, "km on board.");

//1.2 Adaugati o proprietate nouă, description, cu o valoare corespunzătoare

car.description = "The car is on diesel"
console.log(car)

//1.3 Stergeti proprietatea description

delete car.description

//CERINTE OPTIONALE

function createOrDeleteProp (key, value) {
 if (value !== undefined) {
  car[key] = value
 } 
 else {
  delete car[key]
 }
}

createOrDeleteProp("description", "Agile and robust");
console.log("Description: ", car.description);

createOrDeleteProp("description", undefined);
console.log("Description: ", car.description);

createOrDeleteProp("description");
console.log ("Description: ", car.description);
