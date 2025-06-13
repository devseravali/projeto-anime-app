# 🎌 Anime Radar  
> Onde a paixão por animes encontra curiosidades incríveis.

**Anime Radar** é um painel interativo que permite explorar, filtrar e descobrir animes por temporada, gênero, nome e popularidade — além de revelar curiosidades fascinantes sobre cada obra. O projeto traz uma interface moderna com suporte a tema claro/escuro, responsividade e filtros dinâmicos.

___

## Índice
- [Preview](#🔍-preview)  
- [Demonstração](#🖼️-demonstração)  
- [Funcionalidades](#🚀-funcionalidades)  
- [Estrutura do Projeto](#📁-estrutura-do-projeto)  
- [Tecnologias Utilizadas](#🧠-tecnologias-utilizadas)  
- [Curiosidades Sobre o Projeto](#🎉-curiosidades-sobre-o-projeto)  
- [Autor](#👩‍💻-autor)

---

### 🔍 Preview  
#### 📌 **Demonstração Site**  
<img src="src/design/gifs/site.gif" alt="Demonstração Interface do Anime Radar" width="100%">

#### 📌 **Demonstração Responsiva**  
| Versão Clara | Versão Escura |  
|--------------|---------------|  
| <img src="src/design/gifs/paginaclaro.gif" alt="Versão Clara do Anime Radar" width="100%"> | <img src="src/design/gifs/paginaescuro.gif" alt="Versão Escura do Anime Radar" width="100%"> |

---
### 🖼️ Demonstração  
Confira a versão online do projeto clicando no link abaixo:  
🔗 [Anime Radar – Visualizar agora](https://devseravali.github.io/projeto-anime-app/) 

---

### 🚀 Funcionalidades  
- 🔍 Pesquisa por nome de anime  
- 🎯 Filtros por temporada, gênero e nota  
- 🌗 Alternância entre tema claro e escuro  
- 🧾 Exibição de sinopse, ano de lançamento e nota  
- 📱 Layout responsivo e adaptado para todos os dispositivos  
- 🧠 Curiosidades exclusivas sobre cada anime  

---
### 📁 Estrutura do Projeto

```plaintext
📁 projeto-anime-app
│
├── 📄 index.html
├── 📄 README.md
│
├── 📁 src
│   ├── 📁 css
│   │   ├── reset.css
│   │   ├── responsivo.css
│   │   ├── style.css
│   │   └── variables.css
│   │
│   ├── 📁 design
│   │   ├── 📁 favicon
│   │   │   └── (arquivos .ico / .png)
│   │   ├── 📁 gifs
│   │   │   └── (arquivos .gif)
│   │   └── 📁 images
│   │       └── (arquivos .jpg)
│   │
│   └── 📁 js
│       ├── animes.js
│       └── index.js
```

---
### 🧠 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **HTML5**: Estrutura semântica da página web.
- **CSS3**: Estilização visual, incluindo layout responsivo, temas claro e escuro com variáveis CSS.
- **JavaScript (ES6+)**: Lógica do projeto para manipulação do DOM, filtros, paginação e tema.
- **Módulos JavaScript (ES Modules)**: Organização do código com import/export entre arquivos.
- **LocalStorage**: Armazenamento local no navegador para salvar preferências do tema (claro/escuro).
- **DOM API**: Manipulação dinâmica dos elementos HTML na página.

Essas tecnologias juntas possibilitam uma aplicação interativa, dinâmica e responsiva para exibição e filtragem de animes.

---

### 🎉 Curiosidades Sobre o Projeto

1. **Design inspirado em "Diário de uma Apotecária"**  
   O design do Anime App foi inspirado no anime *Diário de uma Apotecária*, trazendo uma estética que mistura simplicidade e elegância para tornar a navegação agradável e intuitiva.

2. **Dualidade dos temas claros e escuros**  
   No Anime App, o tema claro representa a doce e otimista Apotecária MaoMao, criando uma atmosfera leve e acolhedora. Já o tema escuro simboliza o enigmático Mestre Jinshi, adicionando um toque misterioso e sofisticado. Essa escolha reforça a dinâmica do anime, trazendo luz e sombra para a experiência do usuário.

3. **Acessibilidade em primeiro lugar**  
   Todo o layout foi planejado pensando na acessibilidade, com labels claras nos filtros, contraste adequado para facilitar a leitura e uma navegação simples, garantindo que todos possam aproveitar o app.

4. **Botão de alternância com ícones personalizados**  
   O toggle de tema possui ícones customizados para facilitar a identificação visual rápida entre os modos claro e escuro, tornando a experiência mais intuitiva.

5. **CSS modular para fácil manutenção**  
   O código CSS está organizado em arquivos separados — variáveis, reset, estilos gerais e responsivos — o que facilita futuras atualizações e melhorias no design.

6. **Filtros dinâmicos com dados reais**  
   Os filtros de gênero, temporada e busca por nome são totalmente dinâmicos, gerando opções diretamente a partir dos dados dos animes, garantindo que o usuário sempre tenha opções atualizadas.

7. **Paginação inteligente**  
   A paginação é responsiva ao número de animes filtrados, permitindo navegar facilmente entre os resultados e personalizar a quantidade de itens exibidos por página.

## 👩‍💻 Autor 
Desenvolvido por Dev Seravali

[GitHub](https://github.com/devseravali) | [LinkedIn](https://www.linkedin.com/in/dev-seravali/)
