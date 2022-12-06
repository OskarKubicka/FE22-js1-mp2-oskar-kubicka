const body = document.querySelector('body');

const div1 = document.querySelector('#div1');
const form = document.querySelector('form');
const playerNameh1 = document.querySelector('#player-name-h1');
const input = document.querySelector('#input');
const btnName = document.querySelector('#player-name-button');

const div2 = document.querySelector('#div2');
const imgSten = document.querySelector('#img-sten');
const imgSax = document.querySelector('#img-sax');
const imgPase = document.querySelector('#img-pase');
const imgStenHide = document.querySelector('#img-sten-hide');
const imgSaxHide = document.querySelector('#img-sax-hide');
const imgPaseHide = document.querySelector('#img-pase-hide');
const imgStenHide2 = document.querySelector('#img-sten-hide2');
const imgSaxHide2 = document.querySelector('#img-sax-hide2');
const imgPaseHide2 = document.querySelector('#img-pase-hide2');
const h2spelarval = document.querySelector('#spelarval');
const h2datorval = document.querySelector('#datorval');
const h2spelarpoint = document.querySelector('#spelarpoint');
const h2datorpoint = document.querySelector('#datorpoint');
const divValet = document.querySelector('#valet');
const h1titel = document.querySelector('#titel');
const divDator2 = document.querySelector('#dator2');
const divDator1 = document.querySelector('#dator1');


let h2playercount = 0;
let h2computercount = 0;
const arr = ['Sten', 'Sax', 'Påse'];

btnName.addEventListener('click', nameFunction);
function nameFunction(event1) {
    event1.preventDefault();
    playerNameh1.innerText = `Lycka till ${input.value}!`;
    input.style.display = "none";
    btnName.style.display = "none";
    divValet.style.display = "block";
    form.style.display = "none";
    div2.style.display = "flex";
    div2.style.flexFlow = "column nowrap";
    div2.style.textAlign = "center";
    h2spelarval.innerText = `Ditt val:`;
    h2datorval.innerText = `Datorns val:`;
    h2playercount = 0;
    h2computercount = 0;
    h2datorpoint.innerText = `Datorns poäng: 0`;
    h2spelarpoint.innerText = `Dina poäng: 0`;
    imgSten.style.display = '';
    imgSax.style.display = '';
    imgPase.style.display = '';
    imgStenHide.style.display = "none";
    imgSaxHide.style.display = "none";
    imgPaseHide.style.display = "none";
    imgStenHide2.style.display = "none";
    imgSaxHide2.style.display = "none";
    imgPaseHide2.style.display = "none";
    body.style.backgroundColor = "hsl(150, 60%, 60%)";
}

div2.addEventListener('click', clickFunction);
function clickFunction(event) {
    if (event.target.id == 'img-sten' || event.target.id == 'img-sax' || event.target.id == 'img-pase') {

        let randomNumber = Math.floor(Math.random() * arr.length);
        let computerChoice = arr[randomNumber];
        
        console.log(computerChoice);
        if (event.target.id == 'img-sten') {
            imgSaxHide.style.display = "none";
            imgStenHide.style.display = "block";
            imgPaseHide.style.display = "none";
        }
        else if (event.target.id == 'img-sax') {
            imgSaxHide.style.display = "block";
            imgStenHide.style.display = "none";
            imgPaseHide.style.display = "none";
        }
        else if (event.target.id == 'img-pase') {
            imgSaxHide.style.display = "none";
            imgStenHide.style.display = "none";
            imgPaseHide.style.display = "block";
        }
        if (computerChoice == arr[0]) {
            imgSaxHide2.style.display = "none";
            imgStenHide2.style.display = "block";
            imgPaseHide2.style.display = "none";
        }
        else if (computerChoice == arr[1]) {
            imgSaxHide2.style.display = "block";
            imgStenHide2.style.display = "none";
            imgPaseHide2.style.display = "none";
        }
        else if (computerChoice == arr[2]) {
            imgSaxHide2.style.display = "none";
            imgStenHide2.style.display = "none";
            imgPaseHide2.style.display = "block";
        }

        


        if (event.target.id == 'img-sten' && computerChoice == arr[1] || event.target.id == 'img-sax' && computerChoice == arr[2] || event.target.id == 'img-pase' && computerChoice == arr[0]) {
            h2playercount++;
            h2spelarpoint.innerText = `Dina poäng: ${h2playercount}`;
        }

        else if (event.target.id == 'img-sten' && computerChoice == arr[2] || event.target.id == 'img-sax' && computerChoice == arr[0] || event.target.id == 'img-pase' && computerChoice == arr[1]) {
            h2computercount++;
            h2datorpoint.innerText = `Datorns poäng: ${h2computercount}`;
        }

        if (h2playercount == 3 || h2computercount == 3) {
            form.style.display = "flex"
            btnName.style.display = "block";

            input.style.display = "block";
            btnName.innerText = `Kör igen`;
            divValet.style.display = "none";
            playerNameh1.style.display = "block";
            playerNameh1.style.fontSize = "70px";

            playerNameh1.innerText = `Grattis! Du vann med ${h2playercount}-${h2computercount}!`;
            body.style.backgroundColor = "hsl(100, 95%, 70%)";
            if (h2computercount == 3) {
                playerNameh1.innerText = `Datorn vann med ${h2computercount}-${h2playercount}!`;
                body.style.backgroundColor = "hsl(349, 95%, 80%)";
            }

        }

    }

}






