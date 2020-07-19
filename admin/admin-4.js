let id = setInterval(check, 1000);
function check() {
    console.log(parseInt(healthBar.style.width))
    if (parseInt(healthBar.style.width) < 10) {
        alert('The creeper king yelled: creeper steepers treepers');
        clearInterval(id);
    }
}