let personasArr = [
  ["m", 25],
  ["f", 64],
  ["m", 14],
  ["f", 18],
  // se continua el array a 50 posiciones, o mas, es dinamico
];

function functionDos(peopleArr) {
  // log number of people 18 or older
  let numTotalPeople = peopleArr.length;
  let numPeopleOver18 = 0;
  peopleArr.forEach(element => {
    if (element[1] >= 18) {
      numPeopleOver18++;
    }
  });
  console.log(`people over 18: ${numPeopleOver18}`);
  // log number of people under 18
  let peopleUnder18 = numTotalPeople - numPeopleOver18;
  console.log(`people under 18: ${peopleUnder18}`);
  // log number of people male and 18 or over
  let malesOver18 = 0;
  peopleArr.forEach(element => {
    if (element[0] === "m" && element[1] >= 18) {
      malesOver18++;
    }
  });
  console.log(`males over 18: ${malesOver18}`);
  // log number of people female and under 18
  let femalesUnder18 = 0;
  peopleArr.forEach(element => {
    if (element[0] === "f" && element[1] < 18) {
      femalesUnder18++;
    }
  });
  console.log(`Females under 18: ${femalesUnder18}`);
  // log percentage of 18 or over in arr
  let peopleOver18 = 0;
  personasArr.forEach(element => {
    if (element[1] >= 18) {
      peopleOver18++;
    }
  });
  let percentagePeopleOver18 = (peopleOver18 / numTotalPeople) * 100;
  console.log(`percentage of people over 18: ${percentagePeopleOver18}%`);
  // log percentage of females in arr
  let numFemales = 0;
  peopleArr.forEach(element => {
    if (element[0] === "f") {
      numFemales++;
    }
  });
  let percentageFemales = (numFemales / numTotalPeople) * 100;
  console.log(`percentage of females: ${percentageFemales}%`);
}

// Tests
functionDos(personasArr);
