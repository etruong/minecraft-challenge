/*
Instructions:
Altering only the challenge-2.js file (DO NOT ALTER the HTML OR CSS) do the following

1. Using only JavaScript, create the following img DOM elements adding the class .item
    and attach it to the #backpack:
    - 1 Meat (using meat.png and adding the class food)
    - 1 Corn (using corn.jpg and adding the class food)
    - 3 Waterbuckets (using water.png and setting the class to water)
    - 1 Axe (using axe.png and setting the id to axe)
    - 1 pickaxe (using pick.png and setting the id to pick)

2. In the JS, create an on click event listener for the #eat-btn that grabs 
    and removes ONE of the elements in the #backpack with the class .food

3. In the JS, create an on click event listener for the #drink-btn that grabs 
    and removes ONE of the elements in the #backpack with the class .water

4. Challenge: Create an on click event listener for the use item button that 
    takes the value in the input and does the following depending on what is used:
    - If it's the pickaxe it adds a stone (stone.jpeg) into the #backpack with the class .stone
    - If it's the axe it adds wood (wood.gif) into the #backpack with the class .wood
5. Test out if the event listers work, but also make sure to refresh the page before doing
    the next step!
6. Click the Completed Tasks Button to find the answer!
*/

/**
 * 1. Using only JavaScript, create the following img DOM elements adding the class .item
    and attach it to the #backpack:
    - 1 Meat (using meat.png and adding the class food)
    - 1 Corn (using corn.jpg and adding the class food)
    - 3 Waterbuckets (using water.png and setting the class to water)
    - 1 Axe (using axe.png and setting the id to axe)
    - 1 pickaxe (using pick.png and setting the id to pick)
*/

let backpack = document.getElementById("backpack");

let meat = document.createElement("img");
meat.classList.add("item", "food");
meat.src = "./img/steak.png";
backpack.appendChild(meat);

let corn = document.createElement("img");
corn.classList.add("item", "food");
corn.src = "./img/corn.jpg";
backpack.appendChild(corn);

let water1 = document.createElement("img");
water1.classList.add("item", "water");
water1.src = "./img/water.png";
backpack.appendChild(water1);

let water2 = document.createElement("img");
water2.classList.add("item", "water");
water2.src = "./img/water.png";
backpack.appendChild(water2);

let water3 = document.createElement("img");
water3.classList.add("item", "water");
water3.src = "./img/water.png";
backpack.appendChild(water3);

let axe = document.createElement("img");
axe.src = "./img/axe.png";
axe.classList.add("item");
axe.id = "axe";
backpack.appendChild(axe);

let pick = document.createElement("img");
pick.src = "./img/pick.png";
pick.classList.add("item");
pick.id = "pick";
backpack.appendChild(pick);

document.getElementById("eat-btn").addEventListener("click", function () {
    document.querySelector(".food").remove();
});

document.getElementById("drink-btn").addEventListener("click", function () {
    document.querySelector(".water").remove();
});