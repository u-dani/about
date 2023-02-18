
const title = document.querySelector('.js-title');
const text = document.querySelector('.js-text');

const links = document.querySelectorAll('.js-link');

links.forEach( link => {
    link.addEventListener('click', changeContent);
})


const Content = {

    "description": {
        "title": "Descrição",
        "text": "É caracterizada por possuir grandes inflorescências do tipo capítulo com aproximadamente 30 cm de diâmetro cujo caule pode atingir até 3 metros de altura e apresenta filotaxia do tipo oposta cruzada."
    },

    "history": {
        "title": "História",
        "text": "Os girassóis são plantas originárias da América do Norte cultivada pelos povos indígenas para alimentação, foram domesticadas por volta do ano 1 000 a.C. Francisco Pizarro encontrou diversos objetos incas e imagens moldadas em ouro que fazem referência aos girassóis como seu deus do Sol."
    },

    "utility": {
        "title": "Utilidade",
        "text": "Dos seus frutos, popularmente chamados sementes, é extraído o óleo de girassol que é comestível. A produção mundial ultrapassa 20 milhões de toneladas anuais de grão. A semente também é usada na alimentação de pássaros em cativeiro, além de ser uma das mais utilizadas na alimentação viva."
    }
}


function changeContent({ target }) {
    const dataContent = target.getAttribute("data-content");
    title.textContent = Content[dataContent].title;
    text.textContent = Content[dataContent].text
}


window.onload = () => {
    title.textContent = Content.description.title;
    text.textContent = Content.description.text
}