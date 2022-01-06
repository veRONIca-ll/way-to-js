let count = 0;

function outputCount(newCount) {
    if (newCount < 0) {
        newCount = 0;
        alert('do not go less than zero');
    }
    document.getElementById('count').innerText = 'Clicked: ' + newCount;
}

function countClick() {
    outputCount(++count);
}

function uncountClick() {
    outputCount(--count);
}