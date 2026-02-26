import type { ProfileInfo } from '@/types';

export const profileInfo: ProfileInfo = {
  name: 'Arthur Relke',
  fullName: 'Arthur Assis Esteves Silva',
  tagline: `Analista e Desenvolvedor GIS

Estudante de Arquitetura e Urbanismo - @UFMT`,
  heroIntroduction: 'Avançando a ciência de dados espaciais, visão computacional e gestão urbana',
  summary: 'Analista GIS com três anos de experiência em classificação de uso e cobertura do solo, processamento de imagens Sentinel-2 e integração de bases geoespaciais públicas. Atuação em automação de fluxos com Python e SQL, controle topológico e padronização de dados espaciais para análises territoriais e ambientais.',
  biography: `Brasileiro, 24 anos, apaixonado por tecnologia e urbanismo. Atualmente cursando Arquitetura e Urbanismo na UFMT, combino análise espacial com planejamento urbano para criar soluções inovadoras. Meu trabalho envolve GIS, ciência de dados espaciais e visão computacional aplicada ao desenvolvimento urbano sustentável.`,
  approach: `Minha abordagem integra análise de dados espaciais com princípios de planejamento urbano para criar soluções que melhoram a qualidade de vida nas cidades. Utilizo tecnologias como GIS, Python, e ferramentas de análise espacial para transformar dados em insights acionáveis. Acredito no poder da tecnologia geoespacial para construir cidades mais inteligentes, sustentáveis e inclusivas.`,
  awards: [],
  clients: [
    'EPURA - Grupo de Pesquisa e Extensão Estudos de Planejamento Urbano Regional - UFMT',
    'Projetos acadêmicos e de pesquisa em análise espacial',
  ],
  education: 'Universidade Federal de Mato Grosso (UFMT) - Bacharelado em Arquitetura e Urbanismo (em andamento)',
  location: 'Cuiabá, Mato Grosso, Brasil',
  email: 'arthur.silva3@sou.ufmt.br',
  phone: '(65) 99347-2919',
  availability: 'Disponível para projetos de GIS e análise espacial',
  socialLinks: {
    instagram: 'https://www.instagram.com/arthurrelke/',
    linkedin: 'https://www.linkedin.com/in/arthur-relke/',
    github: 'https://github.com/arthurrelke'
  },
  // Professional portrait image
  portraitImage: '/foto.jpg',

  experience: [
    {
      role: 'Bolsista em Análise e Desenvolvimento GIS',
      company: 'EPURA – Grupo de Pesquisa e Extensão (UFMT)',
      period: 'Fev/2023 – Atual',
      achievements: [
        'Mapeamento de 252,58 km² da área urbana de Cuiabá na pesquisa "Espaços Vazios", estruturando fluxo completo de geoprocessamento (aquisição, processamento, classificação e geração cartográfica) em QGIS.',
        'Desenvolvimento de modelo de detecção com YOLOv8 atingindo 89,60% de overall accuracy para identificação de padrões urbanos em imagens.',
        'Consolidação e padronização de bases vetoriais municipais, estaduais e federais (IBAMA, INCRA, EMBRAPA, TerraBrasilis, MapBiomas), assegurando consistência topológica e integridade espacial.',
        'Automação de coleta de dados via web scraping, reduzindo processo manual de 14 horas para 12 minutos.',
        'Estruturação de rotina com GeoPandas e SQL para cruzamento de ~300.000 IDs de feições, substituindo processo manual de semanas por fluxo automatizado (10h modelagem + 16h processamento).',
        'Análise de dinâmicas de uso e cobertura do solo no Bioma Cerrado, com identificação de fitofisionomias e padrões de expansão urbana.',
        'Produção de mapas técnicos e análises apresentados em eventos nacionais (ENEPEA, QUAPÁ-SEL, ENANPUR, CIAP).',
        'Elaboração de nota técnica sobre procedimentos de geoprocessamento avançado e automação (QGIS e Python), estruturando diretrizes internas de padronização, replicabilidade e controle de qualidade.',
      ],
    },
  ],

  technicalKnowledge: [
    {
      category: 'Sensoriamento Remoto',
      items: [
        'Processamento de imagens Sentinel-2 e ALOS PALSAR-2 (SAR L-Band)',
        'Composições RGB e falsa-cor (NIR – banda 8)',
        'Cálculo de NDVI e EVI',
        'Classificação supervisionada de uso e cobertura do solo',
        'Validação temática e análise de acurácia',
      ],
    },
    {
      category: 'Geoprocessamento',
      items: [
        'Edição vetorial e controle topológico em QGIS',
        'Manipulação de sistemas de referência (SIRGAS 2000 / UTM)',
        'Estruturação e padronização de bases espaciais',
        'Automação com PyQGIS, GeoPandas, Pandas e SQL',
        'Elaboração de layouts cartográficos técnicos',
      ],
    },
  ],

  skills: [
    { name: 'QGIS', domain: 'GIS' },
    { name: 'Python', domain: 'Programação' },
    { name: 'PyQGIS', domain: 'Programação' },
    { name: 'GeoPandas', domain: 'Programação' },
    { name: 'Pandas', domain: 'Programação' },
    { name: 'SQL (PostgreSQL)', domain: 'Programação' },
    { name: 'Rhino', domain: 'Design' },
    { name: 'Microsoft Office', domain: 'Design' },
    { name: 'Inglês – B2', domain: 'Idiomas' },
  ],

  certifications: [
    {
      degree: 'Bacharelado em Arquitetura e Urbanismo',
      institution: 'Universidade Federal de Mato Grosso (UFMT)',
      period: '8º período',
      status: 'Conclusão prevista: Jun/2027',
    },
    {
      degree: 'Curso Profissionalizante em Software, Hardware e Redes',
      institution: 'Cebrac Cuiabá',
      period: '2017',
      status: '160h – Concluído',
    },
  ],
};
