import { obtenerChistes } from "./http.provider";

const body = document.body;

let btnOtro, olList;


const crearChistesHtml = () => {

    const html = `

    <h1 class="mt-5">CHISTES</h1>
    <hr>

    <button class="btn btn-primary"> Otro Chiste
    </button>

    <ol class="mt-2 list-group">
        <li class="list-group-item">.....</li>
    </ol>

`;

    const divChiste = document.createElement('div');
    divChiste.innerHTML = html;

    body.append(divChiste);
}

const eventos = () => {

    olList = document.querySelector('ol');
    btnOtro = document.querySelector('button');

    btnOtro.addEventListener('click', async() => {

        btnOtro.disabled = true;
        dibujarChiste(await obtenerChistes());
        // console.log('Hola mundo');
        btnOtro.disabled = false;
    });
}

// chiste = {id, value}
const dibujarChiste = (chiste, ) => {

    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${chiste.id}</b>: ${chiste.value}`;
    olItem.classList.add('list-group-item');

    olList.append(olItem);
}




export const init = () => {

    crearChistesHtml();
    eventos();
}