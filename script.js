const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function compareValues(sum,luckyNumber) {
    if (sum%luckyNumber===0) {
        outputBox.innerText = ("Your birthday is hella lucky :)");
    } else {
        outputBox.innerText = ("Sorry about your luck :( \n  But even then luck is no exuse. <3");
    }
}

function checkBirthDateIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if (sum&&dob)
    compareValues(sum, luckyNumber.value)
    else
    outputBox.innerText = "You need to enter values to calculate your luck....";
}

function calculateSum(dob) {
    dob = dob.replaceAll("-","");
    let sum = 0;
    for (let index=0; index<dob.length; index++) {
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}

checkNumberButton.addEventListener('click', checkBirthDateIsLucky)