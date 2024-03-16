const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

// const findTheOldest = function(arr) {
    
//     const oldestArray = sortOldestArray(arr);
//     console.table(oldestArray);
//     //return oldestArray[0].name;
    
// };

function getAge(birth, death){
  if(!death){
    death = new Date().getFullYear();
  }
  return death - birth;
}

// function sortOldestArray(arr){
//   const sortedAgeArray = arr.sort(function(a,b) {
//     const prev = getAge(a.yearOfBirth, a.yearOfDeath);
//     const next = getAge(b.yearOfBirth, b.yearOfDeath);  
//     return prev > next ? -1 : 1;
//   })
  
// }
// findTheOldest(people)

const findTheOldest = function(arr) {
  return arr.reduce((oldest, current) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
    return oldestAge < currentAge ? current : oldest;
    
  })
}

// const findTheOldest = function (array) {
//   return array.reduce((oldest, currentPerson) => {
//     const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
//     const currentAge = getAge(
//       currentPerson.yearOfBirth,
//       currentPerson.yearOfDeath
//     );
//     return oldestAge < currentAge ? currentPerson : oldest;
//   });
// };

// Do not edit below this line
module.exports = findTheOldest;
