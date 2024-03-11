let historyList = [];

function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  let displayValue = document.getElementById('display').value;
  document.getElementById('display').value = displayValue.slice(0, -1);
}

function calculate() {
  let expression = document.getElementById('display').value;
  let result = eval(expression);
  document.getElementById('display').value = result;
  historyList.push(expression + ' = ' + result);
  updateHistory();
}

function updateHistory() {
  let historyUl = document.getElementById('history-list');
  historyUl.innerHTML = '';
  historyList.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    historyUl.appendChild(li);
  });
}

// Mengatur fungsi keyboard input
document.addEventListener('keydown', function(event) {
  const key = event.key;
  const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter', 'Backspace'];

  if (validKeys.includes(key)) {
    event.preventDefault(); // Mencegah aksi bawaan dari key event

    switch(key) {
      case 'Enter':
        calculate();
        break;
      case 'Backspace':
        deleteLast();
        break;
      default:
        appendToDisplay(key);
    }
  }
});
