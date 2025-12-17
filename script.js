/* Render dynamic landing from `magazineSections` array.
   - Builds header nav, hero, and content sections
   - Updates progress bar and QR in footer
   - Safe path resolution for assets
*/
const magazineContent = [
    // --- SEÇÃO 1: HERO (CAPA) ---
    {
        type: 'hero',
        layout: 'fullscreen',
        title: 'DIACRONIA',
        subtitle: 'As Novas Cunhatãs: Gênero, Tradição e Ruptura na Paraíba',
        date: 'Dezembro 2025',
        backgroundImage: 'assets/images/imagem1.jpeg', // Imagem de fundo
        overlayOpacity: 0.6, // Escurecer imagem para ler o texto
        ctaText: 'Ler a Edição',
        ctaLink: '#editorial'
    },

    // --- SEÇÃO 2: EDITORIAL ---
    {
        type: 'text-block',
        id: 'editorial',
        layout: 'image-right',
        category: 'Editorial',
        title: 'A Força da História',
        text: `A presença feminina na política da Paraíba não é apenas estatística; é uma narrativa de ruptura. Desde a conquista do voto em 1932 até a atual bancada histórica na ALPB, esta edição celebra a resistência.
        
        Com base em dados acadêmicos e fatos históricos, traçamos o perfil de quem decide o futuro do estado, desafiando o coronelismo e as estruturas tradicionais de poder.`,
        author: 'Theo Nogueira Virginio',
        date: '14/12/2025',
        image: 'assets/images/imagem2.jpeg',
    },

    // --- SEÇÃO 3: ARTIGO HISTÓRICO (Fonte: nayara_sandy.pdf) ---
    {
        type: 'feature-story',
        layout: 'image-left',
        category: 'Memória',
        title: 'As Pioneiras do Voto',
        headline: 'Onde tudo começou: De Dulce a Vani',
        content: `A história política feminina na Paraíba tem marcos indeléveis. Maria Dulce Barbosa fez história na década de 1960 ao ser eleita a primeira prefeita do estado, no município de Queimadas, rompendo com a noção de que o executivo era lugar exclusivo de homens.
        
        No legislativo estadual, o silêncio foi quebrado em 1982 por Vani Braga, a primeira deputada estadual eleita. Sua trajetória pavimentou o caminho para que, décadas depois, a ALPB alcançasse sua segunda maior bancada feminina da história.`,
      author: 'Theo Nogueira Virginio',
      date: '14/12/2025',
        image: 'assets/images/vanebraga.jpg',
        caption: 'Vani Braga: A voz pioneira na Casa de Epitácio Pessoa.',
        pdfButton: { label: 'Ler Artigo Acadêmico', link: 'assets/pdfs/nayara_sandy,+artigo_6.pdf' }
    },

    // --- SEÇÃO 4: PERFIL DA BANCADA (Fonte: ALPB.html) ---
    {
        type: 'grid-profiles',
        title: 'A Bancada da Resistência (2025)',
        description: 'Conheça as seis deputadas que compõem a atual legislatura da Assembleia Legislativa da Paraíba:',
        columns: 3,
        cards: [
            {
                name: 'Francisca Mota',
                role: 'Decana (Republicanos)',
                bio: 'Com seis mandatos, é a voz da experiência. Já foi prefeita de Patos e presidente da ALPB.',
                img: 'assets/images/franscica mota.jpg'
            },
            {
                name: 'Cida Ramos',
                role: 'Deputada (PT)',
                bio: 'Professora da UFPB, foi a mais votada em 2018. Atuação forte em direitos humanos e assistência social.',
                img: 'assets/images/deputada-Cida-Ramos-removebg-preview.png'
            },
            {
                name: 'Camila Toscano',
                role: 'Deputada (PSDB)',
                bio: 'Advogada, foca seu mandato na defesa dos direitos da mulher, especialmente na região do Brejo.',
                img: 'assets/images/Camila-Toscano-1-removebg-preview.png'
            },
            {
                name: 'Dra. Paula',
                role: 'Deputada (PP)',
                bio: 'Médica com forte atuação no Sertão e Cajazeiras, defendendo a saúde pública.',
                img: 'assets/images/dr paula.jpg'
            },
            {
                name: 'Dra. Jane Panta',
                role: 'Deputada (PP)',
                bio: 'Cardiologista e representante de Santa Rita, focada na saúde metropolitana.',
                img: 'assets/images/jane.jpg'
            },
            {
                name: 'Silvia Benjamin',
                role: 'Deputada (Republicanos)', // Atualizado conforme imagem disponível
                bio: 'Nova força política representando a renovação no parlamento estadual.',
                img: 'assets/images/silvia.jpg'
            }
        ],
        pdfButton: { label: 'Ver Perfil Completo (ALPB)', link: 'https://www.al.pb.leg.br/' }
    },

    // --- SEÇÃO 5: ESTATÍSTICAS E ANÁLISE (Fonte: RELF_Democracia.pdf) ---
    {
        type: 'stats-section',
        theme: 'dark', // Fundo azul marinho/preto
        title: 'O Paradoxo do Eleitor',
        headline: 'O que pensam os paraibanos?',
        text: 'Uma pesquisa exclusiva revela uma dissonância entre o discurso e a prática nas urnas:',
        stats: [
            { value: '92%', label: 'dos eleitores percebem resistência contra mulheres na política' },
            { value: '63%', label: 'afirmam que o gênero NÃO influencia seu voto' },
            { value: '49%', label: 'apontam a falta de apoio partidário como maior barreira' }
        ],
        image: 'assets/images/generuc politic.jfif', // fallback/name from assets
        pdfButton: { label: 'Ler Análise Completa', link: 'assets/pdfs/RELF_Democracia+Representativa+e+Igualdade+de+Gênero_+A+participação+da+Mulher+na+Política+Paraibana+sem+marcas+de+revisão.pdf' }
    },

    // --- SEÇÃO 6: DOSSIÊ PREFEITAS (Fonte: nayara_sandy.pdf) ---
    {
        type: 'text-block',
        layout: 'image-left',
        category: 'Poder Local',
        title: 'Quem Governa as Cidades?',
        content: `Estudos revelam o perfil das gestoras municipais na Paraíba:
        
        Perfil: Maioria casada, entre 30 e 50 anos, com Ensino Superior completo (57%).
        Território: Governam majoritariamente municípios pequenos (menos de 10 mil habitantes) e com baixo IDH.
        Desafio: O "fator parentesco" ainda é decisivo para a validação política em muitas regiões.`,
        image: 'assets/images/imagem3.jpg',
        pdfButton: { label: 'Ler Artigo Sobre Prefeitas', link: 'assets/pdfs/nayara_sandy,+artigo_6.pdf' }
    },

    // --- SEÇÃO 7: RODAPÉ COM QR CODE ---
    {
        type: 'footer-qrcode',
        title: 'Acesse o Conteúdo Estendido',
        text: 'Escaneie para acessar vídeos das sessões, documentos originais e a versão mobile.',
        qrImage: 'assets/pdfs/qrcode.jpg',
        copyright: '© 2025 Revista Diacronia | ISSN 2966-0521'
    }
];

/* --- Helpers --- */
function create(tag, props={}, children=[]) {
  const el = document.createElement(tag);
  for(const k in props){
    if(k==='class') el.className = props[k];
    else if(k==='html') el.innerHTML = props[k];
    else if(k==='attr') for(const a in props.attr) el.setAttribute(a, props.attr[a]);
    else el.setAttribute(k, props[k]);
  }
  (Array.isArray(children)?children:[children]).forEach(c=>{ if(!c) return; if(typeof c==='string') el.appendChild(document.createTextNode(c)); else el.appendChild(c); });
  return el;
}

function safePath(p){ return p || ''; }

/* --- Renderers for requested types --- */
function renderHero(s){
  const sec = create('section',{class:'hero hero--full', attr:{style:`background-image:url(${safePath(s.backgroundImage)});`} });
  const overlay = create('div',{class:'hero-overlay'});
  overlay.style.opacity = (s.overlayOpacity!=null? s.overlayOpacity : 0.5);
  sec.appendChild(overlay);
  const inner = create('div',{class:'container hero-inner'});
  inner.appendChild(create('h1',{class:'hero-title',html: s.title}));
  inner.appendChild(create('p',{class:'hero-sub',html: s.subtitle}));
  inner.appendChild(create('p',{class:'hero-date',html: s.date}));
  if(s.ctaText){
    const a = create('a',{class:'btn-cta',href:s.ctaLink||'#'} , [s.ctaText]);
    a.addEventListener('click', e=>{ e.preventDefault(); document.querySelector(a.getAttribute('href'))?.scrollIntoView({behavior:'smooth'}); });
    inner.appendChild(a);
  }
  sec.appendChild(inner);
  return sec;
}

function renderTextBlock(s){
  const sec = create('section',{id: s.id||'', class:'section text-block'});
  const cont = create('div',{class:'container text-block__grid'});
  const imgWrap = create('div',{class:'text-block__image'});
  imgWrap.appendChild(create('img',{src:safePath(s.image), alt: s.title || ''}));
  const txt = create('div',{class:'text-block__content'});
  if(s.category) txt.appendChild(create('div',{class:'muted',html: s.category}));
  if(s.author || s.date){
    const authorText = s.author ? `Por ${s.author}` : '';
    const dateText = s.date ? `${s.date}` : '';
    const joiner = (s.author && s.date) ? ' — ' : '';
    txt.appendChild(create('p',{class:'muted byline', html: `${authorText}${joiner}${dateText}`}));
  }
  txt.appendChild(create('h2',{html: s.title}));
  txt.appendChild(create('div',{class:'text-block__body', html: s.text || s.content || ''}));
  if(s.pdfButton) txt.appendChild(create('a',{class:'btn-pdf',href:safePath(s.pdfButton.link),target:'_blank',rel:'noopener'}, [s.pdfButton.label]));
  if((s.layout||'image-right') === 'image-left') cont.appendChild(imgWrap), cont.appendChild(txt);
  else cont.appendChild(txt), cont.appendChild(imgWrap);
  sec.appendChild(cont);
  return sec;
}

function renderFeatureStory(s){
  const sec = create('section',{class:'section feature-story'});
  const cont = create('div',{class:'container split-grid'});
  const media = create('div',{class:'split-media'});
  media.appendChild(create('img',{src:safePath(s.image), alt:s.title||''}));
  const text = create('div',{class:'split-text'});
  if(s.category) text.appendChild(create('div',{class:'muted',html: s.category}));
  text.appendChild(create('h2',{html: s.title}));
  if(s.headline) text.appendChild(create('h3',{html: s.headline}));
  // Byline: autor e data (ex.: Por Theo Nogueira Virginio — 16/12/2025)
  if(s.author || s.date){
    const authorText = s.author ? `Por ${s.author}` : '';
    const dateText = s.date ? `${s.date}` : '';
    const joiner = (s.author && s.date) ? ' — ' : '';
    text.appendChild(create('p',{class:'muted byline', html: `${authorText}${joiner}${dateText}`}));
  }
  text.appendChild(create('div',{class:'feature-body', html: s.content}));
  if(s.caption) text.appendChild(create('p',{class:'muted',html: s.caption}));
  if(s.pdfButton) text.appendChild(create('a',{class:'btn-pdf',href:safePath(s.pdfButton.link),target:'_blank',rel:'noopener'}, [s.pdfButton.label]));
  if((s.layout||'image-left') === 'image-left') cont.appendChild(media), cont.appendChild(text);
  else cont.appendChild(text), cont.appendChild(media);
  sec.appendChild(cont);
  return sec;
}

function renderGridProfiles(s){
  const sec = create('section',{class:'section grid-profiles'});
  const cont = create('div',{class:'container'});
  cont.appendChild(create('h2',{html: s.title}));
  if(s.description) cont.appendChild(create('p',{class:'lead', html: s.description}));
  const grid = create('div',{class:'profiles-grid'});
  (s.cards||[]).forEach(c=>{
    const card = create('article',{class:'profile-card'});
    const imgWrap = create('div',{class:'profile-image'});
    imgWrap.appendChild(create('img',{src: safePath(c.img), alt: c.name}));
    const body = create('div',{class:'profile-body'});
    body.appendChild(create('h4',{html: c.name}));
    body.appendChild(create('p',{class:'muted', html: c.role}));
    body.appendChild(create('p',{html: c.bio}));
    card.appendChild(imgWrap); card.appendChild(body); grid.appendChild(card);
  });
  cont.appendChild(grid);
  if(s.pdfButton) cont.appendChild(create('a',{class:'btn-pdf',href:safePath(s.pdfButton.link),target:'_blank',rel:'noopener'}, [s.pdfButton.label]));
  sec.appendChild(cont);
  return sec;
}

function renderStatsSection(s){
  const sec = create('section',{class:'section stats-section'+(s.theme==='dark'? ' stats-section--dark':'')});
  const cont = create('div',{class:'container stats-inner'});
  cont.appendChild(create('h2',{html: s.title}));
  if(s.headline) cont.appendChild(create('p',{class:'lead', html: s.headline}));
  if(s.text) cont.appendChild(create('p',{html: s.text}));
  const statsWrap = create('div',{class:'stats-grid'});
  (s.stats||[]).forEach(st=>{
    const stEl = create('div',{class:'stat'});
    stEl.appendChild(create('div',{class:'value', html: st.value}));
    stEl.appendChild(create('div',{class:'label', html: st.label}));
    statsWrap.appendChild(stEl);
  });
  cont.appendChild(statsWrap);
  if(s.pdfButton) cont.appendChild(create('a',{class:'btn-pdf',href:safePath(s.pdfButton.link),target:'_blank',rel:'noopener'}, [s.pdfButton.label]));
  sec.appendChild(cont);
  return sec;
}

function renderFooterQr(s){
  const sec = create('footer',{class:'site-footer footer-qr'});
  const cont = create('div',{class:'container footer-qr__inner'});
  const left = create('div',{class:'footer-qr__left'});
  left.appendChild(create('h3',{html: s.title}));
  left.appendChild(create('p',{html: s.text}));
  const qr = create('img',{src: safePath(s.qrImage), alt: 'QR Code'});
  const right = create('div',{class:'footer-qr__right'}); right.appendChild(qr);
  cont.appendChild(left); cont.appendChild(right);
  const cr = create('div',{class:'footer-qr__copy', html: s.copyright || ''});
  sec.appendChild(cont); sec.appendChild(cr);
  return sec;
}

function renderAll(list){
  const app = document.getElementById('app');
  app.innerHTML = '';
  list.forEach(s=>{
    let node = null;
    switch(s.type){
      case 'hero': node = renderHero(s); break;
      case 'text-block': node = renderTextBlock(s); break;
      case 'feature-story': node = renderFeatureStory(s); break;
      case 'grid-profiles': node = renderGridProfiles(s); break;
      case 'stats-section': node = renderStatsSection(s); break;
      case 'footer-qrcode': node = renderFooterQr(s); break;
      default: node = create('section',{class:'section'}, [create('h3',{html: s.title||'Seção'})]);
    }
    if(node) app.appendChild(node);
  });
}

/* progress bar update (if present) */
function updateProgress(){
  const bar = document.getElementById('progress-bar');
  if(!bar) return;
  const scrolled = window.scrollY || window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight>0 ? (scrolled / docHeight)*100 : 0;
  bar.style.width = pct + '%';
}

function init(){
  renderAll(magazineContent);
  document.addEventListener('scroll', updateProgress, {passive:true});
  updateProgress();
}

document.addEventListener('DOMContentLoaded', init);