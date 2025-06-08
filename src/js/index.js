import { animes } from './animes.js';

console.log(animes);

const DOM = {
    listaContainer: document.getElementById("lista-animes"),
    generoFiltro: document.getElementById("genero-filtro"),
    temporadaFiltro: document.getElementById("temporada-filtro"),
    buscaNome: document.getElementById("busca-nome"), 
    quantidadePagina: document.getElementById("quantidade-pagina"),
    paginacao: document.getElementById("paginacao"),
    toggleTheme: document.getElementById("toggleTheme"), 
    formFiltros: document.getElementById("form-filtros"),
    btnCuriosidade: document.getElementById("btnCuriosidade"),
    cardCuriosidade: document.getElementById("cardCuriosidade"),
    textoCuriosidade: document.getElementById("textoCuriosidade"),
};

let paginaAtual = 1;
let animesFiltrados = [...animes];  

function configurarTema() {
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "escuro") {
        document.body.classList.add("tema-escuro");
        DOM.toggleTheme.checked = true;
    } else {
        document.body.classList.remove("tema-escuro");
        DOM.toggleTheme.checked = false;
    }
}

DOM.toggleTheme.addEventListener("change", () => {
    if (DOM.toggleTheme.checked) {
        document.body.classList.add("tema-escuro");
        localStorage.setItem("tema", "escuro");
    } else {
        document.body.classList.remove("tema-escuro");
        localStorage.setItem("tema", "claro");
    }
});

function aplicarFiltros() {
    const temporadaSelecionada = DOM.temporadaFiltro.value.toLowerCase();
    const nomeBusca = DOM.buscaNome.value.toLowerCase();
    const generoSelecionado = DOM.generoFiltro.value.toLowerCase();

    animesFiltrados = animes.filter(({ titulo, temporada, genero }) => {
        const nomeMatch = titulo.toLowerCase().includes(nomeBusca);
        const temporadaMatch = !temporadaSelecionada || temporada.toLowerCase() === temporadaSelecionada;
        const generoMatch = !generoSelecionado || genero.join(", ").toLowerCase().includes(generoSelecionado);
        return nomeMatch && temporadaMatch && generoMatch;
    });

    paginaAtual = 1;
    renderizarLista();
}

function criarCardAnime(anime, index) {
    const card = document.createElement('div');
    card.className = 'card-anime';

    card.innerHTML = `
    <h3>${anime.titulo}</h3>
    <p><strong>Ano:</strong> ${anime.ano}</p>
    <p><strong>Temporada:</strong> ${anime.temporada}</p>
    <p><strong>Gênero:</strong> ${anime.genero.join(", ")}</p>
    <p><strong>Sinopse:</strong> ${anime.sinopse}</p>
    <img src="${anime.capa}" alt="Capa do anime ${anime.titulo}"/>
    <button class="botao-curiosidade" data-index="${index}">
      Mostrar Curiosidade
    </button>
    <p id="curiosidade-${index}" class="curiosidade-anime" style="display:none;">
      <strong>Curiosidade:</strong> ${anime.curiosidade}
    </p>
    `;

    return card;
}

function renderizarLista() {
    DOM.listaContainer.innerHTML = "";

    const qtdPorPagina = parseInt(DOM.quantidadePagina.value);
    const inicio = (paginaAtual - 1) * qtdPorPagina;
    const fim = inicio + qtdPorPagina;
    const animesPagina = animesFiltrados.slice(inicio, fim);

    if (animesPagina.length === 0) {
        DOM.listaContainer.innerHTML = "<p>Nenhum anime encontrado.</p>";
        return;
    }

    animesPagina.forEach((anime, index) => {
        DOM.listaContainer.appendChild(criarCardAnime(anime, index));
    });    

    const botoesCuriosidade = DOM.listaContainer.querySelectorAll(".botao-curiosidade");
    botoesCuriosidade.forEach(botao => {
        botao.addEventListener("click", () => {
            const idx = botao.getAttribute("data-index");
            mostrarCuriosidade(idx);
        });
    });

    renderizarPaginacao();
}

function renderizarPaginacao() {
    const totalPaginas = Math.ceil(animesFiltrados.length / parseInt(DOM.quantidadePagina.value));
    DOM.paginacao.innerHTML = "";

    for (let i = 1; i <= totalPaginas; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        btn.className = i === paginaAtual ? "pagina-ativa" : "";

        btn.addEventListener("click", () => {
            paginaAtual = i;
            renderizarLista();
        });

        DOM.paginacao.appendChild(btn);
    }
}

function configurarEventos() {
    DOM.formFiltros.addEventListener("submit", (e) => {
        e.preventDefault();
        aplicarFiltros();
    });

    DOM.quantidadePagina.addEventListener("change", () => {
        paginaAtual = 1;
        renderizarLista();
    });
}

function preencherGeneros() {
    const generosUnicos = new Set();

    animes.forEach(anime => {
        anime.genero.forEach(g => generosUnicos.add(g));
    });

    const opcoes = Array.from(generosUnicos).sort();

    DOM.generoFiltro.innerHTML = '<option value="">Todos</option>';
    opcoes.forEach(genero => {
        const option = document.createElement("option");
        option.value = genero;
        option.textContent = genero;
        DOM.generoFiltro.appendChild(option);
    });
}

function mostrarCuriosidade(indice) {
    const pCuriosidade = document.getElementById(`curiosidade-${indice}`);

    if (pCuriosidade.style.display === 'none'){
        pCuriosidade.style.display = 'block'; 
    } else {
        pCuriosidade.style.display = 'none';
    }
}

function inicializar() {
    configurarTema();
    preencherGeneros();
    configurarEventos();
    aplicarFiltros(); 
}

document.addEventListener("DOMContentLoaded", inicializar);