let car = [
    {   id : 1,
        brand: "Toyota",
        model: "Camry",
        year: 2020
    },
        
    {   id : 2,
        brand: "Honda",
        model: "Civic",
        year: 2015
    }
 ];

// for (let cars of car){
//     console.log(cars);
// };

// for (let i = 0; i < car.length; i++){
//     console.log(car[i]);
// }

 //forEach,map,filter
 const carBrands = car.filter(function(car){
    return car.brand;
 }).map(function(car){
     return car.brand;
 });
 console.log(carBrands);