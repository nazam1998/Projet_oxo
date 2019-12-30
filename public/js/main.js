let content = document.querySelectorAll('.content');
let plateau = document.getElementById('plateau');
let btn = document.getElementById('start');
let nom = document.querySelectorAll('input');
let click = 0;

let player = [{
    pawn: 'X',
    color: 'blue'
}, {
    pawn: 'O',
    color: 'red'
}];

content.forEach(e => {
    e.parentElement.addEventListener('click', () => {
        if (estVide(e)) {
            let temp = click % 2;
            e.innerHTML = player[temp].pawn;
            e.style.color = player[temp].color;
            if (horizontal() || vertical() || diagonale()) {
                setTimeout(() => {
                    alert(`${player[click%2].name} a gagné!`);
                    init();
                }, 200);
            } else if (estRempli()) {
                setTimeout(() => {
                    alert('La partie est terminée');
                    init();
                }, 200);
            }

            click++;

        }
    });
});

function estVide(e) {
    return e.innerText == '.';
}

function horizontal() {
    let meme;
    for (let i = 0; i < 3; i++) {
        meme = 0;
        for (let j = 0; j < 3; j++) {
            if (content[j + (i * 3)].innerText != player[click % 2].pawn) {
                break;
            } else {
                meme++;
            }
        }
        if (meme == 3) {
            return true;
        }
    }
}

function vertical() {
    let meme;
    for (let i = 0; i < 3; i++) {
        meme = 0;
        for (let j = 0; j < 3; j++) {
            if (content[i + (j * 3)].innerText != player[click % 2].pawn) {
                break;
            } else {
                meme++;
            }
        }
        if (meme == 3) {
            return true;
        }
    }
}

function diagonale() {
    let meme = 0;
    for (let i = 0; i < 3; i++) {
        if (content[i * 4].innerText != player[click % 2].pawn) {
            break
        } else {
            meme++
        }
    }
    if (meme == 3) {
        return true;
    }
    meme = 0;
    for (let i = 0; i < 3; i++) {
        if (content[6 - i * 2].innerText != player[click % 2].pawn) {
            break;
        } else {
            meme++
        }
    }
    if (meme == 3) {
        return true;
    }
}

function estRempli() {
    let rempli = true;
    for (let i = 0; i < content.length; i++) {
        if (content[i].innerText == '.') {
            rempli = false;
        }
    }
    return rempli;
}


btn.addEventListener('click', () => {
    let clear = document.createElement('button');
    let joueur1 = document.createElement('p');
    let joueur2 = document.createElement('p');
    plateau.classList.remove('d-none');

    clear.innerText = 'Recommencez';

    player[0].name = nom[0].value;
    player[1].name = nom[1].value;

    joueur1.innerText = nom[0].value + ' ' + player[0].pawn;
    joueur2.innerText = nom[1].value + ' ' + player[1].pawn;

    joueur1.style.fontSize = '20px';
    joueur2.style.fontSize = '20px';

    nom[0].parentElement.appendChild(joueur1);
    nom[1].parentElement.appendChild(joueur2);

    nom[0].style.display = 'none';
    nom[1].style.display = 'none';

    nom[0].parentElement.parentElement.appendChild(clear);

    clear.setAttribute('class', btn.getAttribute('class'));

    btn.classList.add('d-none');

    clear.addEventListener('click', init());
});

function init() {
    content.forEach(e => {
        e.innerText = '.';
        e.style.color = '';
        click = 0;
    });
}