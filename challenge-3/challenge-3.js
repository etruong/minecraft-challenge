/**
1. Make it so when you double tap on the tree, it creates 4 wood (wood.png) img 
    DOM elements to #inventory with the following traits:
        - an alt attribute with the words "wood"
        - classes: wood and resource
        - on click event where it toggles the class selected (Try: node.classList.toggle('class'))
2. Create an on click event for the #convert-btn that does the following:
        - Removes one wood piece (hint: use query selector)
        - Increase the convertedWood variable by 1
        - Check if the convertedWood variable is equal to 4, if it is, then 
            creates and append a sword div DOM element to #inventory
        - Note the sword should have the following traits:
            - backgroundImage should be wooden-sword.png
            - innerHTML should equal ' ' with a semicolon (;) at the end
            - id should be 'sword'
            - should contain class 'resource' and 'background-styling'
3. Once you've completed your sword, and it is shown in your inventory. 
    Click the completed task button
4. Challenge!
        - Uncomment the select tag and option tag below
        - Change where you set the backgroundImage of the sword div to be 
            dependent on the value of the dropdown #sword-type (using if/else)
        - Create an on change event listener for the #sword-type to change 
            the sword type in inventory to the sword-type user chosen value
 */

let convertedWood = 0;

let inventory = document.getElementById("inventory");

let tree = document.querySelector(".tree");
tree.addEventListener("dblclick", function () {
    let wood1 = createWood();
    let wood2 = createWood();
    let wood3 = createWood();
    let wood4 = createWood();

    inventory.appendChild(wood1);
    inventory.appendChild(wood2);
    inventory.appendChild(wood3);
    inventory.appendChild(wood4);

    tree.remove();
});

document.getElementById("convert-btn").addEventListener("click", function () {
    document.querySelector(".wood").remove();
    convertedWood++;
    if (convertedWood == 4) {
        let sword = createSword();
        inventory.appendChild(sword);
    }
});

function createSword() {
    let sword = document.createElement("div");
    sword.id = "sword";
    sword.innerHTML = "&nbsp;";
    sword.classList.add("resource", "background-styling");
    sword.style.backgroundImage = "url(\"./img/wood-sword.png\")";
    return sword;
}

function createWood() {
    let wood = document.createElement("img");
    wood.alt = "wood";
    wood.src = "./img/wood.gif";
    wood.classList.add("wood", "resource");
    wood.addEventListener("click", function () {
        wood.classList.toggle("selected");
    });
    return wood;
}