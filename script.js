// Getting different parts of the timer
var min = document.getElementById('min');
var sec = document.getElementById('sec');
var tens = document.getElementById('tens');

// Setting initial value of the timer
min.innerText = '00';
sec.innerText = '00';
tens.innerText = '00';

// Getting different buttons
var start = document.getElementById('start');
var pause = document.getElementById('pause');
var reset = document.getElementById('reset');
var x = 0;
var y = 0;
var z = 0;
var id;

//start functionality
start.addEventListener('click', () => {
    //Making sure that when we accidently click the start button twice doesn't start the timer again
    if (!id) {
        id = setInterval(startTimer, 10);
    }
});

//pause functionality
pause.addEventListener('click', () => {
    clearInterval(id);
    id = null;
})

//reset functionality
reset.addEventListener('click', () => {
    clearInterval(id);
    id = null;
    x = 0;
    y = 0;
    z = 0;
    updateDisplay();
})

//startTimer function used in start funcyionality
function startTimer() {
    z = z + 0.01;

    if (z >= 1) {
        y++;
        z = 0;
    }

    if (y >= 60) {
        x++;
        y = 0;
        z = 0;
    }

    updateDisplay();
}

//function to display the timer
function updateDisplay() {
    min.innerText = x < 10 ? '0' + x : x;
    sec.innerText = y < 10 ? '0' + y : y;
    tens.innerText = z == 0 ? '00' : Math.floor(z.toFixed(2) * 100);
}

