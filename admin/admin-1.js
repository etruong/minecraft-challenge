const hayID = setInterval(releaseMystery, 1000);
const treeID = setInterval(releaseMystery2, 1000);
const duckID = setInterval(releaseMystery3, 500);

function releaseMystery() {
    const hay = document.getElementById('hay');
    if (hay) {
        clearInterval(hayID);
        appendItem('mystery-3', 3);
    }
}

function releaseMystery2() {
    const revealMystery1 = document.querySelector('#mystery-1');
    const styleProp = revealMystery1.currentStyle ? revealMystery1.currentStyle.display :
                              getComputedStyle(revealMystery1, null).display;
    if (styleProp == 'block') {
        clearInterval(treeID);
        appendItem('mystery-4', 4);
    }
}

function releaseMystery3() {
    const rock = document.querySelector('#mystery-3');
    const styleProp = rock.currentStyle ? rock.currentStyle.backgroundImage :
                              getComputedStyle(rock, null).backgroundImage;
    if (styleProp.split('/')[5] == 'mystery-5.png\")') {
        clearInterval(duckID);
        appendItem('mystery-5', 2);
    }
}

function appendItem(name, amount) {
    const mainContainer = document.querySelector('main');
    for (let i = 0; i < amount; i++) {
        const item = document.createElement('div');
        item.classList.add(name);
        item.classList.add('object');
        item.innerHTML = '&nbsp;'
        mainContainer.appendChild(item);
    }
}