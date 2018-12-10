/*
Exercice 1
*/

function displayInterface() {
  let screen1 = document.createElement("div"); //creation of a global container
  document.body.appendChild(screen1); //place the element in its parent

  let firstNameLine = document.createElement("p"); //creation of the line about firt name
  screen1.appendChild(firstNameLine); //place the element in its parent
  let firstNameLabel = document.createElement("label"); //first name label creation
  firstNameLine.appendChild(firstNameLabel); //place the element in its parent
  firstNameLabel.textContent = "Quel est votre prénom ? "; //define the title label
  let firstNameArea = document.createElement("input"); //first name input creation
  firstNameArea.type = "text"; //specify the area type
  firstNameLine.appendChild(firstNameArea); //place the element in its parent

  let lastNameLine = document.createElement("p"); //creation of the line about last name
  screen1.appendChild(lastNameLine); //place the element in its parent
  let lastNameLabel = document.createElement("label"); //last name label creation
  lastNameLine.appendChild(lastNameLabel); //place the element in its parent
  lastNameLabel.textContent = "Quel est votre nom ? "; //define the title label
  let lastNameArea = document.createElement("input"); //last name input creation
  lastNameArea.type = "text"; //specify the area type
  lastNameLine.appendChild(lastNameArea); //place the element in its parent

  let btnOk = document.createElement("input"); //creation of a button to continue
  btnOk.type = "button"; //specify the area type
  btnOk.value = "OK"; //define the button content
  screen1.appendChild(btnOk); //place the element in its parent

  let errorMessage = document.createElement("p"); //creation of an error message
  errorMessage.textContent = "Veuillez saisir toutes les informations demandées avant de continuer.";
  errorMessage.hidden = true; //the message is currently hidden
  errorMessage.style.color = "red"; //highlight the error message thanks to its style
  screen1.appendChild(errorMessage); //place the element in its parent

  let screen2 = document.createElement("div"); //creation of a welcome container
  screen2.hidden = true; //the container is currently hidden
  document.body.appendChild(screen2); //place the element in its parent

  let welcomeMessage = document.createElement("p"); //creation of a welcome message
  welcomeMessage.textContent = "Bien le bonjour " + firstNameArea.value + " " + lastNameArea.value + ". Ravi de te voir !";
  screen2.appendChild(welcomeMessage); //place the element in its parent

  btnOk.addEventListener("click",function() { //creation of a event listener with an anonymous funtion to display the error message or the welcome message
    if (firstNameArea.value=="" || lastNameArea.value=="" || firstNameArea.value==null || lastNameArea.value==null) { //check the area content by a conditional test
      errorMessage.hidden = false; //display error message
    } else {
      screen1.hidden = true; //hide first screen
      screen2.hidden = false; //display the welcome message
}
},false); //contain the event listener propagation
}

displayInterface(); //call the function

/*
Exercice 2
*/

function wageCalculation () {
  let wageInterface = document.createElement("div"); //creation of a global container
  document.body.appendChild(wageInterface); //place the element in its parent

  let grossMonthlySalaryLine = document.createElement("p"); //creation of the line about gross monthly salary
  wageInterface.appendChild(grossMonthlySalaryLine); //place the element in its parent
  let grossMonthlySalaryLabel = document.createElement("label"); //gross monthly salary label creation
  grossMonthlySalaryLine.appendChild(grossMonthlySalaryLabel); //place the element in its parent
  grossMonthlySalaryLabel.textContent = "Salaire mensuel brut "; //define the title label
  let grossMonthlySalaryArea = document.createElement("input"); //gross monthly salary input creation
  grossMonthlySalaryArea.type = "number"; //specify the area type
  grossMonthlySalaryLine.appendChild(grossMonthlySalaryArea); //place the element in its parent

  let netMonthlySalaryLine = document.createElement("p"); //creation of the line about net monthly salary
  wageInterface.appendChild(netMonthlySalaryLine); //place the element in its parent
  let netMonthlySalaryLabel = document.createElement("label"); //net monthly salary label creation
  netMonthlySalaryLine.appendChild(netMonthlySalaryLabel); //place the element in its parent
  netMonthlySalaryLabel.textContent = "Salaire mensuel net "; //define the title label
  let netMonthlySalaryArea = document.createElement("input"); //net monthly salary input creation
  netMonthlySalaryArea.type = "number"; //specify the area type
  netMonthlySalaryLine.appendChild(netMonthlySalaryArea); //place the element in its parent

  let grossAnnualSalaryLine = document.createElement("p"); //creation of the line about gross annual salary
  wageInterface.appendChild(grossAnnualSalaryLine); //place the element in its parent
  let grossAnnualSalaryLabel = document.createElement("label"); //gross annual salary label creation
  grossAnnualSalaryLine.appendChild(grossAnnualSalaryLabel); //place the element in its parent
  grossAnnualSalaryLabel.textContent = "Salaire annuel brut "; //define the title label
  let grossAnnualSalaryArea = document.createElement("input"); //gross annual salary input creation
  grossAnnualSalaryArea.type = "number"; //specify the area type
  grossAnnualSalaryLine.appendChild(grossAnnualSalaryArea); //place the element in its parent

  let netAnnualSalaryLine = document.createElement("p"); //creation of the line about net annual salary
  wageInterface.appendChild(netAnnualSalaryLine); //place the element in its parent
  let netAnnualSalaryLabel = document.createElement("label"); //net annual salary label creation
  netAnnualSalaryLine.appendChild(netAnnualSalaryLabel); //place the element in its parent
  netAnnualSalaryLabel.textContent = "Salaire annuel brut "; //define the title label
  let netAnnualSalaryArea = document.createElement("input"); //net annual salary input creation
  netAnnualSalaryArea.type = "number"; //specify the area type
  netAnnualSalaryLine.appendChild(netAnnualSalaryArea); //place the element in its parent

  if (grossMonthlySalaryArea != 0) { //conditional test updating net monthly salary against gross monthly salary
    netMonthlySalaryArea = grossMonthlySalaryArea / 1.298; //to change from a gross to a net salary, divide it by 1,298
  }

  if (netMonthlySalaryArea != 0) { //conditional test updating gross monthly salary against net monthly salary
    grossMonthlySalaryArea = netMonthlySalaryArea * 1.298; //to change from a net salary to a gross salary, multiply it by 1,298
  }

  if (grossAnnualSalaryArea != null || netAnnualSalaryArea != null || grossMonthlySalaryArea != null || netMonthlySalaryArea != null) { //conditional test updating wages to each other
    grossAnnualSalaryArea = grossMonthlySalaryArea * 12; //to change from an monthly salary to a annual salary, multiply it by 12
    netAnnualSalaryArea = netMonthlySalaryArea * 12;
    grossMonthlySalaryArea = grossAnnualSalaryArea / 12; //to change from an annual salary to a monthly salary, divide it by 12
    netMonthlySalaryArea = netAnnualSalaryArea / 12;
  }
}

wageCalculation (); //call the function

/*
Exercice 3
*/

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function onlyEvenValues(array) {
  let i = 0; //creation of an intermediate variable used in listing
  let currentItem = array[i]; //creation of an intermediate variable used in sequential processing
  let arrayEvenValues = []; //creation of the first array copy
  while (currentItem%2 == 0) { //even number search
    i++; //update intermediate variable
    arrayEvenValues = [currentItem]; //first array copy update
  }
  return arrayEvenValues; //the function returns the first array copy
}

onlyEvenValues(numbersArray); //call the function

/*
Exercice 4
*/

function searchCoordinationConjunction(array) {
  let i = 0; //creation of an intermediate variable used in listing
  let currentItem; //creation of an intermediate variable used in sequential processing
  let arrayCoordinationConjunction = []; //creation of the first array copy
  while (currentItem == "mais" || currentItem == "ou" || currentItem == "et" || currentItem == "donc" || currentItem == "or" || currentItem == "ni" || currentItem == "car") { //coordination conjontion search
    i++; //update intermediate variable
    arrayCoordinationConjunction = [currentItem[i]]; //first array coppy update
  }
  return arrayCoordinationConjunction; //the function returns the first array copy
}

searchCoordinationConjunction(); //call the function

/*
Exercice 4
*/

function maxHundredNumbersArray() {
let i = 0; //creation of an intermediate variable used in listing
let currentItem; //creation of an intermediate variable used in sequential processing
let min = 0; //precise minimum random limit
let max = 100; //precise maximal random limit
let array128Numbers = []; //creation of the array
while (i < 127) { //continuation condition
  i++; //update intermediate variable
  currentItem = Math.random() * (max - min) + min; //generating of a random number
  array128Numbers = [currentItem[i]]; // array update
}
return array128Numbers; //the function returne the array
}

maxHundredNumbersArray(); //call the function
