/* ============================================
   DIACRONIA — WEB EDITION (INFINITE SCROLL)
   Revista como página web com rolagem infinita
   ============================================ */

const FALLBACK_IMAGE = 'assets/images/mulheres_parlamentares.jfif';

// Conteúdo base (será repetido/reciclado no infinite scroll)
const magazineData = [
    {
        type: 'cover',
        title: 'Diacronia',
        subtitle: 'As Novas Cunhatãs: Gênero, Tradição e Ruptura',
        date: 'Dezembro 2025',
        image: 'assets/images/mulheres na politica.jfif'
    },
    {
        type: 'text-page',
        title: 'Expediente',
        text: `**Editor-Chefe:** Fabrício Endreon.
**Design e Diagramação:** Equipe Diacronia.
**Pesquisa e Curadoria:** Núcleo de Estudos e Dados.

ISSN 2966-0521. Publicação dedicada à análise política e social da Paraíba.`
    },
    {
        type: 'editorial',
        title: 'Editorial',
        content: `A presença feminina na política da Paraíba segue em crescimento e, com ela, cresce também a sofisticação do debate público.

Nesta edição, organizamos uma leitura rápida, visual e baseada em dados — sem perder o fio histórico que explica como chegamos até aqui.`,
        signature: 'Os Editores',
        image: 'assets/images/elas_por_elas.jfif'
    },
    {
        type: 'toc',
        title: 'Nesta Edição',
        items: [
            { page: 5, label: 'Capa: A Bancada da Resistência' },
            { page: 7, label: 'Números: Eleições 2024' },
            { page: 9, label: 'Dossiê: O Poder Local' },
            { page: 13, label: 'Análise: Democracia e Gênero' },
            { page: 17, label: 'Leis e Proteção' },
            { page: 21, label: 'Fechamento' }
        ]
    },
    {
        type: 'full-image-title',
        image: 'assets/images/mulheres_parlamentares.jfif',
        title: 'A Bancada da Resistência',
        subtitle: 'Representatividade que vira pauta e política pública.'
    },
    {
        type: 'text-page',
        title: 'Quem ocupa a tribuna',
        text: `A força política não está apenas no número de cadeiras, mas na capacidade de pautar temas e construir maioria.

Nesta legislatura, a bancada feminina consolida três frentes de atuação:

1. **Proteção social e direitos humanos**
2. **Saúde e cuidado**
3. **Desenvolvimento e autonomia econômica**`,
        quote: '"Representatividade é presença + voz + permanência."'
    },
    {
        type: 'chart-page',
        title: 'Eleições 2024 em números',
        text: `A Paraíba registrou **53 prefeitas** e **453 vereadoras**. O salto é relevante, mas ainda desigual entre municípios e regiões.

O dado central: crescimento acontece quando partido investe, quando há rede de apoio e quando a violência política é combatida.`,
        chartData: { Prefeitas: 53, Vereadoras: 453 },
        pdfLink: 'assets/pdfs/Mulheres na Política Paraibana_ Guia.pdf'
    },
    {
        type: 'text-page',
        title: 'O que muda de verdade',
        text: `Ganhar eleição é só a primeira etapa. Governar com agenda própria exige:

**Equipe técnica**, **comunicação**, **proteção institucional** e **articulação legislativa**.

Quando essas condições existem, políticas de saúde, assistência e educação tendem a ter maior continuidade e alcance.`,
        pdfLink: 'assets/pdfs/Mulheres na Política Paraibana_ Guia.pdf'
    },
    {
        type: 'full-image-title',
        image: 'assets/images/generuc politic.jfif',
        title: 'Dossiê: O Poder Local',
        subtitle: 'Prefeituras, redes familiares e o desafio da autonomia.'
    },
    {
        type: 'text-page',
        title: 'Perfil das gestoras',
        text: `Em municípios menores, a entrada na política local é muitas vezes mediada por estruturas tradicionais.

Isso não invalida o mérito — mas ajuda a entender por que **autonomia política** e **recursos partidários** são decisivos para mandatos transformadores.`,
        pdfLink: 'assets/pdfs/nayara_sandy,+artigo_6.pdf'
    },
    {
        type: 'text-page',
        title: 'Parentesco e autonomia',
        text: `O “fator parentesco” aparece com frequência em trajetórias municipais. A leitura crítica não é moralista: é estrutural.

Quando a política local concentra poder, **novas lideranças** tendem a entrar pelo caminho disponível — e depois disputar espaço para existir por si.`,
        quote: '"A pergunta não é quem abriu a porta, e sim quem sustenta o mandato."'
    },
    {
        type: 'chart-page',
        title: 'Crescimento (2020 → 2024)',
        text: `A evolução do número de prefeitas mostra avanço consistente. O ponto frágil segue sendo a **distribuição territorial** e a **capacidade de reeleição**.

Mais do que eleger, é preciso garantir permanência com segurança e recursos.`,
        chartData: { 2020: 37, 2024: 53 },
        pdfLink: 'assets/pdfs/nayara_sandy,+artigo_6.pdf'
    },
    {
        type: 'full-image-title',
        image: 'assets/images/mulheres na politica.jfif',
        title: 'Democracia e Gênero',
        subtitle: 'A igualdade formal não basta.'
    },
    {
        type: 'text-page',
        title: 'A ilusão da igualdade',
        text: `Se as regras são as mesmas, por que os resultados são tão diferentes?

A resposta está no que não aparece na urna: financiamento, estrutura de campanha, tempo de TV, redes partidárias e a violência simbólica cotidiana.`,
        pdfLink: 'assets/pdfs/RELF_Democracia+Representativa+e+Igualdade+de+Gênero_+A+participação+da+Mulher+na+Política+Paraibana+sem+marcas+de+revisão.pdf'
    },
    {
        type: 'chart-page',
        title: 'O que o eleitor percebe',
        text: `Muitos afirmam que gênero não influencia o voto. Ao mesmo tempo, quase todos reconhecem resistência cultural.

É a dissonância entre discurso e prática — e ela cobra um preço nas candidaturas e no exercício do mandato.`,
        chartData: { 'Resistência percebida (%)': 92, 'Gênero não influencia (%)': 63 },
        pdfLink: 'assets/pdfs/RELF_Democracia+Representativa+e+Igualdade+de+Gênero_+A+participação+da+Mulher+na+Política+Paraibana+sem+marcas+de+revisão.pdf'
    },
    {
        type: 'text-page',
        title: 'Violência política',
        text: `Violência política de gênero não é só agressão explícita. Também é sabotagem, deslegitimação e isolamento institucional.

Quando a regra é “cansar” a parlamentar, a resposta precisa ser rede, transparência e mecanismos formais de denúncia.`,
        pdfLink: 'assets/pdfs/JNBL07062017.pdf'
    },
    {
        type: 'full-image-title',
        image: 'assets/images/elas_por_elas.jfif',
        title: 'Leis e Proteção',
        subtitle: 'O Estado como garantidor de direitos.'
    },
    {
        type: 'text-page',
        title: 'O que entra na pauta',
        text: `A agenda legislativa com recorte de gênero costuma priorizar três eixos:

1. **Proteção contra violência** (inclusive política)
2. **Saúde da mulher** (prevenção, diagnóstico e cuidado)
3. **Autonomia econômica** (crédito, capacitação e emprego)`,
        pdfLink: 'assets/pdfs/Mulheres na política paraibana (1).pdf'
    },
    {
        type: 'text-page',
        title: 'Instituições importam',
        text: `Leis são base — mas só funcionam com orçamento, serviço público e fiscalização.

Quando o Estado organiza rede de atendimento e dados confiáveis, a política deixa de ser promessa e vira proteção real.`,
        quote: '"Política pública é método: diagnóstico, ação, avaliação."'
    },
    {
        type: 'text-page',
        title: 'Fechamento',
        text: `A diacronia das mulheres na política paraibana é feita de ruptura e permanência: romper barreiras e permanecer no jogo.

O próximo salto é qualidade democrática: financiamento justo, segurança institucional e paridade como regra — não exceção.`,
        signature: 'Diacronia'
    },
    {
        type: 'text-page',
        title: 'Referências (seleção)',
        text: `**Guia:** Mulheres na Política Paraibana.
**Artigo:** Nayara Sandy — perfil das prefeitas.
**Estudo:** RELF — democracia representativa e igualdade de gênero.

Os PDFs citados estão disponíveis nos botões ao longo da revista.`
    },
    {
        type: 'back-cover',
        title: 'Diacronia',
        footer: 'ISSN 2966-0521 | João Pessoa - PB | Dezembro 2025\nRevista digital interativa',
        website: 'www.revistadiacronia.com.br'
    }
];

function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function formatInline(text) {
    const escaped = escapeHtml(text);
    return escaped.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

function formatRichText(text) {
    const raw = String(text ?? '');
    const paragraphs = raw.split(/\n\n+/).map(p => p.trim()).filter(Boolean);
    if (paragraphs.length === 0) return '';
    return paragraphs
        .map(p => `<p>${formatInline(p).replace(/\n/g, '<br>')}</p>`)
        .join('');
}

function imgFallbackAttr() {
    return `onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}';"`;
}

function normalizeImage(path) {
    return path || FALLBACK_IMAGE;
}

// DOM
const feed = document.getElementById('feed');
const sentinel = document.getElementById('feed-sentinel');
const loadingScreen = document.getElementById('loading');

const BATCH_SIZE = 6;
let cursor = 0;
let cycle = 0;

function typeLabel(type) {
    const labels = {
        cover: 'Capa',
        editorial: 'Editorial',
        toc: 'Sumário',
        'full-image-title': 'Destaque',
        'text-page': 'Texto',
        'chart-page': 'Dados',
        'back-cover': 'Fechamento'
    };
    return labels[type] || 'Seção';
}

function renderTOC(items) {
    const listItems = (items || []).map(it => {
        return `
            <li>
                <span>${escapeHtml(it.label)}</span>
                <span class="toc-page">${escapeHtml(it.page)}</span>
            </li>
        `;
    }).join('');
    return `<ul class="section-toc">${listItems}</ul>`;
}

function renderChart(chartData) {
    const entries = Object.entries(chartData || {});
    const values = entries.map(([, v]) => Number(v) || 0);
    const maxValue = Math.max(1, ...values);
    const rows = entries.map(([label, value]) => {
        const v = Number(value) || 0;
        const pct = Math.max(0, Math.min(100, (v / maxValue) * 100));
        return `
            <div class="chart-row">
                <div class="chart-label">${escapeHtml(label)}</div>
                <div class="chart-barTrack" role="img" aria-label="${escapeHtml(label)}: ${escapeHtml(v)}">
                    <div class="chart-barFill" style="width:${pct}%;"></div>
                </div>
                <div class="chart-value">${escapeHtml(v)}</div>
            </div>
        `;
    }).join('');
    return `<div class="chart">${rows}</div>`;
}

function renderSection(item, sectionIndex) {
    const type = item.type;
    const kicker = typeLabel(type);
    const badge = `#${sectionIndex}`;

    if (type === 'cover') {
        const bg = normalizeImage(item.image);
        return `
            <section class="section section-type-cover section-hero" style="background-image:url('${escapeHtml(bg)}');">
                <div class="section-inner">
                    <div class="section-meta">
                        <div class="section-kicker">${escapeHtml(kicker)}</div>
                        <div class="section-badge">${escapeHtml(item.date || badge)}</div>
                    </div>
                    <div class="section-title">${escapeHtml(item.title || '')}</div>
                    <div class="section-subtitle">${escapeHtml(item.subtitle || '')}</div>
                </div>
            </section>
        `;
    }

    if (type === 'full-image-title') {
        return `
            <section class="section section-type-full-image-title">
                <img class="section-media" src="${escapeHtml(normalizeImage(item.image))}" alt="${escapeHtml(item.title || 'Imagem')}" loading="lazy" ${imgFallbackAttr()}>
                <div class="section-inner">
                    <div class="section-meta">
                        <div class="section-kicker">${escapeHtml(kicker)}</div>
                        <div class="section-badge">${escapeHtml(badge)}</div>
                    </div>
                    <div class="section-title">${escapeHtml(item.title || '')}</div>
                    ${item.subtitle ? `<div class="section-subtitle">${escapeHtml(item.subtitle)}</div>` : ''}
                </div>
            </section>
        `;
    }

    if (type === 'toc') {
        return `
            <section class="section section-type-toc">
                <div class="section-inner">
                    <div class="section-meta">
                        <div class="section-kicker">${escapeHtml(kicker)}</div>
                        <div class="section-badge">${escapeHtml(badge)}</div>
                    </div>
                    <div class="section-title">${escapeHtml(item.title || 'Sumário')}</div>
                    ${renderTOC(item.items)}
                </div>
            </section>
        `;
    }

    if (type === 'editorial') {
        return `
            <section class="section section-type-editorial">
                ${item.image ? `<img class="section-media" src="${escapeHtml(normalizeImage(item.image))}" alt="${escapeHtml(item.title || 'Editorial')}" loading="lazy" ${imgFallbackAttr()}>` : ''}
                <div class="section-inner">
                    <div class="section-meta">
                        <div class="section-kicker">${escapeHtml(kicker)}</div>
                        <div class="section-badge">${escapeHtml(badge)}</div>
                    </div>
                    <div class="section-title">${escapeHtml(item.title || '')}</div>
                    <div class="section-text">${formatRichText(item.content || '')}</div>
                    ${item.signature ? `<div class="section-quote">${escapeHtml(item.signature)}</div>` : ''}
                </div>
            </section>
        `;
    }

    if (type === 'chart-page') {
        return `
            <section class="section section-type-chart-page">
                <div class="section-inner">
                    <div class="section-meta">
                        <div class="section-kicker">${escapeHtml(kicker)}</div>
                        <div class="section-badge">${escapeHtml(badge)}</div>
                    </div>
                    <div class="section-title">${escapeHtml(item.title || '')}</div>
                    <div class="section-text">${formatRichText(item.text || '')}</div>
                    ${renderChart(item.chartData)}
                    ${item.pdfLink ? `<a href="${escapeHtml(item.pdfLink)}" target="_blank" class="pdf-link" rel="noopener">Abrir PDF</a>` : ''}
                </div>
            </section>
        `;
    }

    if (type === 'back-cover') {
        return `
            <section class="section section-type-back-cover">
                <div class="section-inner">
                    <div class="section-meta">
                        <div class="section-kicker">${escapeHtml(kicker)}</div>
                        <div class="section-badge">${escapeHtml(badge)}</div>
                    </div>
                    <div class="section-title">${escapeHtml(item.title || '')}</div>
                    <div class="section-text">${formatRichText(String(item.footer || '').replace(/\n/g, '\n\n'))}</div>
                    ${item.website ? `<a class="pdf-link" href="https://${escapeHtml(item.website)}" target="_blank" rel="noopener">${escapeHtml(item.website)}</a>` : ''}
                </div>
            </section>
        `;
    }

    const quote = item.quote ? `<div class="section-quote">${formatInline(item.quote)}</div>` : '';
    const pdf = item.pdfLink ? `<a href="${escapeHtml(item.pdfLink)}" target="_blank" class="pdf-link" rel="noopener">Abrir PDF</a>` : '';
    const signature = item.signature ? `<div class="section-quote">${escapeHtml(item.signature)}</div>` : '';

    return `
        <section class="section section-type-text-page">
            <div class="section-inner">
                <div class="section-meta">
                    <div class="section-kicker">${escapeHtml(kicker)}</div>
                    <div class="section-badge">${escapeHtml(badge)}</div>
                </div>
                <div class="section-title">${escapeHtml(item.title || '')}</div>
                <div class="section-text">${formatRichText(item.text || '')}</div>
                ${quote}
                ${pdf}
                ${signature}
            </div>
        </section>
    `;
}

function getNextItem() {
    if (magazineData.length === 0) return null;

    const skipTypesAfterFirstCycle = new Set(['cover', 'toc', 'back-cover']);
    const skipTitlesAfterFirstCycle = new Set(['Expediente', 'Referências (seleção)']);

    for (let tries = 0; tries < magazineData.length + 2; tries++) {
        const item = magazineData[cursor % magazineData.length];
        cursor++;

        if (cursor % magazineData.length === 0) cycle++;

        if (cycle > 0) {
            if (skipTypesAfterFirstCycle.has(item.type)) continue;
            if (skipTitlesAfterFirstCycle.has(item.title)) continue;
        }

        return item;
    }

    return magazineData[0];
}

function appendBatch() {
    if (!feed || !sentinel) return;

    const fragment = document.createDocumentFragment();
    const currentCount = feed.querySelectorAll('.section').length;

    for (let i = 0; i < BATCH_SIZE; i++) {
        const item = getNextItem();
        if (!item) break;
        const wrapper = document.createElement('div');
        wrapper.innerHTML = renderSection(item, currentCount + i + 1).trim();
        if (wrapper.firstElementChild) fragment.appendChild(wrapper.firstElementChild);
    }

    feed.insertBefore(fragment, sentinel);
}

function initFeed() {
    if (!feed || !sentinel) return;

    appendBatch();
    appendBatch();

    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            appendBatch();
        }
    }, { root: null, threshold: 0.01, rootMargin: '800px 0px' });

    observer.observe(sentinel);

    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 150);
    }
}

document.addEventListener('DOMContentLoaded', initFeed);