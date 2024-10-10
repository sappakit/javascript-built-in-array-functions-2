const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  if (!carCollection.includes(carBrand)) {
    carCollection.push(carBrand);
    return `New car collection is: Toyota, Fiat, Honda, BMW, ${carBrand}.`;
  } else {
    const carIndex = carCollection.indexOf(carBrand);
    return `${carBrand} already exists in position ${
      carIndex + 1
    } of the car collection.`;
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.
