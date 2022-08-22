
// common function for disabling player select button onclick 

function disable(button) {
    button.style.backgroundColor = 'white';
    button.style.color = 'black';
    button.disabled = true;
}




// function for adding player names below selected - V





const playerArray = [];

function addToList(player) {
    const playerName = player.parentNode.parentNode.children[1].innerText;


    const playerObj = {
        playerName: playerName
    }

    playerArray.push(playerObj);


    const div = document.getElementById('player-list');
    div.innerHTML = '';

    if (playerArray.length > 5) {
        return alert('maximum player selected already');
    }

    else
        for (let i = 0; i < playerArray.length; i++) {

            const name = playerArray[i].playerName;

            const tr = document.createElement("tr");

            tr.innerHTML = `
        <tr class="justify-content-end">
        <th>${i + 1.}</th>
        <td>${name}</td>
        </tr>`
                ;
            div.appendChild(tr)

        }

}
