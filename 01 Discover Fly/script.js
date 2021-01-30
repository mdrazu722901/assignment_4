//First Class teke work===============================================//

function firstClassTeketPrice(increase) {
    const inputValue = document.getElementById('input-FirstClass');
    const inputNumber = parseInt(inputValue.value);
    let newInputValue = inputNumber;
    if (increase == true) {
        newInputValue = inputNumber + 1;
    }
    if (increase == false && newInputValue > 0) {
        newInputValue = inputNumber - 1;
    }
    inputValue.value = newInputValue;
    const economyPrice = newInputValue * 150;
    document.getElementById("FirstClass").innerHTML = "First Class" + " " + ("$" + economyPrice);
}


// Economy teket work=====================================================//

function teketPrice(increase) {
    const inputValue = document.getElementById('input-economy');
    const inputNumber = parseInt(inputValue.value);
    let newInputValue = inputNumber;
    if (increase == true) {
        newInputValue = inputNumber + 1;
    }
    if (increase == false && newInputValue > 0) {
        newInputValue = inputNumber - 1;
    }
    inputValue.value = newInputValue;
    const economyPrice = newInputValue * 100;
    document.getElementById("economy-cost").innerHTML = "economy" + " " + ("$" + economyPrice);
}