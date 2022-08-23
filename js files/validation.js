function HandleOnClickCalculate() {
   const inputValue = document.getElementById('inputfield').value;
   if (inputValue === '') {
      return alert('Field is empty input valid digits!');
   }
   if (inputValue < 0) {
      return alert('Input positive numbers only!')
   }
}


function handleOnclick() {
   const inputValue = document.getElementById('inputfield-2').value;
   if (inputValue === '') {
      return alert('Field is empty input valid digits');
   }
   if (inputValue < 0) {
      return alert('Input positive numbers only!')
   }

}

function handleOnclick() {
   const inputValue = document.getElementById('inputfield-3').value;
   if (inputValue === '') {
      return alert('Field is empty input valid digits');
   }
   if (inputValue < 0) {
      return alert('Input positive numbers only!')
   }

}