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

function renderizarLista() {
    DOM.listaContainer.innerHTML = "";
    // Removido o DOM.containerTrailer porque não está definido no DOM

    const qtdPorPagina = parseInt(DOM.quantidadePagina.value);
    const inicio = (paginaAtual - 1) * qtdPorPagina;
    const fim = inicio + qtdPorPagina;
    const animesPagina = animesFiltrados.slice(inicio, fim);

    if (animesPagina.length === 0) {
        DOM.listaContainer.innerHTML = "<p>Nenhum anime encontrado.</p>";
        return;
    }

    animesPagina.forEach(anime => {
        DOM.listaContainer.appendChild(criarCardAnime(anime));
    });

    renderizarPaginacao();
}  // <-- Fechamento da função renderizarLista corrigido

function criarCardAnime({ titulo, capa, nota, popularidade, ano, temporada, genero, sinopse }) {
    const card = document.createElement("article");
    card.className = "card-anime";

    card.innerHTML = `
        <img src="${capa}" alt="Capa de ${titulo}" class="capa-anime">
        <div class="info-anime">
            <h2 class="titulo-anime">${titulo}</h2>
            <p class="nota-anime"><strong>Nota:</strong> ${nota}</p>
            <p class="popularidade-anime"><strong>Popularidade:</strong> ${popularidade}</p>
            <p class="ano-temporada-anime"><strong>Ano:</strong> ${ano} | <strong>Temporada:</strong> ${temporada}</p>
            <p class="genero-anime"><strong>Gênero:</strong> ${genero.join(", ")}</p>
            <p class="sinopse-anime">${sinopse}</p>
        </div>
    `;

    return card;
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

function inicializar() {
    configurarTema();
    preencherGeneros();
    configurarEventos();
    aplicarFiltros();
}

document.addEventListener("DOMContentLoaded", inicializar);

