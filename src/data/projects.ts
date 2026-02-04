import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Plataforma ÉPURA Observatório',
    category: 'Web Development',
    year: '2025',
    slug: 'plataforma-epura',
    coverImage: '/plataforma/capasite.png',
    description: 'Plataforma de análise e observação de dados desenvolvida para o grupo EPURA. Em desenvolvimento para sistematizar um banco de dados espacial de visualização interativa.',
    client: 'EPURA - UFMT',
    tools: 'Web Development, GIS Integration, Data Visualization',
    location: 'Cuiabá, Mato Grosso',
    images: [
      {
        id: '1-1',
        src: '/plataforma/site.mp4',
        alt: 'Demonstração da Plataforma ÉPURA Observatório',
        aspectRatio: 'landscape'
      },
      {
        id: '1-2',
        src: '/plataforma/Banner - ÉPURAinOBSERVATÓRIO.png',
        alt: 'Banner da Plataforma ÉPURA',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '2',
    title: 'GIS: Desenvolvimento',
    category: 'GIS',
    year: '2025',
    slug: 'gis-development',
    coverImage: '/gisdev/dev3.png',
    description: 'O objetivo geral consiste em usar algoritmos computacionais para construir um framework de um Índice de Acessibilidade (ÍndAc) que mensure a equidade socioespacial de um determinado território. Todas as análises foram realizadas em Python 3.13.7 (ambiente conda), utilizando bibliotecas: GeoPandas, Rasterio, NetworkX, Statsmodels e Scikit-learn, Matplotlib e Seaborn. O framework ainda está em fase de validação mas já embasou um artigo científico, que está sendo revisado, sobre o projeto do BRT em Cuiabá-MT, Brasil.\n\nAqui você pode consultar a metodologia desenvolvida para produção de artigo enviado para o 8° Congresso Internacional de Arquitetura da Paisagem: [Repositório GitHub](https://github.com/arthurrelke/IndAc-CIAP-.git)',
    client: '8° Congresso Internacional de Arquitetura da Paisagem',
    tools: 'QGIS, Python, GIS Libraries',
    location: 'Cuiabá, Mato Grosso',
    images: [
      {
        id: '2-1',
        src: '/gisdev/dev1.png',
        alt: 'GIS Development - Imagem 1',
        aspectRatio: 'landscape'
      },
      {
        id: '2-2',
        src: '/gisdev/dev2.png',
        alt: 'GIS Development - Imagem 2',
        aspectRatio: 'landscape'
      },
      {
        id: '2-3',
        src: '/gisdev/dev3.png',
        alt: 'GIS Development - Imagem 3',
        aspectRatio: 'landscape'
      },
      {
        id: '2-4',
        src: '/gisdev/dev4.png',
        alt: 'GIS Development - Imagem 4',
        aspectRatio: 'landscape'
      },
      {
        id: '2-5',
        src: '/gisdev/dev5.png',
        alt: 'GIS Development - Imagem 5',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '3',
    title: 'Masterplan',
    category: 'urban-planning',
    year: '2024',
    slug: 'masterplan',
    coverImage: '/masterplan/3.png',
    description: 'Loteamento no conceito de: Alta Densidade, Mobilidade Ativa e Infraestrutura Verde. Projeto desenvolvido no curso de Arquitetura e Urbanismo da UFMT na disciplina do Professor Frank Fraporti. \n\n Agradecimentos: Guilherme Montanher Lucatto e William Moraes',
    client: 'Projeto Acadêmico',
    tools: 'CAD, BIM, ARCHVIZ, GIS',
    location: 'Mato Grosso',
    images: [
      {
        id: '3-1',
        src: '/masterplan/1.png',
        alt: 'Masterplan - Imagem 1',
        aspectRatio: 'landscape',
        caption: 'Diagnóstico da área: O terreno é um "enclave" desconectado, com topografia desafiadora que separava bairros. Estratégia: O projeto deve atuar como uma "costurador do tecido urbano", conectando os Polos de Crescimento ao norte com a malha consolidada ao sul, seguindo os princípios de Desenvolvimento Orientado ao Transporte, soluções baseadas na natureza, e uso eficiente do solo.'
      },
      {
        id: '3-2',
        src: '/masterplan/2.png',
        alt: 'Masterplan - Imagem 2',
        aspectRatio: 'landscape',
        caption: 'Proposta: Conexão dos eixos viários existentes e transformando a APP e suas bordas em um Parque Linear para assim, valorizar o projeto e resolver a drenagem e uso misto com alta densidade: Criação de fachadas ativas e lajes corporativas para gerar vida urbana e empregos, não apenas dormitórios. Destaque para as "Faixas Pedonais Públicas" (Rosa) que cortam as quadras, criando calçadões para pedestres, aumentando a permeabilidade, encorajando o comércio e encurtando caminhos.'
      },
      {
        id: '3-3',
        src: '/masterplan/3.png',
        alt: 'Masterplan - Imagem 3',
        aspectRatio: 'landscape',
        caption: 'A unidade morfológica do projeto é a Quadra Permeável de Uso Misto. Diferente do loteamento tradicional fechado, as quadras são estruturadas por Fachadas Ativas no alinhamento viário e cortadas por Faixas Pedonais Públicas (6m), garantindo a permeabilidade. A volumetria privilegia o escalonamento, com embasamentos comerciais que dão escala humana à rua, encimados por torres residenciais ou corporativas (4 a 16 pavimentos), otimizando a densidade junto aos eixos de transporte (Desenvolvimento Orientado ao Transporte).'
      },
      {
        id: '3-4',
        src: '/masterplan/4.jpg',
        alt: 'Masterplan - Imagem 4',
        aspectRatio: 'landscape',
        caption: 'O sistema viário incorpora conceitos de Traffic Calming: Faixa Exclusiva de Ônibus (BRT) e Ciclovias segregadas, priorizando o transporte coletivo e ativo. O canteiro central funciona como "Jardim de Chuva" para retenção de águas pluviais, e as espécies de vegetação são nativas ao local.'
      },
      {
        id: '3-5',
        src: '/masterplan/5.png',
        alt: 'Masterplan - Imagem 5',
        aspectRatio: 'landscape',
        caption: 'O projeto adota o modelo de Cidade em 15 minutos. Ao concentrar a ocupação e verticalizar as unidades (10.520 UH), liberamos o térreo para uso público e preservação ambiental, mantendo um equilíbrio sustentável entre área construída e áreas verdes, além da otimização do traçado viário e das quadras, foi possível atingir 51% de Área Privativa Vendável, garantindo alta viabilidade econômica sem sacrificar os espaços livres (19%), essenciais para o suporte da densidade proposta de 650 hab/ha.'
      },
      {
        id: '3-6',
        src: '/masterplan/6.png',
        alt: 'Masterplan - Imagem 6',
        aspectRatio: 'landscape',
        caption: 'Parte da planta do loteamento feita no CAD/CIVIL 3D'
      }
    ]
  },
  {
    id: '4',
    title: 'GIS: Análise',
    category: 'gis-analysis',
    year: '2024',
    slug: 'analise-gis',
    coverImage: '/gisana/1.jpg',
    description: 'Análise territorial e mapeamento utilizando dados socioespaciais com a ferramentas GIS/Python. Projeto desenvolvido no curso de Arquitetura e Urbanismo da UFMT na disciplina do Professora Doriane Azevedo.',
    client: 'Projeto Acadêmico',
    tools: 'QGIS, Python, GIS',
    location: 'Mato Grosso',
    images: [
      {
        id: '4-1',
        src: '/gisana/1.jpg',
        alt: 'Análise GIS - Imagem 1',
        aspectRatio: 'landscape'
      },
      {
        id: '4-2',
        src: '/gisana/2.jpg',
        alt: 'Análise GIS - Imagem 2',
        aspectRatio: 'landscape'
      },
      {
        id: '4-3',
        src: '/gisana/3.jpg',
        alt: 'Análise GIS - Imagem 3',
        aspectRatio: 'landscape'
      },
      {
        id: '4-4',
        src: '/gisana/4.jpg',
        alt: 'Análise GIS - Imagem 4',
        aspectRatio: 'landscape'
      },
      {
        id: '4-5',
        src: '/gisana/5.jpg',
        alt: 'Análise GIS - Imagem 5',
        aspectRatio: 'landscape'
      },
      {
        id: '4-6',
        src: '/gisana/6.jpg',
        alt: 'Análise GIS - Imagem 6',
        aspectRatio: 'landscape'
      },
      {
        id: '4-7',
        src: '/gisana/7.jpg',
        alt: 'Análise GIS - Imagem 7',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '5',
    title: 'Arquitetura',
    category: 'architecture',
    year: '2025',
    slug: 'archviz',
    coverImage: '/archviz/arch1.png',
    description: 'Projeto de arquitetura e renderização.\n\n Agradecimentos: \n\n Pavilhão Paiter Surui: Guilherme Montanher Lucatto e João Henrique Velasco. \n\n Faculdade de Arquitetura e Urbanismo: Kamilly e Ali Kamel',
    client: 'Projeto Acadêmico',
    tools: 'BIM, D5 Render, Photoshop, Illustrator',
    location: 'Mato Grosso',
    images: [
      {
        id: '5-1',
        src: '/archviz/arch1.png',
        alt: 'Visualização Arquitetônica - Imagem 1',
        aspectRatio: 'landscape'
      },
      {
        id: '5-2',
        src: '/archviz/arch2.png',
        alt: 'Visualização Arquitetônica - Imagem 2',
        aspectRatio: 'portrait',
        gridWith: '5-3'
      },
      {
        id: '5-3',
        src: '/archviz/arch3.png',
        alt: 'Visualização Arquitetônica - Imagem 3',
        aspectRatio: 'portrait'
      },
      {
        id: '5-4',
        src: '/archviz/arch4.jpg',
        alt: 'Visualização Arquitetônica - Imagem 4',
        aspectRatio: 'landscape'
      },
      {
        id: '5-5',
        src: '/archviz/arch5.avif',
        alt: 'Visualização Arquitetônica - Imagem 5',
        aspectRatio: 'portrait',
        gridWith: '5-6'
      },
      {
        id: '5-6',
        src: '/archviz/arch6.avif',
        alt: 'Visualização Arquitetônica - Imagem 6',
        aspectRatio: 'portrait'
      },
      {
        id: '5-7',
        src: '/archviz/arch7.avif',
        alt: 'Visualização Arquitetônica - Imagem 7',
        aspectRatio: 'landscape'
      }
    ]
  }
];

/**
 * Get a project by its slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

/**
 * Get featured projects for homepage (first 5 projects)
 */
export function getFeaturedProjects(): Project[] {
  return projects.slice(0, 5);
}
