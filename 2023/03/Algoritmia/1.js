// function oddOrEvenScale(integer) {
//   // Determine odd or even
//   let integerStatus;
//   Number.isInteger(integer / 2)
//     ? (integerStatus = "even")
//     : (integerStatus = "odd");

//   if (integerStatus == "even") {
//   }
//   if (integerStatus == "odd") {
//   }
// }

// function oddOrEven() {}

// function descSequenceUntilExhaust() {}

function funcionUno(integer) {
  Number.isInteger(integer / 2)
    ? console.log("Es par")
    : console.log("Es impar");
  let number = integer;
  if (number < 1) {
    console.log(number);
  }
  while (number > 1) {
    console.log(number);
    number = number - 2;
  }
}

// Tests
funcionUno(0);
funcionUno(-5);
funcionUno(10);
funcionUno(11);
