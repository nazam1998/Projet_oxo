let content = document.querySelectorAll('.content');
let plateau = document.getElementsByClassName('row')[0];
let btn = document.getElementById('start');

let click = 0;

let player = [{
        pawn: 'X',
        color: 'blue'
    },
    {
        pawn: 'O',
        color: 'red'
    }
];


content.forEach(e => {


    e.parentElement.addEventListener('click', () => {

        if (estVide(e)) {

            click++;
            let temp = click % 2;

            e.innerHTML = player[temp].pawn;
            e.style.color = player[temp].color;

        }
        if (horizontal() || vertical() || diagonale()) {
            alert(`Le joueur ${player[click%2].pawn} a gagné!`);
        } else if (estRempli()) {
            alert('La partie est terminée');
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
    let rempli = true
    for (let i = 0; i < content.length; i++) {

        if (content[i].innerText == '.') {

            rempli = false

        }
    }
    return rempli;
}

btn.addEventListener('click', () => {
    plateau.classList.remove('d-none');
    let clear = document.createElement('button');
    clear.innerText = 'Recommencez';
    btn.parentElement.appendChild(clear);
    clear.setAttribute('class', btn.getAttribute('class'));
    btn.classList.add('d-none');
    clear.addEventListener('click', () => {
        content.forEach(e => {
            e.innerText = '.';
            e.style.color = '';
            click = 0;
        });
    });
});