
let pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

const getAge = (pet) => {
  return new Date().getFullYear() - pet.bornOn;
}

let petsWithAge = []; {
  pets.map(pet =>
      pet.age = getAge(pet))
  pets.forEach(el => petsWithAge.push(el))
  console.log(petsWithAge)

}
console.log(petsWithAge);

let dogs = [];
pets.filter(pet => pet.type == "dog")

console.log(dogs)


const jasper = pets.find(pet => { return pet.name == "jasper" })


console.log("Jasper is ${jasper.age} years old");
