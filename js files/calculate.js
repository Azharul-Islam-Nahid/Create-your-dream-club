

// -----------------------------------
// Calculation for the player expenses 
// -----------------------------------



document.getElementById('calculate-button').addEventListener('click', function () {
    const playerCost = document.getElementById('inputfield');
    const playerCostString = playerCost.value;


    // -------------------------------
    // Validation for per player field
    // -------------------------------

    if (playerCostString === '') {
        return alert('Field cannot be empty !!!');
    }
    if (playerCostString < 0) {
        return alert('Input positive numbers only!!!');
    }
    const playerCostAmount = parseFloat(playerCostString);





    const playerCostValue = playerCostAmount * playerArray.length;

    const totalPlayerCost = document.getElementById('player-cost');
    totalPlayerCost.innerText = playerCostValue;



})


//-------------------------------
//  Calculation for total expense
// ------------------------------



document.getElementById('calculate-total').addEventListener('click', function () {
    const managerCost = document.getElementById('inputfield-2');
    const managerCostString = managerCost.value;
    const managerCostAmount = parseFloat(managerCostString);


    const coachCost = document.getElementById('inputfield-3');
    const coachCostString = coachCost.value;
    const coachCostAmount = parseFloat(coachCostString);


    // // -------------------------------------
    // // validations for manager & Coach field
    // // -------------------------------------




    if (managerCostString < 0 || coachCostString < 0) {
        return alert('Input positive numbers only!!!');
    }
    if (managerCostString === '' || coachCostString === '') {
        return alert('Field cannot be empty !!!');
    }
    const totalPlayerCost = document.getElementById('player-cost');
    const playerCostValueString = totalPlayerCost.innerText;
    const playerCostValue = parseFloat(playerCostValueString);



    const totalAmount = playerCostValue + managerCostAmount + coachCostAmount;

    const finalAmount = document.getElementById('final-amount');
    finalAmount.innerText = totalAmount;

})