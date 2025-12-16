/* ============================================
   DIACRONIA: AS NOVAS CUNHATÃS
   Sistema de Renderização Dinâmica de Revista
   ============================================ */

// DADOS DA REVISTA - Array com 20 páginas
const magazineData = [
    // PÁGINA 1: CAPA
    {
        type: 'cover',
        title: 'Diacronia',
        subtitle: 'As Novas Cunhatãs: Gênero, Tradição e Ruptura',
        date: 'Dezembro 2025',
        image: 'assets/images/capa_cunhata.png'
    },
    // PÁGINA 2: EDITORIAL
    {
        type: 'editorial',
        title: 'Carta do Editor',
        content: 'A participação igualitária da mulher na tomada de decisões é uma exigência democrática. Esta edição celebra as pioneiras e analisa os dados que revelam a força feminina na Paraíba, apesar dos desafios históricos.',
        author: 'Fabrício Endreon',
        role: 'Editor-Chefe'
    },
    // PÁGINA 3: SUMÁRIO
    {
        type: 'toc',
        title: 'Nesta Edição',
        items: [
            { page: 4, label: 'Pioneiras: Vani e Dulce' },
            { page: 6, label: 'Bancada ALPB 2025' },
            { page: 10, label: 'Análise: Democracia e Gênero' },
            { page: 14, label: 'Perfil das Gestoras' }
        ]
    },
    // PÁGINA 4: ARTIGO 1 (Pioneiras)
    {
        type: 'article',
        title: 'Pioneiras do Voto',
        headline: 'O Legado de Vani Braga e Dulce Barbosa',
        content: 'A história política da Paraíba é marcada por hiatos. Somente na década de 1960, Maria Dulce Barbosa tornou-se a primeira prefeita eleita (Queimadas). Em 1982, Vani Braga rompeu barreiras na ALPB.',
        pdf: 'assets/pdfs/Mulheres na política paraibana (1).pdf',
        dropCap: true
    },
    // PÁGINA 5: CONTINUAÇÃO ARTIGO 1
    {
        type: 'text-only',
        content: 'Essas trajetórias pavimentaram o caminho para maior visibilidade, apesar do coronelismo e do machismo cultural que ainda tentam ditar que o espaço público não pertence às mulheres. A luta dessas pioneiras representa não apenas uma conquista pessoal, mas um avanço coletivo que inspirou gerações de mulheres paraibanas a buscarem seu lugar na política.'
    },
    // PÁGINA 6: ARTIGO 2 (ALPB)
    {
        type: 'article',
        title: 'A Casa de Epitácio',
        headline: 'Segunda Maior Bancada da História',
        content: 'A atual legislatura conta com seis deputadas: Francisca Mota, Camila Toscano, Cida Ramos, Dra. Paula, Jane Panta e Danielle do Vale. É a maior representatividade desde 1998.',
        image: 'assets/images/mulheres_parlamentares.jfif',
        pdf: 'assets/pdfs/RELF_Democracia+Representativa+e+Igualdade+de+Gênero_+A+participação+da+Mulher+na+Política+Paraibana+sem+marcas+de+revisão.pdf'
    },
    // PÁGINA 7: PERFIL DEPUTADAS 1
    {
        type: 'profiles',
        title: 'Lideranças',
        profiles: [
            { name: 'Francisca Mota', desc: 'Decana com seis mandatos, ex-prefeita de Patos e ex-presidente da ALPB.' },
            { name: 'Cida Ramos', desc: 'Professora da UFPB, referência em assistência social e campeã de votos em 2018.' }
        ]
    },
    // PÁGINA 8: PERFIL DEPUTADAS 2
    {
        type: 'profiles',
        title: 'Lideranças',
        profiles: [
            { name: 'Camila Toscano', desc: 'Advogada, foco em direitos da mulher no Brejo paraibano.' },
            { name: 'Dra. Paula', desc: 'Médica, forte atuação na saúde e no sertão.' }
        ]
    },
    // PÁGINA 9: PERFIL DEPUTADAS 3
    {
        type: 'profiles',
        title: 'Lideranças',
        profiles: [
            { name: 'Dra. Jane Panta', desc: 'Médica cardiologista, representante de Santa Rita.' },
            { name: 'Danielle do Vale', desc: 'A "novata" do grupo, representando o Vale do Mamanguape.' }
        ]
    },
    // PÁGINA 10: ARTIGO 3 (ACADÊMICO RELF)
    {
        type: 'article',
        title: 'Democracia Representativa',
        headline: 'A Ilusão da Igualdade Formal',
        content: 'Apesar da CF/88 garantir igualdade, as mulheres continuam sub-representadas. A pesquisa indica que 49% dos eleitores veem a falta de apoio partidário como o principal entrave.',
        pdf: 'assets/pdfs/RELF_Democracia+Representativa+e+Igualdade+de+Gênero_+A+participação+da+Mulher+na+Política+Paraibana+sem+marcas+de+revisão.pdf',
        dropCap: true
    },
    // PÁGINA 11: DADOS (GRÁFICOS)
    {
        type: 'chart',
        title: 'O Voto na Paraíba',
        content: 'Curiosamente, 63% dos eleitores afirmam que o gênero não define o voto. Contudo, nas eleições de 2016, houve queda de 17,4% no número de prefeitas em relação a 2012.',
        highlight: '92% percebem resistência à mulher na política.'
    },
    // PÁGINA 12: ARTIGO 4 (PREFEITAS)
    {
        type: 'article',
        title: 'As Prefeitas em Perspectiva',
        headline: 'Quem governa os municípios?',
        content: 'Estudos mostram que mulheres governam majoritariamente cidades pequenas (menos de 10 mil hab.) e com baixo IDH. O "fator parentesco" ainda é decisivo para muitas candidaturas.',
        pdf: 'assets/pdfs/nayara_sandy,+artigo_6.pdf'
    },
    // PÁGINA 13: PERFIL DAS GESTORAS
    {
        type: 'data-box',
        title: 'Raio-X das Gestoras',
        items: [
            'Faixa Etária: 30 a 50 anos',
            'Escolaridade: Superior Completo (maioria)',
            'Estado Civil: Casadas (fator de validação social)',
            'Partidos: Predomínio de legendas de centro/direita (PMDB, PSDB).'
        ]
    },
    // PÁGINA 14: ELEIÇÕES 2024
    {
        type: 'article',
        title: 'Avanços Recentes',
        headline: 'O Salto de 2024',
        content: 'Nas últimas eleições municipais, a Paraíba elegeu 53 prefeitas e 453 vereadoras, consolidando um crescimento real em comparação aos pleitos anteriores.',
        image: 'assets/images/elas_por_elas.jfif'
    },
    // PÁGINA 15: VISUAL
    {
        type: 'image-full',
        caption: 'Sessão Solene na ALPB: Mulheres ocupando a tribuna.',
        image: 'assets/images/mulheres_parlamentares.jfif'
    },
    // PÁGINA 16: OPINIÃO
    {
        type: 'quote-page',
        content: 'A mulher é metade da população, a metade menos favorecida. É justo que nomes femininos sejam sufragados pelo voto popular.',
        author: 'Bertha Lutz'
    },
    // PÁGINA 17: PROJETOS DE LEI
    {
        type: 'list',
        title: 'Legislação em Pauta',
        items: [
            'Combate à Violência Obstétrica',
            'Incentivo ao Empreendedorismo Feminino',
            'Cotas em Concursos Públicos Estaduais'
        ]
    },
    // PÁGINA 18: DESAFIOS FUTUROS
    {
        type: 'article',
        title: 'O Que Falta?',
        content: 'Superar a violência política de gênero, garantir financiamento de campanha igualitário e romper o teto de vidro do Executivo Estadual (Governadora).',
        pdf: 'assets/pdfs/Mulheres na política paraibana (1).pdf',
        dropCap: true
    },
    // PÁGINA 19: REFERÊNCIAS
    {
        type: 'text-only',
        title: 'Referências Bibliográficas',
        content: '1. RABAY, G. Mulher e Política na Paraíba.\n2. TSE. Estatísticas Eleitorais.\n3. ALPB. Arquivos Históricos.',
        small: true
    },
    // PÁGINA 20: CONTRACAPA
    {
        type: 'back-cover',
        title: 'Diacronia',
        footer: 'ISSN 2966-0521 | João Pessoa - PB | 2025',
        contact: 'contato@diacronia.pb.leg.br'
    }
];

// ELEMENTOS DO DOM
const book = document.getElementById('book');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentPageSpan = document.getElementById('current-page');
const totalPagesSpan = document.getElementById('total-pages');
const loadingScreen = document.getElementById('loading');

// VARIÁVEIS DE CONTROLE
let currentPageIndex = 0;
const totalPages = magazineData.length;

// FUNÇÕES DE RENDERIZAÇÃO POR TIPO DE PÁGINA
const pageRenderers = {
    cover: (data) => `
        <div class="page-content">
            <h1 class="page-title">${data.title}</h1>
            <h2 class="page-subtitle">${data.subtitle}</h2>
            ${data.image ? `<img src="${data.image}" alt="Capa" class="cover-image" onerror="this.style.display='none'">` : ''}
            <div class="cover-date">${data.date}</div>
        </div>
    `,
    
    editorial: (data) => `
        <div class="page-content">
            <h2 class="page-title">${data.title}</h2>
            <div class="page-text">
                <p>${data.content}</p>
            </div>
            <div class="editorial-author">
                <span class="name">${data.author}</span>
                <span class="role">${data.role}</span>
            </div>
        </div>
    `,
    
    toc: (data) => `
        <div class="page-content">
            <h2 class="page-title">${data.title}</h2>
            <ul class="toc-list">
                ${data.items.map(item => `
                    <li class="toc-item">
                        <span class="toc-label">${item.label}</span>
                        <span class="toc-page">${item.page}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    `,
    
    article: (data) => `
        <div class="page-content">
            ${data.headline ? `<h3 class="page-subtitle">${data.headline}</h3>` : ''}
            <h2 class="page-title">${data.title}</h2>
            ${data.image ? `<img src="${data.image}" alt="${data.title}" class="article-image" onerror="this.style.display='none'">` : ''}
            <div class="page-text ${data.dropCap ? 'with-drop-cap' : ''}">
                <p>${data.content}</p>
            </div>
            ${data.pdf ? `<a href="${data.pdf}" target="_blank" class="pdf-link">Ler Artigo Completo</a>` : ''}
        </div>
    `,
    
    'text-only': (data) => `
        <div class="page-content">
            ${data.title ? `<h2 class="page-title">${data.title}</h2>` : ''}
            <div class="page-text">
                <p>${data.content}</p>
            </div>
        </div>
    `,
    
    profiles: (data) => `
        <div class="page-content">
            <h2 class="page-title">${data.title}</h2>
            <div class="profiles-grid">
                ${data.profiles.map(profile => `
                    <div class="profile-card">
                        <div class="profile-name">${profile.name}</div>
                        <div class="profile-desc">${profile.desc}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    
    chart: (data) => `
        <div class="page-content">
            <h2 class="page-title">${data.title}</h2>
            <div class="page-text">
                <p>${data.content}</p>
            </div>
            <div class="chart-highlight">${data.highlight}</div>
        </div>
    `,
    
    'data-box': (data) => `
        <div class="page-content">
            <h2 class="page-title">${data.title}</h2>
            <ul class="data-list">
                ${data.items.map(item => `
                    <li class="data-item">${item}</li>
                `).join('')}
            </ul>
        </div>
    `,
    
    'image-full': (data) => `
        <img src="${data.image}" alt="${data.caption}" class="full-image" onerror="this.style.display='none'">
        <div class="image-caption">${data.caption}</div>
    `,
    
    'quote-page': (data) => `
        <div class="page-content">
            <div class="quote-text">${data.content}</div>
            <div class="quote-author"> ${data.author}</div>
        </div>
    `,
    
    list: (data) => `
        <div class="page-content">
            <h2 class="page-title">${data.title}</h2>
            <ul class="list-items">
                ${data.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `,
    
    'back-cover': (data) => `
        <div class="page-content">
            <h1 class="page-title">${data.title}</h1>
            <div class="back-footer">${data.footer}</div>
            <div class="back-contact">${data.contact}</div>
        </div>
    `
};

// INICIALIZAÇÃO DA REVISTA
function initMagazine() {
    book.innerHTML = '';
    
    magazineData.forEach((pageData, index) => {
        const pageElement = document.createElement('div');
        pageElement.classList.add('page', `page-type-${pageData.type}`);
        if (pageData.small) pageElement.classList.add('small-text');
        pageElement.style.zIndex = totalPages - index;
        pageElement.dataset.pageIndex = index;
        
        const renderer = pageRenderers[pageData.type];
        if (!renderer) {
            console.error(`Renderer não encontrado para tipo: ${pageData.type}`);
            return;
        }
        
        const frontHTML = `<div class="front">${renderer(pageData)}<div class="page-number">${index + 1}</div></div>`;
        const backHTML = `<div class="back"></div>`;
        
        pageElement.innerHTML = frontHTML + backHTML;
        
        pageElement.addEventListener('click', () => {
            if (currentPageIndex === index) {
                nextPage();
            } else if (currentPageIndex === index + 1) {
                prevPage();
            }
        });
        
        book.appendChild(pageElement);
    });
    
    updateUI();
    
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 800);
}

// NAVEGAÇÃO
function nextPage() {
    if (currentPageIndex < totalPages) {
        const pages = document.querySelectorAll('.page');
        pages[currentPageIndex].classList.add('flipped');
        currentPageIndex++;
        updateZIndexes();
        updateUI();
    }
}

function prevPage() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        const pages = document.querySelectorAll('.page');
        pages[currentPageIndex].classList.remove('flipped');
        updateZIndexes();
        updateUI();
    }
}

function updateZIndexes() {
    const pages = document.querySelectorAll('.page');
    pages.forEach((page, index) => {
        if (index < currentPageIndex) {
            page.style.zIndex = index + 1;
        } else {
            page.style.zIndex = totalPages - index;
        }
    });
}

function updateUI() {
    currentPageSpan.textContent = currentPageIndex + 1;
    totalPagesSpan.textContent = totalPages;
    
    prevBtn.disabled = currentPageIndex === 0;
    nextBtn.disabled = currentPageIndex === totalPages;
}

// EVENT LISTENERS
prevBtn.addEventListener('click', prevPage);
nextBtn.addEventListener('click', nextPage);

// Suporte a teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextPage();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevPage();
    }
});

// Suporte a Swipe (Mobile)
let touchStartX = 0;
let touchEndX = 0;

book.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, {passive: true});

book.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, {passive: true});

function handleSwipe() {
    const threshold = 50;
    if (touchEndX < touchStartX - threshold) {
        nextPage();
    }
    if (touchEndX > touchStartX + threshold) {
        prevPage();
    }
}

// INICIALIZAR QUANDO O DOM ESTIVER PRONTO
document.addEventListener('DOMContentLoaded', initMagazine);