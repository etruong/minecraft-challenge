let healthBar = document.querySelector('#progress div');
let maxHealth = healthBar.clientWidth;
let health = healthBar.clientWidth;

function attack() {
    if (currentWeapon == "crossbow") {
        health -= (maxHealth * 0.1);
    } else if (currentWeapon == "wooden") {
        health -= (maxHealth * 0.05);
    } else if (currentWeapon == "stone") {
        health -= (maxHealth * 0.1);
    } else { // currentWeapon == "gold"
        health -= (maxHealth * 0.2);
    }
    if (health < 0) {
        health = 0;
    }
    healthBar.style.width = ((health / maxHealth) * 100.0) + "%";
}

let currentWeapon;

// Instructions:
// Alter only the JS code not the HTML or CSS!
// 1. Add a on click event that when the #attack-btn is click on it calls the attack function above
// 2. Create a function that changes the currentWeapon variable to the value of the 
//      dropdown menu (hint: use querySelector)
// 3. Add a on change event listener to the dropdown menu that calls the function you created in step 2
// 4. Defeat the Creeper king! Click on the attack button until he is defeated. He should give you the
//      password to continue your adventure!

document.querySelector("#attack-btn").addEventListener("click", attack);

function changeCurrentWeapon() {
    currentWeapon = document.querySelector("select").value;
}

document.querySelector("select").addEventListener("change", changeCurrentWeapon);