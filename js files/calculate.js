document.getElementById('calculate-button').addEventListener('click', function () {
    const playerCost = document.getElementById('inputfield');
    const playerCostString = playerCost.value;
    const playerCostAmount = parseFloat(playerCostString);





    const playerCostValue = playerCostAmount * playerArray.length;

    const totalPlayerCost = document.getElementById('player-cost');
    totalPlayerCost.innerText = playerCostValue;



})

document.getElementById('calculate-total').addEventListener('click', function () {
    const managerCost = document.getElementById('inputfield-2');
    const managerCostString = managerCost.value;
    const managerCostAmount = parseFloat(managerCostString);


    const coachCost = document.getElementById('inputfield-3');
    const coachCostString = coachCost.value;
    const coachCostAmount = parseFloat(coachCostString);

    const totalPlayerCost = document.getElementById('player-cost');
    const playerCostValueString = totalPlayerCost.innerText;
    const playerCostValue = parseFloat(playerCostValueString);



    const totalAmount = playerCostValue + managerCostAmount + coachCostAmount;

    const finalAmount = document.getElementById('final-amount');
    finalAmount.innerText = totalAmount;

})