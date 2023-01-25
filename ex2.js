// 2. Faceti o functie tuneCar, care ia ca parametru o masina. Funcția va returna un obiect nou,fără să îl modifice pe cel trimis ca parametru.
// Obiectul returnat de funcție va avea km injumatatiti, iar prețul cu 50% mai mare.
// Puteți lasa la funcție obiectul creat la punctul anterior.
// Grija mare sa nu modificati obiectul trimis ca parametru!

console.log("EXERCITIUL 2")

function tuneCar(car) {
 const carCopy = { ... car};
 carCopy.kmBoard = car.kmBoard / 2;
 carCopy.price = car.price * 1,5;

 return carCopy
}

const theCarTune = tuneCar(car);
console.log("The same car? ", theCarTune === car);

console.log("The new car: ", theCarTune)