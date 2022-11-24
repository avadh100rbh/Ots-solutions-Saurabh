// let previousBMIs = [];

// let randomNumber = Math.ceil(Math.random() * 100 + 1);



// // Main Function

// function checkGuess() {

//   let weight = parseInt(document.getElementById("guessField").value);

//   let height = parseFloat(document.getElementById("heightField").value);

//   document.getElementById("guessField").value=''

//   document.getElementById("heightField").value=''

//   let BMI= weight/Math.pow(height,2)

//   previousBMIs.push(BMI.toFixed(2))

//   const guessesRemaining = document.querySelector(".lastResult").innerHTML=BMI.toFixed(2);

//   const guessSlot = document.querySelector(".guesses").innerHTML=previousBMIs;

// if (previousBMIs.length==10) {

//     previousBMIs.splice(0,1)

// }

// }



// const api = fetch('https://restcountries.com/v2/name/')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//  const Api = fetch('https://restcountries.com/v2/name/india')
//  .then((data)=>data.json())
//  .then((response)=>console.log(response[1].borders)
//  )

