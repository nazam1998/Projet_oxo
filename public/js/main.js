let content = document.querySelectorAll('.content');
let plateau = document.getElementsByClassName('row')[0];
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
        if (estRempli()) {
            alert('La partie est terminée');
        }
    });
});


function estVide(e) {
    return e.innerText == '.';
}

function horizontal() {

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