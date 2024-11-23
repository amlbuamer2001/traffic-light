var redLight = document.getElementById('red');
var yellowLight = document.getElementById('yellow');
var greenLight = document.getElementById('green');
var statusText = document.getElementById('statusText');

var currentLight = 'red'; 

function changeLights() {
    if (currentLight === 'red') {
        redLight.style.backgroundColor = 'red';
        yellowLight.style.backgroundColor = '#555';
        greenLight.style.backgroundColor = '#555';
        statusText.textContent = 'Stop ';
        statusText.style.color = 'red';
        currentLight = 'green'; 

    } else if (currentLight === 'green') {
        redLight.style.backgroundColor = '#555';
        yellowLight.style.backgroundColor = '#555';
        greenLight.style.backgroundColor = 'green';
        statusText.textContent = 'Go';
        statusText.style.color = 'green';
        currentLight = 'yellow'; 

    } else if (currentLight === 'yellow') {
        redLight.style.backgroundColor = '#555';
        yellowLight.style.backgroundColor = 'yellow';
        greenLight.style.backgroundColor = '#555';
        statusText.textContent = 'steady';
        statusText.style.color = 'yellow';
        currentLight = 'red';
    }
}
setInterval(changeLights, 1000);
