document.getElementById('decrement').addEventListener('click', decrement)
document.getElementById('increment').addEventListener('click', increment)
document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('counter').textContent = 0
})

var counter = 0

function decrement() {
    counter -= document.getElementById('input-box').value
    if (counter < 0) {
        document.getElementById('counter').style.color = 'red'
    }
    else {
        document.getElementById('counter').style.color = 'black'
    }
    document.getElementById('counter').textContent = counter
}

function increment() {
    counter += parseInt(document.getElementById('input-box').value)
    if (counter < 0) {
        document.getElementById('counter').style.color = 'red'
    }
    else (
        document.getElementById('counter').style.color = 'black'
    )
    document.getElementById('counter').textContent = counter
}