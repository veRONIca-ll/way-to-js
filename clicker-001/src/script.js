let count = 0;

function countClick() {
    ++count;
    document.getElementById('count').innerText = 'Clicked: ' + count;
}