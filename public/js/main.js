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

    do {

        e.parentElement.addEventListener('click', () => {

            if (estVide(e)) {

                click++;
                let temp = click % 2;

                e.innerHTML = player[temp].pawn;
                e.style.color = player[temp].color;

                rempli();

            }
        });
    } while (!rempli());
    if (rempli()) {
        alert('La partie est terminée');
    }
});

function estVide(e) {
    return e.innerText == '.';
}

function horizontal() {

}

function rempli() {

    content.forEach(e => {

        if (e.innerText == '.') {

            return true;

        }

    });

    return false;
}