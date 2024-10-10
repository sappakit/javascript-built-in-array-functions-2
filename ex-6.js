const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {

  const position = carCollection.indexOf(carBrand);

  if (position === -1) {
    carCollection.push(carBrand);
    return `New car collection is: Toyota, Fiat, Honda, BMW, ${carBrand}`;
  } 
  
return `${carBrand} has already existed in the ${position + 1} position of car collection.`;


}

console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.
