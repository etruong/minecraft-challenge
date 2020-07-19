document.querySelector("#c3 #complete-btn").addEventListener('click', () => {
    let sword = document.querySelector("#c3 #sword");
    if (sword) {
        alert('You got a sword! The password is: firey flowy fight');
    } else {
        alert('There is not a sword! Make sure you have done everything in the instruction. Try again!');
    }
});