document.querySelector("#c2 #complete-btn").addEventListener('click', () => {
    if (check()) {
        alert('The answer is: doge me loge');
    } else {
        alert('Are you sure you completed ALL the tasks? Try again!');
    }
});

function check() {
    let items = document.querySelectorAll('.item');
    if (items.length != 7) {
        return false;
    }

    let food = document.querySelectorAll('.food');
    if (food.length != 2) {
        return false;
    }

    let water = document.querySelectorAll('.water');
    if (water.length != 3) {
        return false;
    }

    if (!document.getElementById('axe')) {
        return false;
    }

    if (!document.getElementById('pick')) {
        return false;
    }

    return true;
}