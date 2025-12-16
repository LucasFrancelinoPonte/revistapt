/* ============================================
   DIACRONIA V2: AS NOVAS CUNHATÃS
   Sistema de Renderização Dinâmica com Centralização
   ============================================ */

// NOVO ARRAY DE DADOS - V2 (23 PÁGINAS)
const magazineData = [
    // PÁGINA 1 - CAPA
    {
        type: 'cover',
        title: 'Diacronia',
        subtitle: 'As Novas Cunhatãs',
        date: 'Dezembro 2025',
        image: 'assets/images/mulheres_parlamentares.jfif',
        overlay: true,
        backContent: {
            title: 'Ficha Técnica',
            text: 'Revista Diacronia - Edição Especial sobre a participação feminina na política paraibana. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    },
    // PÁGINA 2 - EDITORIAL
    {
        type: 'editorial',
        title: 'Editorial',
        content: 'A presença feminina na política da Paraíba segue em crescimento, com lideranças expressivas no Legislativo e no Executivo. Esta edição celebra não apenas os números, mas as histórias de resistência. Desde a pioneira Vani Braga até a atual bancada histórica na ALPB, traçamos uma linha do tempo de conquistas e desafios. Boa leitura.',
        signature: 'Equipe Diacronia',
        image: 'assets/images/elas_por_elas.jfif',
        backContent: {
            title: 'Índice',
            text: 'Pág. 3 - A Bancada da Resistência\nPág. 5 - As Pioneiras\nPág. 7 - O Voto em Números\nPág. 9 - Perfis e Trajetórias\nPág. 11 - Desafios e Conquistas'
        }
    },
    // PÁGINA 3 - MATÉRIA 1
    {
        type: 'article-left',
        title: 'A Bancada da Resistência',
        text: 'A atual legislatura conta com seis deputadas, a segunda maior bancada feminina da história da Casa, atrás apenas de 1998. Francisca Mota, com seis mandatos, destaca-se pela experiência em Patos e presidências na ALPB. Ao seu lado, nomes como Camila Toscano e Cida Ramos trazem novas pautas ao plenário.',
        image: 'assets/images/mulheres_parlamentares.jfif',
        caption: 'Bancada Feminina: Força e Representatividade.',
        backContent: {
            title: 'Continuação',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        }
    },
    // PÁGINA 4
    {
        type: 'article-right',
        title: 'Renovação e Saúde',
        text: 'A saúde é uma pauta forte na bancada feminina. Dra. Paula e Dra. Jane Panta, ambas médicas, atuam incisivamente na defesa do SUS e hospitais regionais. Danielle do Vale representa a força do Vale do Mamanguape, trazendo o olhar da gestão municipal para o legislativo estadual.',
        image: 'assets/images/mulheres_parlamentares.jfif',
        backContent: {
            title: 'Reflexões',
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    },
    // PÁGINA 5
    {
        type: 'full-image',
        image: 'assets/images/elas_por_elas.jfif',
        titleOverlay: 'As Pioneiras',
        textOverlay: 'Vani Braga: A primeira voz feminina na ALPB (1982).',
        backContent: {
            title: 'Legado Histórico',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        }
    },
    // PÁGINA 6
    {
        type: 'text-page',
        title: 'Raízes Históricas',
        text: 'Falar da participação política da mulher exige lembrar das condições históricas. A Paraíba, estado que proporcionalmente elegeu um grande número de prefeitas em 2012, carrega singularidades. Estudos mostram que o poder municipal muitas vezes serve como porta de entrada, mas também como reduto de oligarquias familiares.',
        quote: 'A mulher é metade da população, a metade menos favorecida. - Bertha Lutz',
        backContent: {
            title: 'Análise Política',
            text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
        }
    },
    // PÁGINA 7
    {
        type: 'chart-page',
        title: 'O Voto em Números',
        text: 'Nas eleições de 2024, a Paraíba elegeu 53 prefeitas e 453 vereadoras. Um salto significativo comparado a 2020. Entretanto, 92% dos eleitores ainda percebem resistência à presença da mulher na política.',
        chartData: { 2020: 37, 2024: 53 },
        backContent: {
            title: 'Dados Complementares',
            text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
        }
    },
    // PÁGINA 8
    {
        type: 'profile-grid',
        title: 'Vozes Ativas',
        profiles: [
            { name: 'Cida Ramos', img: 'assets/images/deputada-Cida-Ramos-removebg-preview.png', role: 'Deputada Estadual (PT)' },
            { name: 'Camila Toscano', img: 'assets/images/Camila-Toscano-1-removebg-preview.png', role: 'Deputada Estadual (PSDB)' }
        ],
        backContent: {
            title: 'Trajetórias',
            text: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'
        }
    },
    // PÁGINA 9
    {
        type: 'text-page',
        title: 'Desafios Contemporâneos',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        backContent: {
            title: 'Perspectivas',
            text: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.'
        }
    },
    // PÁGINA 10
    {
        type: 'article-left',
        title: 'Representatividade Regional',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'assets/images/mulheres_parlamentares.jfif',
        backContent: {
            title: 'Interior e Capital',
            text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.'
        }
    },
    // PÁGINA 11
    {
        type: 'article-right',
        title: 'Conquistas Legislativas',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        image: 'assets/images/elas_por_elas.jfif',
        backContent: {
            title: 'Projetos Aprovados',
            text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.'
        }
    },
    // PÁGINA 12
    {
        type: 'full-image',
        image: 'assets/images/mulheres_parlamentares.jfif',
        titleOverlay: 'Força Coletiva',
        textOverlay: 'A união das vozes femininas transforma a política paraibana.',
        backContent: {
            title: 'Mobilização',
            text: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.'
        }
    },
    // PÁGINA 13
    {
        type: 'text-page',
        title: 'Educação e Política',
        text: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.',
        quote: 'A educação é a arma mais poderosa para mudar o mundo. - Nelson Mandela',
        backContent: {
            title: 'Formação Política',
            text: 'Omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.'
        }
    },
    // PÁGINA 14
    {
        type: 'article-left',
        title: 'Saúde da Mulher',
        text: 'Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'assets/images/elas_por_elas.jfif',
        backContent: {
            title: 'Políticas Públicas',
            text: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
        }
    },
    // PÁGINA 15
    {
        type: 'chart-page',
        title: 'Evolução Temporal',
        text: 'O crescimento da participação feminina na política paraibana ao longo das décadas demonstra avanços significativos, mas ainda há muito a conquistar.',
        chartData: { 1990: 12, 2000: 18, 2010: 25, 2020: 37, 2024: 53 },
        backContent: {
            title: 'Projeções Futuras',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.'
        }
    },
    // PÁGINA 16
    {
        type: 'article-right',
        title: 'Juventude Política',
        text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est.',
        image: 'assets/images/mulheres_parlamentares.jfif',
        backContent: {
            title: 'Nova Geração',
            text: 'Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.'
        }
    },
    // PÁGINA 17
    {
        type: 'text-page',
        title: 'Direitos e Igualdade',
        text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
        quote: 'Direitos iguais para todos, privilégios para ninguém. - Thomas Jefferson',
        backContent: {
            title: 'Marco Legal',
            text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga et harum quidem rerum facilis est et expedita distinctio.'
        }
    },
    // PÁGINA 18
    {
        type: 'profile-grid',
        title: 'Lideranças Emergentes',
        profiles: [
            { name: 'Líder 1', img: 'assets/images/elas_por_elas.jfif', role: 'Vereadora' },
            { name: 'Líder 2', img: 'assets/images/mulheres_parlamentares.jfif', role: 'Secretária' }
        ],
        backContent: {
            title: 'Novas Vozes',
            text: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.'
        }
    },
    // PÁGINA 19
    {
        type: 'article-left',
        title: 'Economia e Desenvolvimento',
        text: 'Omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
        image: 'assets/images/elas_por_elas.jfif',
        backContent: {
            title: 'Empreendedorismo',
            text: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
        }
    },
    // PÁGINA 20
    {
        type: 'full-image',
        image: 'assets/images/elas_por_elas.jfif',
        titleOverlay: 'Futuro Plural',
        textOverlay: 'Construindo uma política mais representativa e democrática.',
        backContent: {
            title: 'Visão de Futuro',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore.'
        }
    },
    // PÁGINA 21
    {
        type: 'text-page',
        title: 'Agradecimentos',
        text: 'Agradecemos a todas as mulheres que participaram desta edição especial, compartilhando suas histórias, lutas e conquistas. Esta revista é um tributo à coragem e determinação de todas que acreditam em uma política mais justa e igualitária.',
        backContent: {
            title: 'Expediente',
            text: 'Coordenação Editorial: Equipe Diacronia\nProjeto Gráfico: Design ALPB\nRevisão: Departamento de Comunicação\nFotografia: Arquivo ALPB'
        }
    },
    // PÁGINA 22
    {
        type: 'article-right',
        title: 'Para Saber Mais',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Acesse nosso portal para mais conteúdos sobre participação feminina na política.',
        backContent: {
            title: 'Referências',
            text: 'ALPB - Assembleia Legislativa da Paraíba\nObservatório de Gênero\nInstituto de Pesquisa Política\nBibliografia disponível no site oficial'
        }
    },
    // PÁGINA 23 - CONTRACAPA
    {
        type: 'back-cover',
        title: 'Diacronia',
        footer: 'ISSN 2966-0521 | João Pessoa - PB | 2025',
        website: 'www.al.pb.leg.br'
    }
];

// ELEMENTOS DO DOM
const book = document.getElementById('book');
const bookContainer = document.getElementById('book-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentPageSpan = document.getElementById('current-page');
const totalPagesSpan = document.getElementById('total-pages');
const loadingScreen = document.getElementById('loading');

// VARIÁVEIS DE CONTROLE
let currentPageIndex = 0;
const totalPages = magazineData.length;

// RENDERIZADORES POR TIPO
const pageRenderers = {
    'cover': (data) => {
        const bgStyle = data.image ? `background-image: url('${data.image}');` : '';
        return `
            <div class="page-content">
                <h1 class="page-title">${data.title}</h1>
                <h2 class="page-subtitle">${data.subtitle}</h2>
                <div class="cover-date">${data.date}</div>
            </div>
            <style>.page-type-cover .front { ${bgStyle} }</style>
        `;
    },
    
    'editorial': (data) => `
        <div class="page-content">
            <h2 class="page-title">${data.title}</h2>
            ${data.image ? `<img src="${data.image}" alt="Editorial" class="editorial-image" onerror="this.style.display='none'">` : ''}
            <div class="page-text">
                <p>${data.content}</p>
            </div>
            <div class="editorial-signature">${data.signature}</div>
        </div>
    `,
    
    'article-left': (data) => `
        <div class="page-content">
            <h2 class="page-title">${data.title}</h2>
            ${data.image ? `<img src="${data.image}" alt="${data.title}" class="article-image" onerror="this.style.display='none'">` : ''}
            ${data.caption ? `<p class="page-caption">${data.caption}</p>` : ''}
            <div class="page-text">
                <p>${data.text}</p>
            </div>
        </div>
    `,
    
    'article-right': (data) => `
        <div class="page-content">
            <h2 class="page-title">${data.title}</h2>
            ${data.image ? `<img src="${data.image}" alt="${data.title}" class="article-image" onerror="this.style.display='none'">` : ''}
            ${data.imagesSecondary ? `
                <div class="images-gallery">
                    ${data.imagesSecondary.map(img => `<img src="${img}" alt="Galeria" onerror="this.style.display='none'">`).join('')}
                </div>
            ` : ''}
            <div class="page-text">
                <p>${data.text}</p>
            </div>
            ${data.pdfLink ? `<a href="${data.pdfLink}" target="_blank" class="pdf-link">Ler Artigo</a>` : ''}
        </div>
    `,
    
    'full-image': (data) => `
        <img src="${data.image}" alt="Full Image" class="full-bg" onerror="this.style.display='none'">
        <div class="overlay-content">
            <div class="title-overlay">${data.titleOverlay}</div>
            <div class="text-overlay">${data.textOverlay}</div>
        </div>
    `,
    
    'text-page': (data) => `
        <div class="page-content">
            <h2 class="page-title">${data.title}</h2>
            <div class="page-text">
                <p>${data.text}</p>
            </div>
            ${data.quote ? `<div class="quote-box">${data.quote}</div>` : ''}
            ${data.pdfLink ? `<a href="${data.pdfLink}" target="_blank" class="pdf-link">Ler Artigo</a>` : ''}
        </div>
    `,
    
    'chart-page': (data) => {
        const chartBars = Object.entries(data.chartData || {}).map(([year, value]) => {
            const height = (value / Math.max(...Object.values(data.chartData))) * 100;
            return `
                <div class="chart-bar" style="height: ${height}%;">
                    <div class="bar-value">${value}</div>
                    <div class="bar-label">${year}</div>
                </div>
            `;
        }).join('');
        
        return `
            <div class="page-content">
                <h2 class="page-title">${data.title}</h2>
                <div class="page-text">
                    <p>${data.text}</p>
                </div>
                <div class="chart-visual">
                    ${chartBars}
                </div>
                ${data.pdfLink ? `<a href="${data.pdfLink}" target="_blank" class="pdf-link">Ler Estudo</a>` : ''}
            </div>
        `;
    },
    
    'profile-grid': (data) => `
        <div class="page-content">
            <h2 class="page-title">${data.title}</h2>
            <div class="profiles-container">
                ${data.profiles.map(profile => `
                    <div class="profile-item">
                        <img src="${profile.img}" alt="${profile.name}" class="profile-img" onerror="this.style.display='none'">
                        <div class="profile-info">
                            <div class="profile-name">${profile.name}</div>
                            <div class="profile-role">${profile.role}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    
    'back-cover': (data) => `
        <div class="page-content">
            <h1 class="page-title">${data.title}</h1>
            <div class="back-footer">${data.footer}</div>
            <div class="back-website">${data.website}</div>
        </div>
    `
};

// INICIALIZAÇÃO
function initMagazine() {
    book.innerHTML = '';
    bookContainer.classList.add('closed');
    
    magazineData.forEach((pageData, index) => {
        const pageElement = document.createElement('div');
        pageElement.classList.add('page', `page-type-${pageData.type}`);
        pageElement.style.zIndex = totalPages - index;
        pageElement.dataset.pageIndex = index;
        
        const renderer = pageRenderers[pageData.type];
        if (!renderer) {
            console.error(`Renderer não encontrado: ${pageData.type}`);
            return;
        }
        
        const pageNum = pageData.pageNumber || index + 1;
        const frontHTML = `<div class="front">${renderer(pageData)}<div class="page-number">${pageNum}</div></div>`;
        
        // Renderizar conteúdo do verso
        let backHTML = '<div class="back">';
        if (pageData.backContent) {
            backHTML += `
                <div class="page-content">
                    <h2 class="page-title">${pageData.backContent.title}</h2>
                    <div class="page-text">
                        <p>${pageData.backContent.text}</p>
                    </div>
                </div>
            `;
        }
        backHTML += '</div>';
        
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
        updateCentering();
    }
}

function prevPage() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        const pages = document.querySelectorAll('.page');
        pages[currentPageIndex].classList.remove('flipped');
        updateZIndexes();
        updateUI();
        updateCentering();
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

// CENTRALIZAÇÃO DINÂMICA
function updateCentering() {
    if (currentPageIndex === 0) {
        bookContainer.classList.add('closed');
        bookContainer.classList.remove('open');
    } else {
        bookContainer.classList.remove('closed');
        bookContainer.classList.add('open');
    }
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

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextPage();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevPage();
    }
});

// SWIPE SUPPORT
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

// INICIALIZAR
document.addEventListener('DOMContentLoaded', initMagazine);